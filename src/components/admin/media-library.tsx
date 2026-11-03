import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useServerFn } from '@tanstack/react-start';
import { Images, Eye, Trash2, ImagePlus } from 'lucide-react';
import { toast } from 'sonner';
import { listMedia, deleteMedia } from '@/lib/media.functions';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { MediaUpload } from './admin-upload';
export function MediaLibrary({ onSelect }: { onSelect?: (value: string) => void }) {
  const fetch = useServerFn(listMedia); const remove = useServerFn(deleteMedia); const client = useQueryClient();
  const query = useQuery({ queryKey: ['admin-media'], queryFn: () => fetch() });
  const [search, setSearch] = useState(''); const [filter, setFilter] = useState('all');
  const [preview, setPreview] = useState<(NonNullable<typeof query.data>)[number] | null>(null);
  const [deleting, setDeleting] = useState<(NonNullable<typeof query.data>)[number] | null>(null);
  const [replacing, setReplacing] = useState<(NonNullable<typeof query.data>)[number] | null>(null);
  const mutation = useMutation({ mutationFn: (path: string) => remove({ data: path }), onSuccess: async () => { setDeleting(null); await client.invalidateQueries({ queryKey: ['admin-media'] }); toast.success('Unused image deleted.'); }, onError: e => toast.error(e.message) });
  const rows = (query.data ?? []).filter(image => `${image.filename} ${image.path}`.toLowerCase().includes(search.toLowerCase()) && (filter === 'all' || (filter === 'used' ? image.used : filter === 'unused' ? !image.used : image.type === filter)));
  return <div className="admin-form"><MediaUpload onUploaded={value => { if (onSelect) onSelect(value); }} />
    <div className="admin-filters"><input aria-label="Search images" placeholder="Search filenames…" value={search} onChange={e => setSearch(e.target.value)} /><select aria-label="Filter images" value={filter} onChange={e => setFilter(e.target.value)}><option value="all">All images</option><option value="used">In use</option><option value="unused">Unused</option>{['jpeg','png','webp','gif','avif'].map(t => <option key={t} value={`image/${t}`}>{t.toUpperCase()}</option>)}</select></div>
    {query.isPending && <p role="status">Loading images…</p>}{query.error && <p role="alert" className="admin-error">{query.error.message}<Button variant="outline" onClick={() => query.refetch()}>Retry</Button></p>}
    <div className="admin-media-grid">{rows.map(image => <article key={image.path} className="admin-media-item"><img src={image.url} alt={image.filename} /><div className="admin-media-details"><strong title={image.filename}>{image.filename}</strong><small>{Math.ceil(image.size / 1024)} KB · {image.used ? 'In use' : 'Unused'}</small><div className="admin-actions">{onSelect && <Button size="sm" onClick={() => onSelect(`media:${image.path}`)}>Select image</Button>}<Button variant="outline" size="icon" title="Preview image" aria-label={`Preview ${image.filename}`} onClick={() => setPreview(image)}><Eye size={16} /></Button><Button variant="outline" size="icon" title="Upload replacement" aria-label={`Replace ${image.filename}`} onClick={() => setReplacing(image)}><ImagePlus size={16} /></Button><Button variant="outline" size="icon" disabled={image.used} title={image.used ? 'Image is in use' : 'Delete unused image'} aria-label={`Delete ${image.filename}`} onClick={() => setDeleting(image)}><Trash2 size={16} /></Button></div></div></article>)}</div>
    {!query.isPending && !query.error && !rows.length && <p className="admin-empty">No matching images.</p>}
    <Dialog open={!!preview} onOpenChange={open => { if (!open) setPreview(null); }}><DialogContent className="admin-dialog admin-app"><DialogTitle>{preview?.filename}</DialogTitle><DialogDescription>Image preview</DialogDescription>{preview && <img className="admin-media-full" src={preview.url} alt={preview.filename} />}</DialogContent></Dialog>
    <Dialog open={!!deleting} onOpenChange={open => { if (!open) setDeleting(null); }}><DialogContent className="admin-dialog admin-app"><DialogTitle>Delete unused image?</DialogTitle><DialogDescription>{deleting?.filename} will be permanently removed.</DialogDescription><div className="admin-actions"><Button variant="outline" onClick={() => setDeleting(null)}>Cancel</Button><Button variant="destructive" disabled={mutation.isPending} onClick={() => { if (deleting) mutation.mutate(deleting.path); }}><Trash2 />Delete image</Button></div></DialogContent></Dialog>
    <Dialog open={!!replacing} onOpenChange={open => { if (!open) setReplacing(null); }}><DialogContent className="admin-dialog admin-app"><DialogTitle>Replacement for {replacing?.filename}</DialogTitle><DialogDescription>The original remains unchanged until a replacement is selected and published in Website Content.</DialogDescription>{replacing && <img className="admin-media-full" src={replacing.url} alt={replacing.filename} />}<MediaUpload onUploaded={value => { setReplacing(null); onSelect?.(value); }} /></DialogContent></Dialog>
  </div>;
}
export function MediaPicker({ onSelect }: { onSelect: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  return <><Button variant="outline" onClick={() => setOpen(true)} type="button"><Images />Choose from library</Button><Dialog open={open} onOpenChange={setOpen}><DialogContent className="admin-dialog admin-app admin-media-dialog"><DialogTitle>Choose an image</DialogTitle><DialogDescription>Media library</DialogDescription><MediaLibrary onSelect={value => { onSelect(value); setOpen(false); }} /></DialogContent></Dialog></>;
}