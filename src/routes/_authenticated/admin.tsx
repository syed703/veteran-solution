import { createFileRoute, redirect, useRouter, type ErrorComponentProps } from '@tanstack/react-router';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { AdminShell } from '@/components/admin/admin-shell';
export const Route = createFileRoute('/_authenticated/admin')({ beforeLoad: async () => { const { data } = await supabase.auth.getUser(); if (!data.user) throw redirect({ to: '/admin/login' }); const role = await supabase.rpc('has_role', { _user_id: data.user.id, _role: 'admin' }); if (role.error || !role.data) throw redirect({ to: '/admin/login', search: { denied: true } }); }, component: AdminShell,
 pendingComponent: () => <main className="admin-login"><p role="status">Loading workspace…</p></main>,
 errorComponent: AdminError,
});
function AdminError({reset}:ErrorComponentProps){
 const router=useRouter();const boundary=useQueryErrorResetBoundary();
 return <main className="admin-login"><div className="admin-login-panel"><h1>Unable to load workspace</h1><p role="alert">Your records could not be loaded. Please try again.</p><Button onClick={()=>{boundary.reset();reset();void router.invalidate();}}>Try again</Button></div></main>;
}
