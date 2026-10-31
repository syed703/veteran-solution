import { z } from 'zod';
export const enquiryStatuses = ['New', 'In Progress', 'Contacted', 'Completed', 'Cancelled'] as const;
export const enquirySchema = z.object({ name: z.string().trim().min(1).max(120), email: z.string().trim().email().max(180), phone: z.string().trim().min(5).max(30), zip: z.string().regex(/^\d{5}(-\d{4})?$/), service: z.string().min(1).max(120), message: z.string().trim().min(10).max(3000), source: z.string().max(250) });
export const serviceSchema = z.object({ id: z.string().uuid().optional(), slug: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/), title: z.string().trim().min(1).max(120), summary: z.string().max(1500), description: z.string().max(6000), image_url: z.string().max(2000), image_alt: z.string().max(200), enabled: z.boolean(), display_order: z.number().int().min(0).max(10000) });
export function isAdminRole(roles: string[]) { return roles.includes('admin'); }
export const contentFields = [
  { key: 'hero', label: 'Homepage introduction', fields: { heading: 'Your needs.', emphasis: 'Our mission.', description: 'One trusted team for the spaces you live in, work in, and care about.' } },
  { key: 'about', label: 'Homepage company section', fields: { heading: 'A company built', emphasis: 'on service.', description: 'We’re a veteran-owned business here to help you care for your property and move your next project forward. From the work that clears a space to the details that renew it, we bring our services together under one name.', image: '/site-assets/8448ccd12888d989.webp' } },
  { key: 'quote', label: 'Homepage quote section', fields: { heading: 'Let’s take care', emphasis: 'of your next project.', description: 'Something to clear, clean or completely reimagine? Tell us what you have in mind.' } },
];
