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
  const value = content[page]?.[field];
  if (value === undefined) return fallback;
  const type = cmsPages.find(p => p.key === page)?.fields.find(f => f.key === field)?.type;
  if ((type === 'link' || type === 'image') && !safeContentUrl(value, type === 'image')) return fallback;
  return value;
}
export function useCmsValues(page: string) {
  const content = useContext(CmsContext);
  return (field: string, fallback: string) => cmsFieldValue(content, page, field, fallback);
}
export function safeContentUrl(value: string, image = false) {
  if (/[\u0000-\u0020\\]/.test(value)) return false;
  if (image) return /^(\/site-assets\/|media:images\/|https:\/\/)/.test(value);
  return /^(\/(?!\/)|#|https:\/\/|mailto:|tel:)/.test(value);
}