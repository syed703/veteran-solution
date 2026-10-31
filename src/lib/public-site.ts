import { queryOptions } from "@tanstack/react-query";
import { getPublicSite, type PublicService, type PublicSite } from "./public-site.functions";

export const publicSiteQuery = queryOptions({ queryKey: ["public-site"], queryFn: () => getPublicSite(), staleTime: 30_000 });

// Original captured catalogue, used only when the live catalogue cannot be loaded.
export const originalServices: PublicService[] = [
  { slug: "junk-removal", title: "Junk Removal", display_order: 1, image_url: "/site-assets/58a94b431b74715b.webp", image_alt: "Veteran Solutions team member preparing to clear a cluttered space", summary: "Make room for what comes next. Furniture, unwanted items and property cleanouts, handled with care.", description: "From a few bulky items to a full property cleanout, we help remove the things taking up your space. Tell us what needs to go, where it is and how we can access it. We’ll discuss the scope and an estimate before the work starts." },
  { slug: "painting", title: "Painting", display_order: 2, image_url: "/site-assets/0695a946ebede19a.webp", image_alt: "Veteran Solutions painter working on a home exterior", summary: "Bring a fresh perspective to your property with thoughtfully prepared interior and exterior painting.", description: "A good paint job starts before the first coat. We discuss the surfaces, finish and colors you have in mind, then plan preparation and application around the space. From an individual room to an exterior refresh, the goal is a clean, considered result." },
];

export const serviceMeta: Record<string, { tint: string; category: string; group: "clear-clean" | "refresh-renew" | "clear-prepare" }> = {
  "junk-removal": { tint: "#f3f0ed", category: "Clear & clean", group: "clear-clean" },
  painting: { tint: "#f4eeea", category: "Refresh & renew", group: "refresh-renew" },
  "pool-cleaning": { tint: "#f5f1eb", category: "Clear & clean", group: "clear-clean" },
  "power-washing": { tint: "#f3f1ef", category: "Clear & clean", group: "clear-clean" },
  renovating: { tint: "#f4f0ea", category: "Refresh & renew", group: "refresh-renew" },
  "property-cleaning": { tint: "#f4f0ec", category: "Clear & clean", group: "clear-clean" },
  "tile-replacement-installation": { tint: "#f1f0ec", category: "Refresh & renew", group: "refresh-renew" },
  "floor-renovation": { tint: "#f4eee7", category: "Refresh & renew", group: "refresh-renew" },
  demolition: { tint: "#f1eee8", category: "Clear & prepare", group: "clear-prepare" },
};

export function siteText(site: PublicSite | undefined, section: string, field: string) {
  return site?.content[section]?.[field];
}
