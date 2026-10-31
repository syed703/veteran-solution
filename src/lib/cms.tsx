import { createContext, useContext, type ReactNode } from 'react';
import catalogue from './cms-catalogue.json';
import type { PublicSite } from './public-site.functions';

export type CmsField = { key: string; label: string; group: string; type: string; value: string };
export type CmsPage = { key: string; label: string; path: string; fields: CmsField[] };
export const cmsPages: CmsPage[] = catalogue;
const CmsContext = createContext<PublicSite['content']>({});
export function CmsProvider({ content, children }: { content: PublicSite['content']; children: ReactNode }) {
  return <CmsContext.Provider value={content}>{children}</CmsContext.Provider>;
}
export function cmsFieldValue(content: PublicSite['content'], page: string, field: string, fallback: string) {
  return content[page]?.[field] ?? fallback;
}
export function useCmsValues(page: string) {
  const content = useContext(CmsContext);
  return (field: string, fallback: string) => cmsFieldValue(content, page, field, fallback);
}
export function safeContentUrl(value: string, image = false) {
  if (image) return /^(\/site-assets\/|media:images\/|https:\/\/)/.test(value);
  return /^(\/(?!\/)|#|https:\/\/|mailto:|tel:)/.test(value);
}