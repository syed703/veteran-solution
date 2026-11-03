export const imageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'];
export const imageLimit = 10 * 1024 * 1024;
export function validImage(type: string, size: number) {
  return imageTypes.includes(type) && size > 0 && size <= imageLimit;
}
export function mergeSection(existing: Record<string, string>, changes: Record<string, string>) {
  return { ...existing, ...changes };
}