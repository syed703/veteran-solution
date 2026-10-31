import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const sql = readFileSync('drizzle/migrations/0004_temporary_developer_admin_and_owner_handover.sql', 'utf8');
describe('Designated admin authorization safeguards', () => {
  it('allows only the two designated email addresses to claim', () => {
    expect(sql).toContain("caller_email NOT IN ('brandanwilliams560@gmail.com', 'developerdev180@gmail.com')");
    expect(sql).toContain('OR caller_email IS NULL THEN RETURN false');
  });
  it('requires confirmed email from the trusted auth record', () => {
    expect(sql).toContain('email_confirmed_at IS NOT NULL INTO caller_email, verified FROM auth.users WHERE id=auth.uid()');
    expect(sql).toContain('IF verified IS DISTINCT FROM true THEN RETURN false');
  });
  it('permanently prevents developer claims after ownership or revocation', () => {
    expect(sql).toContain('IF ownership.owner_user_id IS NOT NULL OR ownership.developer_revoked THEN RETURN false');
    expect(sql).toContain('SET owner_user_id=auth.uid(), developer_revoked=true');
    expect(sql).toContain('user_id=ownership.developer_user_id');
  });
  it('restricts manual revocation to the authenticated permanent owner', () => {
    expect(sql).toContain("ownership.owner_user_id IS DISTINCT FROM auth.uid() OR NOT public.has_role(auth.uid(),'admin') THEN RETURN false");
    expect(sql).toContain('REVOKE ALL ON FUNCTION public.revoke_temporary_admin() FROM PUBLIC, anon');
  });
  it('serializes ownership changes and pins the developer identity', () => {
    expect(sql).toContain("pg_advisory_xact_lock(hashtext('veteran_initial_admin'))");
    expect(sql).toContain('ownership.developer_user_id<>auth.uid() THEN RETURN false');
  });
});