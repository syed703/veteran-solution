import { describe, expect, it } from 'vitest';
import { recoverySessionMatches, passwordRecoveryError } from '@/lib/password-recovery';

describe('password recovery validation', () => {
  it('requires the recovery marker to match the authenticated user', () => {
    expect(recoverySessionMatches('developer-id', 'developer-id')).toBe(true);
    expect(recoverySessionMatches('developer-id', 'other-id')).toBe(false);
  });
  it('rejects a marker without an authenticated user and the old unbound marker', () => {
    expect(recoverySessionMatches('developer-id', undefined)).toBe(false);
    expect(recoverySessionMatches('1', 'developer-id')).toBe(false);
    expect(recoverySessionMatches(null, 'developer-id')).toBe(false);
  });
  it('classifies expired recovery tokens without echoing sensitive provider details', () => {
    expect(passwordRecoveryError({ code: 'otp_expired', message: 'private details' })).toBe('This recovery link is expired or invalid. Request a new password reset email.');
  });
});