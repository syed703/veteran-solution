import { z } from 'zod';
import catalogue from './cms-catalogue.json';

export const comparisonManifest = 'comparison-projects';
const image = z.string().max(6000).refine(v => v === '' || (!/[\u0000-\u0020\\]/.test(v) && /^(\/site-assets\/|media:images\/|https:\/\/)/.test(v)), 'Choose a valid image.');
export const comparisonSchema = z.object({
  id: z.string().regex(/^[a-zA-Z0-9-]{1,80}$/),
  title: z.string().trim().max(180), category: z.string().trim().max(180),
  description: z.string().max(6000), beforeImage: image, afterImage: image,
  beforeAlt: z.string().max(6000), afterAlt: z.string().max(6000),
  beforeLabel: z.string().max(180), afterLabel: z.string().max(180),
  instruction: z.string().max(180), ariaLabel: z.string().max(300),
  order: z.number().int().min(0), enabled: z.boolean(),
});
export type ComparisonProject = z.infer<typeof comparisonSchema>;
const properties = Object.keys(comparisonSchema.shape) as (keyof ComparisonProject)[];
const keyFor = (id: string, property: string) => `comparison-${id}-${property}`;
export function legacyComparisons(values: Record<string, string> = {}): ComparisonProject[] {
  const original = Object.fromEntries((catalogue.find(p => p.key === 'page:home')?.fields ?? []).map(f => [f.key, f.value]));
  const field = (n: number) => values[`f${String(n).padStart(4, '0')}`] ?? original[`f${String(n).padStart(4, '0')}`] ?? '';
  return [199, 210, 221].map((n, index) => ({ id: ['original-room', 'original-exterior', 'original-pool'][index] ?? `original-${index}`, title: field(n + 9), category: field(n + 7).replace(/^\d+\s*\/\s*/, ''), description: field(n + 10), afterImage: field(n), afterAlt: field(n + 1), beforeImage: field(n + 2), beforeAlt: field(n + 3), beforeLabel: field(n + 4), afterLabel: field(n + 5), ariaLabel: field(n + 6), instruction: field(n + 8), order: index + 1, enabled: true }));
}
export function readComparisons(values: Record<string, string> = {}): ComparisonProject[] {
  if (values[comparisonManifest] === undefined) return legacyComparisons(values);
  try {
    const ids = z.array(z.string().regex(/^[a-zA-Z0-9-]{1,80}$/)).parse(JSON.parse(values[comparisonManifest] ?? '[]'));
    return ids.flatMap(id => {
      const entry = Object.fromEntries(properties.map(property => [property, property === 'id' ? id : property === 'enabled' ? values[keyFor(id, property)] === 'true' : property === 'order' ? Number(values[keyFor(id, property)] ?? 0) : values[keyFor(id, property)] ?? '']));
      const result = comparisonSchema.safeParse(entry);
      return result.success ? [result.data] : [];
    }).sort((a, b) => a.order - b.order);
  } catch { return legacyComparisons(values); }
}
export function comparisonFields(projects: ComparisonProject[], previous: Record<string, string> = {}): Record<string, string> {
  const cleared = Object.fromEntries(Object.keys(previous).filter(key => key.startsWith('comparison-')).map(key => [key, '']));
  return { ...cleared, [comparisonManifest]: JSON.stringify(projects.map(p => p.id)), ...Object.fromEntries(projects.flatMap(p => properties.filter(k => k !== 'id').map(k => [keyFor(p.id, k), String(p[k])]))) };
}
export function publishedComparisons(projects: ComparisonProject[]) {
  return projects.filter(p => p.enabled && p.title && p.beforeImage && p.afterImage).sort((a, b) => a.order - b.order);
}
export function publishComparison(current: ComparisonProject[], draft: ComparisonProject[], id: string) {
  const project = draft.find(p => p.id === id);
  if (!project || !project.title || !project.beforeImage || !project.afterImage) throw new Error('Enter a project title and select both images before publishing.');
  return [...current.filter(p => p.id !== id), project].sort((a, b) => a.order - b.order);
}