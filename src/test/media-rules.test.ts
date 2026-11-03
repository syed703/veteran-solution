import { describe, it, expect } from 'vitest';
import { validImage, mergeSection } from '../lib/media-rules';
describe('Media and section rules', () => {
  it('accepts supported images up to the existing 10 MB storage limit', () => {
    expect(validImage('image/png', 10 * 1024 * 1024)).toBe(true);
    expect(validImage('image/png', 10 * 1024 * 1024 + 1)).toBe(false);
    expect(validImage('image/svg+xml', 500)).toBe(false);
    expect(validImage('image/avif', 500)).toBe(true);
  });
  it('publishing one section leaves other draft and published sections unchanged', () => {
    const published = { hero: 'Live hero', footer: 'Live footer' };
    const draft = { hero: 'Draft hero', footer: 'Draft footer' };
    expect(mergeSection(published, { hero: draft.hero })).toEqual({ hero: 'Draft hero', footer: 'Live footer' });
    expect(mergeSection(draft, { hero: 'New hero' })).toEqual({ hero: 'New hero', footer: 'Draft footer' });
  });
});