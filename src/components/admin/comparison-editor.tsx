import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useServerFn } from '@tanstack/react-start';
import { Plus, Pencil, Trash2, ChevronUp, ChevronDown, Save, Send, Eye } from 'lucide-react';
import { toast } from 'sonner';
import { comparisonFields, readComparisons, type ComparisonProject } from '@/lib/comparison-projects';
import { saveComparisons } from '@/lib/comparisons.functions';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog';
import { AdminImage, MediaUpload } from './admin-upload';
import { MediaPicker } from './media-library';

export function ComparisonEditor({ saved, onFields }: { saved: { draft: unknown; published: unknown } | undefined; onFields: (fields: Record<string, string>) => void }) {
  const asStrings = (value: unknown): Record<string, string> => value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).filter((entry): entry is [string, string] => typeof entry[1] === 'string')) : {};
  const [projects, setProjects] = useState(() => readComparisons(asStrings(saved?.draft)));
  const [expanded, setExpanded] = useState<string[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [uploading, setUploading] = useState<Record<string, boolean>>({});
  const query = useQueryClient();
  const saveFn = useServerFn(saveComparisons);
  const mutation = useMutation({ mutationFn: saveFn, onSuccess: async (_, variables) => {
    await Promise.all([query.invalidateQueries({ queryKey: ['admin-data'] }), query.invalidateQueries({ queryKey: ['public-site'] }), query.invalidateQueries({ queryKey: ['admin-draft-preview'] }), query.invalidateQueries({ queryKey: ['admin-media'] })]);
    toast.success(variables.data.operation === 'draft' ? 'Comparison draft saved.' : variables.data.operation === 'delete' ? 'Project deleted.' : 'Comparisons published.');
  }, onError: (error) => toast.error(error.message) });
  const busy = mutation.isPending || Object.values(uploading).some(Boolean);
  const update = (next: ComparisonProject[]) => { setProjects(next); onFields(comparisonFields(next, asStrings(saved?.draft))); };
  const change = (id: string, fields: Partial<ComparisonProject>) => update(projects.map(p => p.id === id ? { ...p, ...fields } : p));
  const save = (operation: 'draft' | 'publish' | 'publish-all', id?: string) => mutation.mutate({ data: { projects, operation, id } });
  const move = (id: string, direction: number) => {
    const ordered = [...projects].sort((a, b) => a.order - b.order), index = ordered.findIndex(p => p.id === id), target = index + direction;
    if (target < 0 || target >= ordered.length) return;
    const item = ordered[index], other = ordered[target];
    if (!item || !other) return;
    ordered[index] = other; ordered[target] = item;
    update(ordered.map((p, i) => ({ ...p, order: i + 1 })));
  };
  const add = () => {
    const id = crypto.randomUUID();
    update([...projects, { id, title: '', category: 'Renovating', description: '', beforeImage: '', afterImage: '', beforeAlt: '', afterAlt: '', beforeLabel: 'BEFORE', afterLabel: 'AFTER', instruction: 'DRAG TO COMPARE', ariaLabel: '', order: Math.max(0, ...projects.map(p => p.order)) + 1, enabled: true }]);
    setExpanded(v => [...v, id]);
  };
  const published = readComparisons(asStrings(saved?.published));
  return <div className="admin-comparison-editor">
    <div className="admin-comparison-toolbar"><div><h3>Before & After projects</h3><span>{projects.length} projects</span></div><div className="admin-actions"><Button variant="outline" disabled={busy} onClick={() => save('draft')}><Save />Save comparisons draft</Button><Button disabled={busy} onClick={() => save('publish-all')}><Send />Publish all comparisons</Button><Button variant="outline" disabled={busy} onClick={add}><Plus />Add New Before & After Project</Button></div></div>
    {[...projects].sort((a, b) => a.order - b.order).map((project, index) => {
      const open = expanded.includes(project.id);
      const isPublished = published.some(p => p.id === project.id && JSON.stringify(p) === JSON.stringify(project));
      const text = (label: string, key: 'title' | 'description' | 'beforeLabel' | 'afterLabel' | 'instruction' | 'ariaLabel') => <label>{label}{key === 'description' ? <textarea value={project[key]} onChange={e => change(project.id, { [key]: e.target.value })} maxLength={6000} /> : <input value={project[key]} onChange={e => change(project.id, { [key]: e.target.value })} maxLength={key === 'ariaLabel' ? 300 : 180} />}</label>;
      return <article className="admin-project-card" key={project.id} aria-label={project.title || 'New Before & After project'}>
        <header className="admin-project-header"><div className="admin-project-heading"><span className="admin-project-number">{String(index + 1).padStart(2, '0')}</span><div><h4>{project.title || 'New project'}</h4><small>{project.category} · {isPublished ? 'Published' : 'Draft changes'}</small></div></div><div className="admin-actions"><label className="admin-project-toggle"><Switch checked={project.enabled} disabled={busy} onCheckedChange={enabled => change(project.id, { enabled })} aria-label={`Enable ${project.title || 'new project'}`} />{project.enabled ? 'Enabled' : 'Disabled'}</label><Button variant="ghost" size="icon" title="Move up" aria-label={`Move ${project.title || 'new project'} up`} disabled={busy || index === 0} onClick={() => move(project.id, -1)}><ChevronUp /></Button><Button variant="ghost" size="icon" title="Move down" aria-label={`Move ${project.title || 'new project'} down`} disabled={busy || index === projects.length - 1} onClick={() => move(project.id, 1)}><ChevronDown /></Button><Button variant="outline" disabled={busy} aria-expanded={open} onClick={() => setExpanded(v => open ? v.filter(id => id !== project.id) : [...v, project.id])}><Pencil />{open ? 'Close' : 'Edit'}</Button><Button variant="ghost" size="icon" title="Delete project" aria-label={`Delete ${project.title || 'new project'}`} disabled={busy} onClick={() => setDeleteId(project.id)}><Trash2 /></Button></div></header>
        <div className="admin-project-images">{(['before', 'after'] as const).map(side => <div className="admin-project-image" key={side}><h5>{side === 'before' ? 'Before' : 'After'}</h5><div className="admin-project-thumbnail">{project[`${side}Image`] ? <AdminImage value={project[`${side}Image`]} /> : <span>No image selected</span>}</div>{open && <div className="admin-form"><div className="admin-project-media"><MediaUpload onBusyChange={value => setUploading(v => ({ ...v, [`${project.id}-${side}`]: value }))} onUploaded={value => change(project.id, { [`${side}Image`]: value })} /><MediaPicker onSelect={value => change(project.id, { [`${side}Image`]: value })} /></div><label>{side === 'before' ? 'Before image description' : 'After image description'}<textarea value={project[`${side}Alt`]} onChange={e => change(project.id, { [`${side}Alt`]: e.target.value })} maxLength={6000} /></label></div>}</div>)}</div>
        {open && <div className="admin-project-details admin-form"><h5>Project information</h5><div className="admin-form-row">{text('Project title', 'title')}<label>Project category<Select value={project.category || 'Renovating'} onValueChange={category => change(project.id, { category })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{[...new Set(['Renovating', 'Exterior care', 'Pool cleaning', 'Painting', 'Property cleaning', 'Floor renovation', 'Other', ...projects.map(p => p.category).filter(Boolean)])].map(category => <SelectItem key={category} value={category}>{category}</SelectItem>)}</SelectContent></Select></label></div>{text('Short description', 'description')}<div className="admin-form-row">{text('Before label', 'beforeLabel')}{text('After label', 'afterLabel')}</div><div className="admin-form-row">{text('Comparison slider instruction', 'instruction')}<label>Display order<input type="number" min="0" value={project.order} onChange={e => change(project.id, { order: Math.max(0, Math.floor(Number(e.target.value))) })} /></label></div>{text('Slider accessibility description', 'ariaLabel')}</div>}
        <footer className="admin-project-footer"><span>{isPublished ? 'Published' : 'Unpublished changes'}</span><div className="admin-actions"><Button variant="outline" disabled={busy} onClick={() => save('draft', project.id)}><Save />Save draft</Button><Button variant="outline" disabled={busy} onClick={async () => { const tab = window.open('about:blank', '_blank'); try { await mutation.mutateAsync({ data: { projects, operation: 'draft' } }); if (tab) tab.location.href = '/?cms-preview=1'; } catch { tab?.close(); } }}><Eye />Preview</Button><Button disabled={busy} onClick={() => save('publish', project.id)}><Send />Publish project</Button></div></footer>
      </article>;
    })}
    {!projects.length && <div className="admin-empty">No Before & After projects.</div>}
    <AlertDialog open={deleteId !== null} onOpenChange={open => { if (!open) setDeleteId(null); }}><AlertDialogContent className="admin-app admin-dialog"><AlertDialogHeader><AlertDialogTitle>Delete this project?</AlertDialogTitle><AlertDialogDescription>The project will be removed from drafts and the public homepage. Its images stay in the Media Library.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={async () => { const id = deleteId; if (!id) return; const next = projects.filter(p => p.id !== id); try { await mutation.mutateAsync({ data: { projects: next, operation: 'delete', id } }); update(next); } catch { /* mutation displays the error */ } }}>Delete project</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>
  </div>;
}