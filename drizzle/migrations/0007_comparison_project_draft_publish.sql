CREATE OR REPLACE FUNCTION public.admin_save_comparisons(p_draft jsonb, p_published jsonb DEFAULT NULL) RETURNS void LANGUAGE plpgsql SECURITY INVOKER SET search_path=public AS $$
BEGIN
IF NOT public.has_role(auth.uid(),'admin') THEN RAISE EXCEPTION 'Admin access required'; END IF;
IF jsonb_typeof(p_draft) <> 'object' OR (p_published IS NOT NULL AND jsonb_typeof(p_published) <> 'object') THEN RAISE EXCEPTION 'Invalid project content'; END IF;
IF EXISTS (SELECT 1 FROM jsonb_each(p_draft || COALESCE(p_published,'{}'::jsonb)) f WHERE f.key NOT LIKE 'comparison-%' OR jsonb_typeof(f.value) <> 'string') THEN RAISE EXCEPTION 'Invalid project field'; END IF;
INSERT INTO public.website_content(section_key,label,draft,published,published_at) VALUES ('page:home','Home',p_draft,COALESCE(p_published,'{}'::jsonb),CASE WHEN p_published IS NOT NULL THEN now() ELSE NULL END)
ON CONFLICT(section_key) DO UPDATE SET draft=website_content.draft || p_draft,published=website_content.published || COALESCE(p_published,'{}'::jsonb),published_at=CASE WHEN p_published IS NOT NULL THEN now() ELSE website_content.published_at END,updated_at=now();
END; $$;
REVOKE ALL ON FUNCTION public.admin_save_comparisons(jsonb,jsonb) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.admin_save_comparisons(jsonb,jsonb) TO authenticated;