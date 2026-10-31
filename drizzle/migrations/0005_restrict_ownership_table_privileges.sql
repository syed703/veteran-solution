REVOKE ALL ON TABLE public.admin_ownership FROM anon;
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON TABLE public.admin_ownership FROM authenticated;
GRANT SELECT ON TABLE public.admin_ownership TO authenticated;
GRANT ALL ON TABLE public.admin_ownership TO service_role;