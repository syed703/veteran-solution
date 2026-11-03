import { createServerFn, createMiddleware } from '@tanstack/react-start';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { z } from 'zod';
const admin = createMiddleware({ type: 'function' }).middleware([requireSupabaseAuth]).server(async ({ context, next }) => {
  const role = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'admin' });
  if (role.error || !role.data) throw new Error('Admin access required.');
  return next();
});
export const getDraftContent = createServerFn({ method: 'POST' }).middleware([admin]).handler(async ({ context }) => {
  const rows = await context.supabase.from('website_content').select('section_key,draft');
  if (rows.error) throw new Error('Unable to load draft preview.');
  const content: Record<string, Record<string, string>> = {};
  for (const row of rows.data) {
    const values: Record<string, string> = {};
    if (row.draft && typeof row.draft === 'object' && !Array.isArray(row.draft)) {
      for (const [key, value] of Object.entries(row.draft)) {
        if (typeof value !== 'string') continue;
        if (value.startsWith('media:')) {
          const signed = await context.supabase.storage.from('website-media').createSignedUrl(value.slice(6), 3600);
          if (signed.error) throw new Error('Unable to preview draft image.');
          values[key] = signed.data.signedUrl;
        } else values[key] = value;
      }
    }
    content[row.section_key] = values;
  }
  return content;
});
export const listMedia = createServerFn({ method: 'POST' }).middleware([admin]).handler(async ({ context }) => {
  const db = context.supabase;
  const [content, services] = await Promise.all([db.from('website_content').select('draft,published'), db.from('services').select('image_url')]);
  if (content.error || services.error) throw new Error('Unable to check image usage.');
  const used = new Set<string>();
  for (const service of services.data) used.add(service.image_url);
  for (const row of content.data) for (const values of [row.draft, row.published]) {
    if (values && typeof values === 'object') for (const value of Object.values(values)) if (typeof value === 'string') used.add(value);
  }
  const images: { path: string; filename: string; size: number; type: string; used: boolean; url: string }[] = [];
  for (let offset = 0; ; offset += 100) {
    const result = await db.storage.from('website-media').list('images', { limit: 100, offset, sortBy: { column: 'created_at', order: 'desc' } });
    if (result.error) throw new Error('Unable to load media library.');
    for (const file of result.data) {
      if (!file.id) continue;
      const path = `images/${file.name}`;
      const signed = await db.storage.from('website-media').createSignedUrl(path, 3600);
      if (signed.error) throw new Error('Unable to preview library image.');
      images.push({ path, filename: String(file.metadata?.originalName ?? file.metadata?.name ?? file.name), size: Number(file.metadata?.size ?? 0), type: String(file.metadata?.mimetype ?? ''), used: used.has(`media:${path}`), url: signed.data.signedUrl });
    }
    if (result.data.length < 100) break;
  }
  return images;
});
export const deleteMedia = createServerFn({ method: 'POST' }).middleware([admin]).inputValidator(z.string().regex(/^images\/[a-zA-Z0-9._-]+$/)).handler(async ({ data, context }) => {
  const unused = await context.supabase.rpc('admin_media_unused', { p_path: data });
  if (unused.error || !unused.data) throw new Error('This image is used by saved or published content and cannot be deleted.');
  const result = await context.supabase.storage.from('website-media').remove([data]);
  if (result.error || !result.data.length) throw new Error('Unable to delete this image.');
  return { ok: true };
});