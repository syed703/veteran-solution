# Veteran Solution: external backend and Vercel

## Current status

This repository remains connected to its existing Lovable Cloud backend in the editor. No external schema, account, storage bucket, Vercel variables or Vercel deployment has been created by this change. Cloud cannot be disconnected from this project. A deployment of the same repository on Vercel can use a separately configured backend without replacing the managed editor connection.

The supplied external project's public Auth settings were reachable on 2026-11-03: email signup is enabled, email confirmation is required, and anonymous signup is disabled. Its services query returned `PGRST205` (missing `public.services`). The REST API root requires privileged access and is not a suitable publishable-key health check.

Applying migrations requires external database administration access. Configuring and deploying Vercel requires access to the intended Vercel project. Neither is available to this agent. Do not paste a database password or service-role key into chat.

## Exact Vercel environment variables

Configure these in the intended Vercel project's **Settings → Environment Variables**, for Production and, if appropriate, Preview:

| Variable | Value | Visibility |
| --- | --- | --- |
| `VITE_SUPABASE_URL` | Your project origin, `https://<project-ref>.supabase.co` | Public, compiled into browser assets |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Your project's `sb_publishable_…` key | Public, compiled into browser assets |
| `SUPABASE_URL` | The same project origin | Server |
| `SUPABASE_PUBLISHABLE_KEY` | The same publishable key | Server |

Use the origin, **not** the `/rest/v1/` endpoint. Both variable pairs must point to the same project. The browser requires the `VITE_` pair at build time; updating them requires a new deployment, not just a restart. Never reuse the repository's managed `.env` in an external deployment: it belongs to the current Cloud connection.

`SUPABASE_SERVICE_ROLE_KEY` is referenced by the generated privileged client but is not used by the current application workflows. Do not add it for routine admin operations: authenticated server functions validate the user and use RLS. If future privileged server work needs it, configure it server-only; never use any `VITE_` secret/service-role variable.

The current application does not need `SUPABASE_ANON_KEY` or `VITE_SUPABASE_PROJECT_ID`. Do not copy Cloud-managed keys or internal URLs into Vercel.

## Database setup on the empty external project

The complete schema is already in `drizzle/migrations/`; do not invent a second schema. Apply these files byte-for-byte and in this order:

1. `0000_veteran_admin_management.sql`
2. `0001_admin_media_access.sql`
3. `0002_initial_admin_claim.sql`
4. `0003_restrict_initial_admin_to_verified_owner.sql`
5. `0004_temporary_developer_admin_and_owner_handover.sql`
6. `0005_restrict_ownership_table_privileges.sql`

For manual setup, combine the six files into **one transaction** (`BEGIN;`, the six complete files, `COMMIT;`) and run it in the external project's SQL editor before exposing the application or creating accounts. Do not commit/expose migration 0002 by itself: its historical initial-claim function is intentionally superseded by the restricted function in 0004. Do not rerun this bootstrap on a populated database.

Included objects: `user_roles`, `profiles`, `admin_ownership`, `enquiries`, `enquiry_notes`, `services`, `website_content`, and `admin_activity`; foreign keys, indexes, explicit grants, RLS, profile/activity triggers, enquiry submission/statistics functions, published-only content/media functions, and secure administrator claim/handover/revocation functions.

CMS drafts and published values for all 16 pages, shared controls and Before & After images use the **existing** `website_content` table. No additional content/image tables are required.

## Preserve actual site data

Schema setup alone does not populate the nine services or saved CMS edits. Export actual records from the current backend and import them into the target: `services` and `website_content` at minimum. Preserve service slugs, IDs, ordering, enabled state, text, image references, `draft`, `published`, and timestamps. Keep repository `public/site-assets` files; they are not storage uploads.

If enquiries/notes/activity must carry over, migrate them too, in foreign-key order. Avoid inserting example enquiries or presenting fallback text as migrated data. Restore saved CMS content instead of seeding new text over it. Perform a final export/copy after pausing writes to avoid losing changes between the first copy and cutover.

## Storage setup

Create **one private bucket**, `website-media`, through the external Storage dashboard/API, with a 10 MB single-file limit and JPEG, PNG and WebP allowed MIME types. The existing migrations add object policies, not the bucket itself. Do not modify reserved storage schema tables to provision a bucket.

Copy existing objects with their exact `images/<uuid>.<extension>` paths. Database values such as `media:images/...` must remain unchanged. Do not migrate temporary signed URLs: public images are signed at read time. Draft-only objects remain admin-readable; only objects referenced by enabled services or published content can be read publicly. Verify all six Before & After image references and their objects.

## Authentication and ownership

Keep email confirmation enabled and anonymous signup disabled. Configure the deployed Vercel origin as the Auth site URL and allow the exact `/admin/login` email callback URL. Retain password-strength/leaked-password protections and configure working email delivery; actual email delivery has not been verified on this external project.

Create accounts only after bootstrap. Verified `developerdev180@gmail.com` may claim temporary admin access through the existing login flow. Verified `brandanwilliams560@gmail.com` is the permanent owner; their claim atomically removes the developer role and permanently prevents developer reclaim. Other signup emails receive no administrator role. Do not manually assign roles from browser storage or user metadata.

New users receive a profile via the existing Auth trigger. Users created before installing the trigger need a default profile backfill. Do not blindly copy old role/ownership UUIDs to newly created accounts. Either use a supported Auth migration preserving identities or recreate verified accounts, remap profile/note author IDs as appropriate, and let the secure claim flow establish ownership. Passwords cannot be exported through the application's Data API; recreated accounts must verify their email and set new passwords.

## Deploy the existing repository to Vercel

Use the existing repository and intended branch; do not create or overwrite another repository. In the existing Vercel project, use **Other** framework, install command `bun install --frozen-lockfile`, and build command `bun run build`. Do not configure a static `dist` output or SPA rewrites: this is an SSR application with server functions.

Vercel sets `VERCEL=1`; `vite.config.ts` selects Nitro's `vercel` preset only in that environment. The managed Lovable build keeps its own target. Nitro emits Vercel Build Output API files under `.vercel/output` outside the Lovable sandbox. Verify Vercel recognizes those files and successfully runs the server functions; this target cannot be validated by the managed Cloud build alone.

Deploy only after schema, actual data, storage, Auth callbacks and both environment-variable pairs are configured. Confirm the existing Git synchronization in Lovable **Project settings → Git**; the agent cannot inspect or switch that connection or branch.

## Acceptance checks after deployment

- Verify network calls use the target external origin, not the current Cloud backend.
- Create and verify the designated developer account, sign in, open every admin page, sign out, and confirm protected pages redirect.
- Submit a real test enquiry on the public site; verify dashboard counts, search/filter/detail/status/notes and cleanup.
- Edit a service, upload an image, toggle visibility and verify the corresponding public page. Restore original test changes.
- On each CMS page, save a draft, refresh the editor, confirm the public page is unchanged, publish, then refresh the public page and confirm persistence.
- Replace and publish all Before & After images; verify images and slider behavior, then restore originals.
- Update profile/settings and verify persistence. Confirm unsigned users cannot read private enquiries, drafts or upload images.
- Check Vercel deployment/function logs and browser errors. Never mark these checks complete merely because a build succeeded.

## Later client migration

Repeat schema bootstrap on the client's empty project, copy actual data and private media paths, migrate/recreate verified Auth identities safely, configure email callbacks, then switch **all four** environment variables and redeploy the same repository. Verify every acceptance check before switching traffic. Retain the old backend until cutover is confirmed; do not delete content or storage as part of this setup. No website rebuild or CMS schema redesign is necessary.