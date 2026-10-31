// The database RPC verifies designated emails and performs the atomic ownership handover.
type Result = { data: boolean | null; error: unknown };
export async function resolveAdminAccess(
  readRole: () => PromiseLike<Result>,
  claimOwner: () => PromiseLike<Result>,
) {
  const claim = await claimOwner();
  if (claim.error) throw new Error('Unable to verify owner access.');
  if (claim.data === true) return true;
  const role = await readRole();
  if (role.error) throw new Error('Unable to verify admin access.');
  return role.data === true;
}