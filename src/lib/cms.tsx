import { createContext, useContext, type ReactNode } from 'react';
import catalogue from './cms-catalogue.json';
import { sharedFaqs, sharedServices } from './cms-shared';
import type { PublicSite } from './public-site.functions';

export type CmsField = { key: string; label: string; group: string; type: string; value: string };
export type CmsPage = { key: string; label: string; path: string; fields: CmsField[] };
export const cmsPages: CmsPage[] = catalogue.map(page => ({ ...page, fields: [
  ...page.fields.map(field => {
    const comparisonLabels: Record<string, string> = { f0199: 'Living room — After image', f0201: 'Living room — Before image', f0210: 'Exterior — After image', f0212: 'Exterior — Before image', f0221: 'Pool — After image', f0223: 'Pool — Before image' };
    return page.key === 'page:home' && comparisonLabels[field.key] ? { ...field, label: comparisonLabels[field.key] ?? field.label } : field;
  }),
  ...(page.key === 'page:shared' ? [
    ...sharedServices.map(([key, value]) => ({ key: `service-${key}`, label: value, value, group: 'Service selector', type: 'text' })),
    ...sharedFaqs.flatMap(([question, answer], index) => [
      { key: `faq-${index}-question`, label: `Question ${index + 1}`, value: question ?? '', group: 'FAQs', type: 'text' },
      { key: `faq-${index}-answer`, label: `Answer ${index + 1}`, value: answer ?? '', group: 'FAQs', type: 'text' },
    ]),
  ] : []),
  ...(page.key === 'page:home' ? [{ key: 'hero-video', label: 'Background video URL', group: 'Home Hero', type: 'link', value: '/site-assets/cb078f882496fc7b.mp4' }] : []),
] }));
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