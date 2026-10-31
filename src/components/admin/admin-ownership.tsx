import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function AdminOwnership({ userId }: { userId: string }) {
  const queryClient = useQueryClient();
  const ownership = useQuery({
    queryKey: ['admin-ownership', userId],
    queryFn: async () => {
      const { data, error } = await supabase.from('admin_ownership').select('owner_user_id,developer_revoked,transferred_at').maybeSingle();
      if (error) throw error;
      return data;
    },
  });
  const revoke = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.rpc('revoke_temporary_admin');
      if (error || data !== true) throw new Error('Only the verified permanent owner can revoke temporary access.');
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['admin-ownership'] });
      toast.success('Temporary developer access permanently revoked.');
    },
    onError: () => toast.error('Unable to revoke access. Please sign in as the verified permanent owner.'),
  });
  return <section className="admin-panel">
    <div className="admin-panel-heading"><h2>Account ownership</h2></div>
    <div className="admin-panel-body space-y-4">
      {ownership.isPending ? <p role="status">Loading ownership…</p> : ownership.isError ? <p role="alert">Unable to load ownership status.</p> : <>
        <p>Permanent owner: brandanwilliams560@gmail.com</p>
        <p>Temporary developer: developerdev180@gmail.com</p>
        <p>{ownership.data?.owner_user_id ? 'Client ownership active.' : 'Awaiting verified client sign-in.'} {ownership.data?.developer_revoked ? 'Temporary developer access permanently revoked.' : 'Temporary developer access is available before client ownership.'}</p>
        {ownership.data?.owner_user_id === userId && <Button variant="outline" disabled={revoke.isPending || ownership.data.developer_revoked} onClick={() => revoke.mutate()}>
          {ownership.data.developer_revoked ? 'Developer access revoked' : revoke.isPending ? 'Revoking…' : 'Revoke temporary developer access'}
        </Button>}
      </>}
    </div>
  </section>;
}