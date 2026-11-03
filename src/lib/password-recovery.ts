export const recoveryEvent = 'veteran-password-recovery';
export const recoveryStorageKey = 'veteran-recovery';

export function recoverySessionMatches(marker: string | null, userId: string | undefined) {
  return Boolean(userId && marker === userId);
}

export function passwordRecoveryError(error: { code?: string; message?: string }) {
  const code = error.code ?? '';
  const message = error.message ?? '';
  if (code === 'weak_password' || /weak|pwned|easy to guess/i.test(message))
    return 'Choose a strong, unique password that has not appeared in known data leaks.';
  if (code === 'same_password' || /different from|same password/i.test(message))
    return 'Choose a password different from your current password.';
  if (/rate|too many/i.test(code + message))
    return 'Too many attempts. Please wait a few minutes and try again.';
  if (/expired|invalid|session|token|current password/i.test(code + message))
    return 'This recovery link is expired or invalid. Request a new password reset email.';
  return 'Unable to update your password. Please try again or request a new reset email.';
}