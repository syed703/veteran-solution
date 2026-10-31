import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type PublicService = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image_url: string;
  image_alt: string;
  display_order: number;
};

export type PublicSite = {
  services: PublicService[] | null;
  content: Record<string, Record<string, string>>;
};

// Public, read-only: returns only enabled services and published homepage content.
export const getPublicSite = createServerFn({ method: "GET" }).handler(async (): Promise<PublicSite> => {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) return { services: null, content: {} };
  const db = createClient<Database>(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
  });
  try {
    const [services, content] = await Promise.all([
      db.from("services").select("slug,title,summary,description,image_url,image_alt,display_order").eq("enabled", true).order("display_order"),
      db.rpc("public_website_content"),
    ]);
    const sections: PublicSite["content"] = {};
    for (const row of content.data ?? []) {
      const values: Record<string, string> = {};
      if (row.published && typeof row.published === "object" && !Array.isArray(row.published)) {
        for (const [k, v] of Object.entries(row.published)) if (typeof v === "string") values[k] = v;
      }
      if (Object.keys(values).length) sections[row.section_key] = values;
    }
    const rows = services.error ? null : (services.data ?? []);
    // Uploaded images live in private storage; published ones get time-limited links.
    const mediaPaths = new Set<string>();
    for (const s of rows ?? []) if (s.image_url.startsWith("media:")) mediaPaths.add(s.image_url.slice(6));
    for (const section of Object.values(sections)) for (const v of Object.values(section)) if (v.startsWith("media:")) mediaPaths.add(v.slice(6));
    const signed = new Map<string, string>();
    if (mediaPaths.size) {
      const result = await db.storage.from("website-media").createSignedUrls([...mediaPaths], 60 * 60 * 24);
      for (const item of result.data ?? []) if (item.path && item.signedUrl) signed.set(item.path, item.signedUrl);
    }
    const resolve = (v: string) => (v.startsWith("media:") ? (signed.get(v.slice(6)) ?? "") : v);
    for (const section of Object.values(sections)) for (const k of Object.keys(section)) section[k] = resolve(section[k] ?? "");
    return {
      services: rows ? rows.map((s) => ({ ...s, image_url: resolve(s.image_url) })) : null,
      content: content.error ? {} : sections,
    };
  } catch (error) {
    console.error("Public site content unavailable", error);
    return { services: null, content: {} };
  }
});
