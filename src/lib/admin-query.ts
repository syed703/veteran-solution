import { queryOptions } from '@tanstack/react-query';
import { getAdminData } from './admin.functions';
export const adminQuery = queryOptions({ queryKey: ['admin-data'], queryFn: () => getAdminData(), staleTime: 15000 });
export function adminHead(label: string) { const title = `${label} | Veteran Solution Admin`; const description = `Veteran Solution ${label.toLowerCase()} management.`; return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }, { name: 'robots', content: 'noindex,nofollow' }] }; }
