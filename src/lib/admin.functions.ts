import { createServerFn, createMiddleware } from '@tanstack/react-start';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { z } from 'zod';
import { enquiryStatuses, serviceSchema } from './admin-rules';
import { cmsPages, safeContentUrl } from './cms';
const requireAdmin = createMiddleware({ type: 'function' }).middleware([requireSupabaseAuth]).server(async ({ context, next }) => {
  const { data, error } = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'admin' });
  if (error || !data) throw new Error('Admin access required.');
  return next();
});
export const getAdminData = createServerFn({ method: 'POST' }).middleware([requireAdmin]).handler(async ({ context }) => {
  const db = context.supabase;
  const [overview, services, content, activity, recent, profile] = await Promise.all([
    db.rpc('admin_overview'), db.from('services').select('*').order('display_order'), db.from('website_content').select('*'), db.from('admin_activity').select('*').order('created_at', { ascending: false }).limit(12), db.from('enquiries').select('*').order('created_at', { ascending: false }).limit(6), db.from('profiles').select('*').eq('id', context.userId).single(),
  ]);
  for (const result of [overview, services, content, activity, recent, profile]) if (result.error) throw new Error('Unable to load admin records.');
  return { overview: overview.data, services: services.data ?? [], content: content.data ?? [], activity: activity.data ?? [], recent: recent.data ?? [], profile: profile.data, userId: context.userId, email: String(context.claims.email ?? '') };
});
export const listEnquiries = createServerFn({ method: 'POST' }).middleware([requireAdmin]).inputValidator(z.object({ search: z.string().max(180), status: z.string(), from: z.string(), to: z.string(), page: z.number().int().min(1), sort: z.enum(['newest', 'oldest', 'name']) })).handler(async ({ data, context }) => {
  let q = context.supabase.from('enquiries').select('*', { count: 'exact' });
  if (data.search) { const s = data.search.replace(/[%_,().]/g, ''); q = q.or(`name.ilike.%${s}%,email.ilike.%${s}%,service.ilike.%${s}%`); }
  if (data.status) q = q.eq('status', data.status);
  if (data.from) q = q.gte('created_at', `${data.from}T00:00:00Z`);
  if (data.to) q = q.lte('created_at', `${data.to}T23:59:59.999Z`);
  const result = await q.order(data.sort === 'name' ? 'name' : 'created_at', { ascending: data.sort !== 'newest' }).range((data.page - 1) * 10, data.page * 10 - 1);
  if (result.error) throw new Error('Unable to load enquiries.');
  return { rows: result.data, count: result.count ?? 0 };
});
export const enquiryDetails = createServerFn({ method: 'POST' }).middleware([requireAdmin]).inputValidator(z.string().uuid()).handler(async ({ data, context }) => {
  const notes = await context.supabase.from('enquiry_notes').select('*').eq('enquiry_id', data).order('created_at');
  if (notes.error) throw new Error('Unable to load notes.'); return notes.data;
});
const actionSchema = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('status'), id: z.string().uuid(), status: z.enum(enquiryStatuses) }),
  z.object({ kind: z.literal('delete-enquiry'), id: z.string().uuid() }),
  z.object({ kind: z.literal('note'), id: z.string().uuid(), body: z.string().trim().min(1).max(3000) }),
  z.object({ kind: z.literal('service'), service: serviceSchema }),
  z.object({ kind: z.literal('delete-service'), id: z.string().uuid() }),
  z.object({ kind: z.literal('content'), key: z.string().max(180), label: z.string().max(180), fields: z.record(z.string().max(6000)), publish: z.boolean() }),
  z.object({ kind: z.literal('profile'), name: z.string().trim().max(120), timezone: z.string().min(1).max(100) }),
]);
export const adminAction = createServerFn({ method: 'POST' }).middleware([requireAdmin]).inputValidator(actionSchema).handler(async ({ data, context }) => {
  const db = context.supabase;
  let result;
  switch (data.kind) {
    case 'status': result = await db.from('enquiries').update({ status: data.status }).eq('id', data.id).select('id').single(); break;
    case 'delete-enquiry': result = await db.from('enquiries').delete().eq('id', data.id).select('id').single(); break;
    case 'note': result = await db.from('enquiry_notes').insert({ enquiry_id: data.id, author_id: context.userId, body: data.body }); break;
    case 'service': { const { id, ...values } = data.service; result = id ? await db.from('services').update(values).eq('id', id).select('id').single() : await db.from('services').insert(values); break; }
    case 'delete-service': result = await db.from('services').delete().eq('id', data.id).select('id').single(); break;
    case 'content': {
      const page = cmsPages.find(p => p.key === data.key);
      if (!page) throw new Error('Select an existing website page.');
      for (const [key, value] of Object.entries(data.fields)) {
        const field = page.fields.find(f => f.key === key);
        if (!field) throw new Error('Unknown content field.');
        if ((field.type === 'link' || field.type === 'image') && !safeContentUrl(value, field.type === 'image')) throw new Error(`Enter a valid ${field.type} for ${field.label}.`);
      }
      result = await db.from('website_content').upsert({ section_key: data.key, label: page.label, draft: data.fields, ...(data.publish ? { published: data.fields, published_at: new Date().toISOString() } : {}) }, { onConflict: 'section_key' }); break;
    }
    case 'profile': result = await db.from('profiles').update({ display_name: data.name, timezone: data.timezone, updated_at: new Date().toISOString() }).eq('id', context.userId).select('id').single(); break;
  }
  if (result?.error) throw new Error('Could not save this change. Check the values and try again.');
  return { ok: true };
});
