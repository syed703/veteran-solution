import { createFileRoute, useNavigate, useRouter, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { adminHead } from '@/lib/admin-query';
import { resolveAdminAccess } from '@/lib/admin-access';
export const Route = createFileRoute('/admin/login')({ head: () => adminHead('Sign in'), validateSearch: (s: Record<string, unknown>) => ({ denied: s['denied'] === true ? true : undefined } as { denied?: boolean }), component: Login });
function Login() {
 const [mode,setMode]=useState<'login'|'signup'|'forgot'>('login');
 const [error,setError]=useState(''); const [notice,setNotice]=useState('');
 const [busy,setBusy]=useState(false); const [signedIn,setSignedIn]=useState(false);
 const navigate=useNavigate(); const router=useRouter(); const query=useQueryClient(); const {denied}=Route.useSearch();
 useEffect(()=>{let active=true; void supabase.auth.getUser().then(async ({data})=>{
   if(!active || !data.user)return;
   setSignedIn(true);
   const result=await supabase.rpc('has_role',{_user_id:data.user.id,_role:'admin'});
   if(active && result.data && !result.error)void navigate({to:'/admin',replace:true});
 });return()=>{active=false;};},[navigate]);
 return <main className="admin-login"><div className="admin-login-panel">
 <Link to="/" className="admin-brand"><img src="/favicon.png" alt="Veteran Solution"/><span>VETERAN<small>ADMINISTRATION</small></span></Link>
 <h1>{mode==='login'?'Welcome back':mode==='signup'?'Owner account setup':'Reset your password'}</h1>
 <p>{mode==='signup'?'The first administrator is reserved for the verified owner email. Other accounts do not receive administrator access.':'Veteran Solution administration'}</p>
 {denied&&<p className="admin-error">This account has not been granted admin access.</p>}
 {error&&<p role="alert" className="admin-error">{error}</p>}{notice&&<p role="status">{notice}</p>}
 <form onSubmit={async e=>{
 e.preventDefault();setBusy(true);setError('');setNotice('');
 const f=new FormData(e.currentTarget);const email=String(f.get('email')).trim();const password=String(f.get('password'));
 try{
 if(mode==='forgot'){
 const r=await supabase.auth.resetPasswordForEmail(email,{redirectTo:`${window.location.origin}/reset-password`});if(r.error)throw r.error;
 setNotice('Check your email for the reset link.');
 }else if(mode==='signup'){
 const r=await supabase.auth.signUp({email,password,options:{emailRedirectTo:`${window.location.origin}/admin/login`}});if(r.error)throw r.error;
 setNotice('Check your email to confirm your account, then sign in. Administrator access is checked after verification.');
 }else{
 await query.cancelQueries();query.clear();
 const r=await supabase.auth.signInWithPassword({email,password});if(r.error)throw r.error;
 setSignedIn(true);
 const user=await supabase.auth.getUser();if(!user.data.user)throw new Error('Please sign in again.');
 const userId=user.data.user.id;
 const allowed=await resolveAdminAccess(
 ()=>supabase.rpc('has_role',{_user_id:userId,_role:'admin'}),
 ()=>supabase.rpc('claim_initial_admin'),
 );
 if(!allowed){setError('Admin access denied. The first administrator must use the verified owner email.');}
 else{await router.invalidate();await navigate({to:'/admin',replace:true});}
 }
 }catch{setError(mode==='login'?'Sign-in failed. Check your email and password.':'Unable to complete this request. Please try again.');}
 finally{setBusy(false);}
 }}>
 <label>Email<input name="email" type="email" autoComplete="email" required/></label>
 {mode!=='forgot'&&<label>Password<input name="password" type="password" minLength={8} autoComplete={mode==='signup'?'new-password':'current-password'} required/></label>}
 <Button type="submit" disabled={busy}>{busy?'Please wait…':mode==='login'?'Sign in':mode==='signup'?'Create owner account':'Send reset link'}</Button>
 </form><div className="admin-actions mt-5">
 <Button variant="ghost" disabled={busy} onClick={()=>{setMode(mode==='login'?'signup':'login');setError('');setNotice('');}}>{mode==='login'?'Owner account setup':'Back to sign in'}</Button>
 {mode==='login'&&<Button variant="ghost" disabled={busy} onClick={()=>{setMode('forgot');setError('');setNotice('');}}>Forgot password?</Button>}
 {signedIn&&<Button variant="ghost" disabled={busy} onClick={async()=>{await query.cancelQueries();query.clear();const result=await supabase.auth.signOut();if(result.error){setError('Unable to sign out.');return;}setSignedIn(false);setNotice('Signed out.');}}>Sign out</Button>}
 </div></div></main>;
}
