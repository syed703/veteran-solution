CREATE OR REPLACE FUNCTION public.claim_initial_admin() RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
BEGIN
 IF auth.uid() IS NULL THEN RETURN false; END IF;
 PERFORM pg_advisory_xact_lock(hashtext('veteran_initial_admin'));
 IF EXISTS (SELECT 1 FROM public.user_roles WHERE role='admin') THEN RETURN EXISTS (SELECT 1 FROM public.user_roles WHERE role='admin' AND user_id=auth.uid()); END IF;
 IF NOT EXISTS (SELECT 1 FROM auth.users WHERE id=auth.uid() AND lower(email)='brandanwilliams560@gmail.com' AND email_confirmed_at IS NOT NULL) THEN RETURN false; END IF;
 INSERT INTO public.user_roles(user_id,role) VALUES(auth.uid(),'admin') ON CONFLICT DO NOTHING;
 RETURN true;
END; $$;
REVOKE ALL ON FUNCTION public.claim_initial_admin() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.claim_initial_admin() TO authenticated;