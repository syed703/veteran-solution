CREATE TABLE public.admin_ownership (
 singleton boolean PRIMARY KEY DEFAULT true CHECK (singleton),
 owner_user_id uuid,
 developer_user_id uuid,
 developer_revoked boolean NOT NULL DEFAULT false,
 transferred_at timestamptz
);
GRANT SELECT ON public.admin_ownership TO authenticated;
GRANT ALL ON public.admin_ownership TO service_role;
ALTER TABLE public.admin_ownership ENABLE ROW LEVEL SECURITY;
CREATE POLICY ownership_admin_read ON public.admin_ownership FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.claim_initial_admin() RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE caller_email text; verified boolean; ownership public.admin_ownership%ROWTYPE;
BEGIN
 IF auth.uid() IS NULL THEN RETURN false; END IF;
 PERFORM pg_advisory_xact_lock(hashtext('veteran_initial_admin'));
 SELECT lower(email), email_confirmed_at IS NOT NULL INTO caller_email, verified FROM auth.users WHERE id=auth.uid();
 IF verified IS DISTINCT FROM true THEN RETURN false; END IF;
 IF caller_email NOT IN ('brandanwilliams560@gmail.com', 'developerdev180@gmail.com') OR caller_email IS NULL THEN RETURN false; END IF;
 INSERT INTO public.admin_ownership(singleton) VALUES(true) ON CONFLICT DO NOTHING;
 SELECT * INTO ownership FROM public.admin_ownership WHERE singleton FOR UPDATE;
 IF caller_email='brandanwilliams560@gmail.com' THEN
   IF ownership.owner_user_id IS NOT NULL AND ownership.owner_user_id <> auth.uid() THEN RETURN false; END IF;
   INSERT INTO public.user_roles(user_id,role) VALUES(auth.uid(),'admin') ON CONFLICT DO NOTHING;
   DELETE FROM public.user_roles WHERE role='admin' AND (user_id=ownership.developer_user_id OR user_id IN (SELECT id FROM auth.users WHERE lower(email)='developerdev180@gmail.com')) AND user_id<>auth.uid();
   UPDATE public.admin_ownership SET owner_user_id=auth.uid(), developer_revoked=true, transferred_at=COALESCE(transferred_at,now()) WHERE singleton;
   RETURN true;
 END IF;
 IF ownership.owner_user_id IS NOT NULL OR ownership.developer_revoked THEN RETURN false; END IF;
 IF EXISTS (SELECT 1 FROM public.user_roles r JOIN auth.users u ON u.id=r.user_id WHERE r.role='admin' AND lower(u.email)='brandanwilliams560@gmail.com') THEN RETURN false; END IF;
 IF ownership.developer_user_id IS NOT NULL AND ownership.developer_user_id<>auth.uid() THEN RETURN false; END IF;
 INSERT INTO public.user_roles(user_id,role) VALUES(auth.uid(),'admin') ON CONFLICT DO NOTHING;
 UPDATE public.admin_ownership SET developer_user_id=auth.uid() WHERE singleton;
 RETURN true;
END; $$;
REVOKE ALL ON FUNCTION public.claim_initial_admin() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.claim_initial_admin() TO authenticated;

CREATE OR REPLACE FUNCTION public.revoke_temporary_admin() RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE ownership public.admin_ownership%ROWTYPE;
BEGIN
 IF auth.uid() IS NULL THEN RETURN false; END IF;
 PERFORM pg_advisory_xact_lock(hashtext('veteran_initial_admin'));
 SELECT * INTO ownership FROM public.admin_ownership WHERE singleton FOR UPDATE;
 IF ownership.owner_user_id IS DISTINCT FROM auth.uid() OR NOT public.has_role(auth.uid(),'admin') THEN RETURN false; END IF;
 IF NOT EXISTS (SELECT 1 FROM auth.users WHERE id=auth.uid() AND lower(email)='brandanwilliams560@gmail.com' AND email_confirmed_at IS NOT NULL) THEN RETURN false; END IF;
 DELETE FROM public.user_roles WHERE role='admin' AND user_id=ownership.developer_user_id AND user_id<>auth.uid();
 UPDATE public.admin_ownership SET developer_revoked=true WHERE singleton;
 RETURN true;
END; $$;
REVOKE ALL ON FUNCTION public.revoke_temporary_admin() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.revoke_temporary_admin() TO authenticated;

CREATE OR REPLACE FUNCTION public.admin_setup_open() RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$ SELECT NOT EXISTS (SELECT 1 FROM public.admin_ownership WHERE owner_user_id IS NOT NULL OR developer_revoked) $$;
REVOKE ALL ON FUNCTION public.admin_setup_open() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_setup_open() TO anon, authenticated;