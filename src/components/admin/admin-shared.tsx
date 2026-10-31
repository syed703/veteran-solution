import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useServerFn } from '@tanstack/react-start';
import { adminAction } from '@/lib/admin.functions';
import { toast } from 'sonner';
import type { ReactNode } from 'react';
export function useAdminAction() {
 const query = useQueryClient(); const action = useServerFn(adminAction);
 return useMutation({ mutationFn: action, onSuccess: async () => { await query.invalidateQueries({ queryKey: ['admin-data'] }); await query.invalidateQueries({ queryKey: ['enquiries'] }); await query.invalidateQueries({ queryKey: ['notes'] }); toast.success('Change saved.'); }, onError: (e) => toast.error(e.message) });
}
export function AdminTitle({ title, description, children }: { title: string; description: string; children?: ReactNode }) { return <div className="admin-title"><div><div className="admin-eyebrow">VETERAN SOLUTION</div><h1>{title}</h1><p>{description}</p></div><div className="admin-actions">{children}</div></div>; }
export function Status({ status }: { status: string }) { return <span className="admin-status" data-status={status}>{status}</span>; }
export function Empty({ children = 'No records yet.' }: { children?: ReactNode }) { return <div className="admin-empty">{children}</div>; }
export function dateLabel(value: string) { return new Date(value).toLocaleString(); }
