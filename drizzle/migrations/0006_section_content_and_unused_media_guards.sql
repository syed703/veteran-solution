CREATE OR REPLACE FUNCTION public.admin_save_content(p_key text, p_label text, p_fields jsonb, p_publish boolean) RETURNS void LANGUAGE plpgsql SECURITY INVOKER SET search_path=public AS $$
BEGIN
 IF NOT public.has_role(auth.uid(), 'admin') THEN RAISE EXCEPTION 'Admin access required'; END IF;
 INSERT INTO public.website_content(section_key,label,draft,published,published_at)
 VALUES(p_key,p_label,p_fields,CASE WHEN p_publish THEN p_fields ELSE '{}'::jsonb END,CASE WHEN p_publish THEN now() ELSE NULL END)
 ON CONFLICT(section_key) DO UPDATE SET label=EXCLUDED.label,draft=website_content.draft || p_fields,published=CASE WHEN p_publish THEN website_content.published || p_fields ELSE website_content.published END,published_at=CASE WHEN p_publish THEN now() ELSE website_content.published_at END,updated_at=now();
END; $$;
REVOKE ALL ON FUNCTION public.admin_save_content(text,text,jsonb,boolean) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.admin_save_content(text,text,jsonb,boolean) TO authenticated;
CREATE OR REPLACE FUNCTION public.admin_media_unused(p_path text) RETURNS boolean LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path=public AS $$
BEGIN
 IF NOT public.has_role(auth.uid(),'admin') THEN RETURN false; END IF;
 RETURN NOT EXISTS(SELECT 1 FROM public.services WHERE image_url='media:' || p_path) AND NOT EXISTS(SELECT 1 FROM public.website_content c CROSS JOIN LATERAL jsonb_each(c.draft || c.published) f WHERE f.value=to_jsonb('media:' || p_path)) AND NOT EXISTS(SELECT 1 FROM public.website_content c CROSS JOIN LATERAL jsonb_each(c.draft) f WHERE f.value=to_jsonb('media:' || p_path));
END; $$;
REVOKE ALL ON FUNCTION public.admin_media_unused(text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.admin_media_unused(text) TO authenticated;
ALTER POLICY admin_media_delete ON storage.objects USING(bucket_id='website-media' AND public.has_role(auth.uid(),'admin') AND public.admin_media_unused(name));
ALTER POLICY admin_media_update ON storage.objects USING(bucket_id='website-media' AND public.has_role(auth.uid(),'admin') AND public.admin_media_unused(name)) WITH CHECK(bucket_id='website-media' AND public.has_role(auth.uid(),'admin') AND public.admin_media_unused(name));