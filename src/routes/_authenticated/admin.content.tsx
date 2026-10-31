import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Save, Send, ExternalLink } from 'lucide-react';
import { adminQuery, adminHead } from '@/lib/admin-query';
import { cmsPages, type CmsPage } from '@/lib/cms';
import { AdminTitle, useAdminAction, dateLabel } from '@/components/admin/admin-shared';
import { MediaUpload, AdminImage } from '@/components/admin/admin-upload';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
export const Route = createFileRoute('/_authenticated/admin/content')({ head: () => adminHead('Website content'), loader: ({ context }) => context.queryClient.ensureQueryData(adminQuery), component: Content });
function Content() {
  const { data } = useSuspenseQuery(adminQuery);
  const [pageKey, setPageKey] = useState('page:home');
  const page = cmsPages.find(p => p.key === pageKey);
  if (!page) return null;
  return <><AdminTitle title="Website content" description="Pages, images & published content" />
    <div className="admin-filters"><Select value={pageKey} onValueChange={setPageKey}><SelectTrigger aria-label="Website page"><SelectValue /></SelectTrigger><SelectContent>{cmsPages.map(p => <SelectItem key={p.key} value={p.key}>{p.label}</SelectItem>)}</SelectContent></Select>
    <Button variant="outline" asChild><a href={page.path || '/'} target="_blank" rel="noreferrer"><ExternalLink />Open page</a></Button></div>
    <Editor key={page.key} page={page} saved={data.content.find(c => c.section_key === page.key)} /></>;
}
function Editor({ page, saved }: { page: CmsPage; saved: { draft: unknown; published_at: string | null } | undefined }) {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const draft = saved?.draft && typeof saved.draft === 'object' ? saved.draft as Record<string, unknown> : {};
    return Object.fromEntries(page.fields.map(f => { const value = draft[f.key]; return [f.key, typeof value === 'string' ? value : f.value]; }));
  });
  const groups = [...new Set(page.fields.map(f => f.group))];
  const [group, setGroup] = useState(groups.includes('Home Hero') ? 'Home Hero' : groups.includes('Page Intro') ? 'Page Intro' : groups[0] ?? 'General');
  const [search, setSearch] = useState('');
  const [uploads, setUploads] = useState<Record<string, boolean>>({});
  const action = useAdminAction();
  const busy = action.isPending || Object.values(uploads).some(Boolean);
  const save = (publish: boolean) => action.mutate({ data: { kind: 'content', key: page.key, label: page.label, fields: values, publish } });
  const fields = page.fields.filter(f => f.group === group && `${f.label} ${values[f.key]}`.toLowerCase().includes(search.toLowerCase()));
  return <section className="admin-panel"><div className="admin-panel-heading"><h2>{page.label}</h2><p>{saved?.published_at ? `Published ${dateLabel(saved.published_at)}` : 'Original website content'}</p></div>
    <div className="admin-panel-body admin-form"><div className="admin-filters"><Select value={group} onValueChange={setGroup}><SelectTrigger aria-label="Content section"><SelectValue /></SelectTrigger><SelectContent>{groups.map(g => <SelectItem key={g} value={g}>{g === 'Comparison Section' ? 'Before & After' : g}</SelectItem>)}</SelectContent></Select><input aria-label="Search content fields" placeholder="Search fields" value={search} onChange={e => setSearch(e.target.value)} /></div>
      <div className="admin-actions"><Button variant="outline" disabled={busy} onClick={() => save(false)}><Save />Save draft</Button><Button disabled={busy} onClick={() => save(true)}><Send />Publish changes</Button></div>
      {fields.map(field => <div key={field.key} className="admin-form"><label htmlFor={field.key}>{field.label}</label>
        {field.type === 'text' && field.value.length > 120 ? <textarea id={field.key} maxLength={6000} value={values[field.key] ?? ''} onChange={e => setValues(v => ({ ...v, [field.key]: e.target.value }))} /> : <input id={field.key} maxLength={6000} value={values[field.key] ?? ''} onChange={e => setValues(v => ({ ...v, [field.key]: e.target.value }))} />}
        {field.type === 'image' && <><AdminImage value={values[field.key] ?? ''} /><MediaUpload onBusyChange={b => setUploads(v => ({ ...v, [field.key]: b }))} onUploaded={image => setValues(v => ({ ...v, [field.key]: image }))} /></>}
      </div>)}
      {!fields.length && <p>No matching fields.</p>}
    </div></section>;
}
