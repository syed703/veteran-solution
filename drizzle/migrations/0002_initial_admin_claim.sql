CREATE OR REPLACE FUNCTION public.claim_initial_admin() RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
BEGIN
  IF auth.uid() IS NULL THEN RETURN false; END IF;
  PERFORM pg_advisory_xact_lock(hashtext('veteran_initial_admin'));
  IF EXISTS (SELECT 1 FROM public.user_roles WHERE role='admin') THEN
    RETURN EXISTS (SELECT 1 FROM public.user_roles WHERE role='admin' AND user_id=auth.uid());
  END IF;
  INSERT INTO public.user_roles(user_id, role) VALUES (auth.uid(), 'admin');
  RETURN true;
END; $$;
REVOKE ALL ON FUNCTION public.claim_initial_admin() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.claim_initial_admin() TO authenticated;
CREATE OR REPLACE FUNCTION public.admin_setup_open() RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$ SELECT NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role='admin') $$;
REVOKE ALL ON FUNCTION public.admin_setup_open() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_setup_open() TO anon, authenticated;