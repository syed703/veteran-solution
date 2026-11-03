import { describe, expect, it } from 'vitest';
import { legacyComparisons, readComparisons, comparisonFields, publishedComparisons, publishComparison, comparisonSchema } from '../lib/comparison-projects';
describe('Before & After projects', () => {
  it('preserves all three original comparisons and their six images', () => {
    const projects = legacyComparisons();
    expect(projects.map(p => p.title)).toEqual(['A room, reimagined', 'A welcome return', 'Ready to enjoy again']);
    expect(projects.flatMap(p => [p.beforeImage, p.afterImage])).toHaveLength(6);
    expect(readComparisons(comparisonFields(projects))).toEqual(projects);
  });
  it('supports more than the original number of projects', () => {
    const base = legacyComparisons()[0];
    if (!base) throw new Error('Missing original');
    const projects = Array.from({ length: 25 }, (_, i) => ({ ...base, id: `project-${i}`, order: i }));
    expect(readComparisons(comparisonFields(projects))).toHaveLength(25);
  });
  it('publishes one project without leaking other project drafts', () => {
    const original = legacyComparisons();
    const drafts = original.map(p => ({ ...p, title: `${p.title} edited` }));
    const published = publishComparison(original, drafts, 'original-room');
    expect(published[0]?.title).toBe('A room, reimagined edited');
    expect(published[1]?.title).toBe('A welcome return');
  });
  it('hides disabled projects and respects display order', () => {
    const projects = legacyComparisons().map((p, i) => ({ ...p, enabled: i !== 1, order: 3 - i }));
    expect(publishedComparisons(projects).map(p => p.id)).toEqual(['original-pool', 'original-room']);
  });
  it('deletion clears both image references and preserves an empty collection', () => {
    const before = comparisonFields(legacyComparisons());
    const after = comparisonFields([], before);
    expect(after['comparison-original-room-beforeImage']).toBe('');
    expect(after['comparison-original-room-afterImage']).toBe('');
    expect(readComparisons(after)).toEqual([]);
  });
  it('requires both images and title before publication', () => {
    const projects = legacyComparisons().map(p => ({ ...p, beforeImage: '' }));
    expect(() => publishComparison([], projects, 'original-room')).toThrow('select both images');
  });
  it('rejects unsafe image URLs', () => {
    expect(comparisonSchema.safeParse({ ...legacyComparisons()[0], afterImage: 'javascript:alert(1)' }).success).toBe(false);
  });
});