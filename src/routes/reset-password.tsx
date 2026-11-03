import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { adminHead } from '@/lib/admin-query';
import { passwordRecoveryError, recoveryEvent, recoverySessionMatches, recoveryStorageKey } from '@/lib/password-recovery';

export const Route = createFileRoute('/reset-password')({ head: () => adminHead('Reset password'), component: Reset });
function Reset() {
  const [state, setState] = useState<'checking' | 'ready' | 'invalid' | 'done'>('checking');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let active = true;
    let generation = 0;
    const hash = new URLSearchParams(window.location.hash.slice(1));
    const query = new URLSearchParams(window.location.search);
    const hasRecoveryIntent = hash.get('type') === 'recovery' || query.get('type') === 'recovery';
    const callbackError = hash.get('error') || query.get('error');
    const code = query.get('code');
    const tokenHash = query.get('token_hash');
    const validate = async () => {
      const run = ++generation;
      try {
        // Wait for the auth client to finish consuming the email callback before checking.
        const session = await supabase.auth.getSession();
        if (session.error) throw session.error;
        const { data, error } = await supabase.auth.getUser();
        if (!active || run !== generation) return;
        const marker = sessionStorage.getItem(recoveryStorageKey);
        if (error || !data.user || (!hasRecoveryIntent && !recoverySessionMatches(marker, data.user.id))) {
          setState('invalid');
          setMessage('This recovery link is missing, expired or invalid. Request a new password reset email.');
          return;
        }
        sessionStorage.setItem(recoveryStorageKey, data.user.id);
        setMessage('');
        setState('ready');
        // Remove callback credentials from the address bar after validation.
        window.history.replaceState(window.history.state, '', window.location.pathname);
      } catch {
        if (active && run === generation) {
          setState('invalid');
          setMessage('Unable to validate this recovery session. Reopen your email link or request a new one.');
        }
      }
    };
    const onRecovery = () => { void validate(); };
    window.addEventListener(recoveryEvent, onRecovery);
    const initialize = async () => {
      if (callbackError) {
        if (active) { setState('invalid'); setMessage('This recovery link is expired or invalid. Request a new password reset email.'); }
        window.history.replaceState(window.history.state, '', window.location.pathname);
        return;
      }
      try {
        // Standard implicit callbacks are consumed by the generated auth client.
        // Also support PKCE callbacks and explicit recovery token-hash links.
        if (tokenHash && query.get('type') === 'recovery') {
          const result = await supabase.auth.verifyOtp({ token_hash: tokenHash, type: 'recovery' });
          if (result.error) throw result.error;
        } else if (code) {
          const current = await supabase.auth.getSession();
          if (!current.data.session) {
            const result = await supabase.auth.exchangeCodeForSession(code);
            if (result.error) throw result.error;
          }
        }
        await validate();
      } catch (error) {
        if (active) { setState('invalid'); setMessage(passwordRecoveryError(error instanceof Error ? error : {})); }
      }
    };
    void initialize();
    return () => { active = false; window.removeEventListener(recoveryEvent, onRecovery); };
  }, []);
  return <main className="admin-login"><div className="admin-login-panel"><h1>New password</h1>
    {state === 'checking' && <p role="status">Verifying your recovery link…</p>}
    {state === 'ready' && <form onSubmit={async e => {
      e.preventDefault();
      const form = e.currentTarget;
      const fields = new FormData(form);
      if (fields.get('password') !== fields.get('confirm')) { setMessage('Passwords do not match.'); return; }
      setBusy(true); setMessage('');
      try {
        const user = await supabase.auth.getUser();
        if (user.error || !recoverySessionMatches(sessionStorage.getItem(recoveryStorageKey), user.data.user?.id)) {
          setState('invalid'); throw new Error('Invalid recovery session');
        }
        const { error } = await supabase.auth.updateUser({ password: String(fields.get('password')) });
        if (error) throw error;
        form.reset();
        sessionStorage.removeItem(recoveryStorageKey);
        setState('done');
        setMessage('Password updated. Sign in with your new password.');
        await supabase.auth.signOut();
      } catch (error) { setMessage(passwordRecoveryError(error instanceof Error ? error : {})); }
      finally { setBusy(false); }
    }}>
      <label>New password<input name="password" type="password" autoComplete="new-password" minLength={8} required disabled={busy}/></label>
      <label>Confirm password<input name="confirm" type="password" autoComplete="new-password" minLength={8} required disabled={busy}/></label>
      <Button type="submit" disabled={busy}>{busy ? 'Updating password…' : 'Update password'}</Button>
    </form>}
    {message && <p role={state === 'done' ? 'status' : 'alert'}>{message}</p>}
    <Link to="/admin/login">{state === 'invalid' ? 'Request a new reset email' : 'Back to sign in'}</Link>
  </div></main>;
}
