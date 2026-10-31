import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useSuspenseQuery, useQueryClient } from '@tanstack/react-query';
import { adminQuery, adminHead } from '@/lib/admin-query';
import { AdminTitle, useAdminAction } from '@/components/admin/admin-shared';
import { signOut } from '@/components/admin/admin-shell';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
export const Route=createFileRoute('/_authenticated/admin/settings')({head:()=>adminHead('Settings'),loader:({context})=>context.queryClient.ensureQueryData(adminQuery),component:Settings});
function Settings(){const {data}=useSuspenseQuery(adminQuery);const action=useAdminAction();const router=useRouter();const query=useQueryClient();return <><AdminTitle title="Settings" description="Account preferences"/><section className="admin-panel"><div className="admin-panel-heading"><h2>Regional preferences</h2></div><form className="admin-panel-body admin-form" onSubmit={e=>{e.preventDefault();action.mutate({data:{kind:'profile',name:data.profile?.display_name??'',timezone:String(new FormData(e.currentTarget).get('timezone'))}});}}><label>Time zone<select name="timezone" defaultValue={data.profile?.timezone}>{['America/New_York','America/Chicago','America/Denver','America/Los_Angeles','Asia/Karachi','UTC'].map(t=><option key={t}>{t}</option>)}</select></label><Button disabled={action.isPending}>Save preferences</Button></form></section><section className="admin-panel"><div className="admin-panel-heading"><h2>Session</h2></div><div className="admin-panel-body"><Button variant="outline" onClick={()=>signOut(query,router)}><LogOut/>Sign out</Button></div></section></>;}
