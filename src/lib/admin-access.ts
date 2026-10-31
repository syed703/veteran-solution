// The database RPC verifies the confirmed owner email; no client email check grants access.
type Result = { data: boolean | null; error: unknown };
export async function resolveAdminAccess(
  readRole: () => PromiseLike<Result>,
  claimOwner: () => PromiseLike<Result>,
) {
  const role = await readRole();
  if (role.error) throw new Error('Unable to verify admin access.');
  if (role.data === true) return true;
  const claim = await claimOwner();
  if (claim.error) throw new Error('Unable to verify owner access.');
  return claim.data === true;
}