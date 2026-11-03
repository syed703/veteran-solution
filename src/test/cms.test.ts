import { describe, it, expect } from 'vitest';
import { cmsPages, cmsFieldValue, safeContentUrl, cmsBackgroundCss } from '../lib/cms';
import { sharedServices } from '../lib/cms-shared';
describe('Published website content', () => {
  it('supports existing background photos without changing captured gradients', () => {
    for (const key of ['page:about', 'page:contact', 'page:legal', 'page:services']) {
      expect(cmsPages.find(p => p.key === key)?.fields.find(f => f.key === 'intro-background')?.type).toBe('image');
    }
    expect(cmsBackgroundCss('background:linear-gradient(red,black),url("/site-assets/photo.webp")', '/site-assets/photo.webp', 'https://example.com/new.webp')).toBe('background:linear-gradient(red,black),url("https://example.com/new.webp")');
    expect(cmsBackgroundCss('url("/site-assets/photo.webp")', '/site-assets/photo.webp', 'javascript:alert(1)')).toBe('url("/site-assets/photo.webp")');
  });
  it('preserves the nine original service identities in shared selectors and their CMS fields', () => {
    const originalSlugs = ['junk-removal', 'painting', 'pool-cleaning', 'power-washing', 'renovating', 'property-cleaning', 'tile-replacement-installation', 'floor-renovation', 'demolition'];
    expect(sharedServices.slice(0, 9).map(([slug]) => slug)).toEqual(originalSlugs);
    const selectorFields = cmsPages.find(page => page.key === 'page:shared')?.fields.filter(field => field.group === 'Service selector').map(field => field.key);
    expect(selectorFields).toEqual(sharedServices.map(([slug]) => `service-${slug}`));
  });
  it('keeps drafts off public pages and renders only published field values', () => {
    expect(cmsFieldValue({}, 'page:home', 'f0195', 'See the space.')).toBe('See the space.');
    expect(cmsFieldValue({ 'page:home': { f0195: 'Published heading' } }, 'page:home', 'f0195', 'See the space.')).toBe('Published heading');
  });
  it('supports all 16 captured public pages and every before/after image', () => {
    expect(cmsPages.filter(p => p.key !== 'page:shared')).toHaveLength(16);
    expect(cmsPages.find(p => p.key === 'page:home')?.fields.filter(f => f.group === 'Comparison Section' && f.type === 'image')).toHaveLength(6);
  });
  it('rejects executable URLs without restricting original links or private images', () => {
    expect(safeContentUrl('javascript:alert(1)')).toBe(false);
    expect(safeContentUrl('//evil.example')).toBe(false);
    expect(safeContentUrl('/\\evil.example')).toBe(false);
    expect(safeContentUrl('media:images/test.webp', true)).toBe(true);
    expect(cmsFieldValue({ 'page:home': { f0014: 'javascript:alert(1)' } }, 'page:home', 'f0014', '/about')).toBe('/about');
  });
});