import { createServerFn } from '@tanstack/react-start';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { z } from 'zod';
import { comparisonSchema, comparisonFields, readComparisons, publishComparison } from './comparison-projects';

export const saveComparisons = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth])
  .inputValidator(z.object({ projects: z.array(comparisonSchema), operation: z.enum(['draft', 'publish', 'delete', 'publish-all']), id: z.string().optional() }))
  .handler(async ({ data, context }) => {
    const db = context.supabase;
    const role = await db.rpc('has_role', { _user_id: context.userId, _role: 'admin' });
    if (role.error || !role.data) throw new Error('Admin access required.');
    if (new Set(data.projects.map(p => p.id)).size !== data.projects.length) throw new Error('Project identifiers must be unique.');
    const row = await db.from('website_content').select('draft,published').eq('section_key', 'page:home').maybeSingle();
    if (row.error) throw new Error('Unable to load saved comparisons.');
    const strings = (value: unknown): Record<string, string> => value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).filter((entry): entry is [string, string] => typeof entry[1] === 'string')) : {};
    const draft = strings(row.data?.draft), published = strings(row.data?.published);
    let publicProjects = readComparisons(published);
    if (data.operation === 'publish') publicProjects = publishComparison(publicProjects, data.projects, data.id ?? '');
    if (data.operation === 'delete') publicProjects = publicProjects.filter(p => p.id !== data.id);
    if (data.operation === 'publish-all') {
      for (const project of data.projects) publishComparison([], [project], project.id);
      publicProjects = data.projects;
    }
    const result = await db.rpc('admin_save_comparisons', {
      p_draft: comparisonFields(data.projects, draft),
      ...(data.operation === 'draft' ? {} : { p_published: comparisonFields(publicProjects, published) }),
    });
    if (result.error) throw new Error('Unable to save comparisons. Please try again.');
    return { ok: true };
  });