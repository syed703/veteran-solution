import { createFileRoute, redirect } from '@tanstack/react-router';
import { supabase } from '@/integrations/supabase/client';
import { AdminShell } from '@/components/admin/admin-shell';
export const Route = createFileRoute('/_authenticated/admin')({ beforeLoad: async () => { const { data } = await supabase.auth.getUser(); if (!data.user) throw redirect({ to: '/admin/login' }); const role = await supabase.rpc('has_role', { _user_id: data.user.id, _role: 'admin' }); if (role.error || !role.data) throw redirect({ to: '/admin/login', search: { denied: true } }); }, component: AdminShell });
