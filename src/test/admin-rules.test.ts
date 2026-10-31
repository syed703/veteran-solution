import { describe, expect, it, vi } from 'vitest';
import { enquiryStatuses, isAdminRole, serviceSchema } from '@/lib/admin-rules';
import { resolveAdminAccess } from '@/lib/admin-access';

describe('Admin permissions', () => {
  it('requires the database admin role', () => {
    expect(isAdminRole(['user'])).toBe(false);
    expect(isAdminRole(['admin'])).toBe(true);
  });
  it('denies first-admin access when the database rejects the owner claim', async () => {
    expect(await resolveAdminAccess(async()=>({data:false,error:null}), async()=>({data:false,error:null}))).toBe(false);
  });
  it('accepts a verified owner only after the database approves the claim', async () => {
    expect(await resolveAdminAccess(async()=>({data:false,error:null}), async()=>({data:true,error:null}))).toBe(true);
  });
  it('runs ownership handover even for an existing admin', async () => {
    const claim=vi.fn(async()=>({data:false,error:null}));
    expect(await resolveAdminAccess(async()=>({data:true,error:null}),claim)).toBe(true);
    expect(claim).toHaveBeenCalledOnce();
  });
  it('fails closed when permission verification fails', async () => {
    const claim=vi.fn(async()=>({data:false,error:null}));
    await expect(resolveAdminAccess(async()=>({data:null,error:new Error('Offline')}),claim)).rejects.toThrow();
    expect(claim).toHaveBeenCalledOnce();
  });
});
describe('Management rules', () => {
  it('allows exactly the five requested enquiry statuses', () => {
    expect([...enquiryStatuses]).toEqual(['New','In Progress','Contacted','Completed','Cancelled']);
  });
  it('persists disabled services and their display order', () => {
    const service={slug:'painting',title:'Painting',summary:'',description:'',image_url:'',image_alt:'',enabled:false,display_order:7};
    expect(serviceSchema.parse(service)).toMatchObject({enabled:false,display_order:7});
    expect(serviceSchema.safeParse({...service,display_order:-1}).success).toBe(false);
  });
});