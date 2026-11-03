# External development backend and Vercel
- [x] Fix only build-related errors: automatic production build succeeded at 09:23 UTC on 2026-11-03, all 25 tests passed, and the managed Cloud connection is unchanged.
- [ ] Document the live Cloud schema, policies, storage and authentication dependencies.
- [ ] Generate a complete external-only bootstrap SQL and storage configuration.
- [ ] Document exact Vercel configuration and required manual access.
- [ ] Apply existing schema securely to the developer's external project; blocked on external database administration access.
- [ ] Configure external production variables and deploy to Vercel; blocked on Vercel project access.
- [ ] Verify authenticated workflows on the external deployment after schema and deployment are available.
- [x] Prepare portable deployment configuration and migration instructions without changing the current Cloud connection.

# Complete website content management
- [x] Connect all 16 existing public pages to published content without changing captured layouts.
- [x] Add page/section selection, draft editing, image uploads/previews, shared FAQ editing and publishing.
- [x] Authenticated text/image draft isolation, publish and refresh tested on all 16 pages; original content restored.
- [x] All six Before & After uploads, published images, refresh and slider behavior verified; original images restored.
- [x] Mobile content editor and CMS/security/routing tests verified.
- [x] Final shared-selector draft isolation, saved-draft refresh, publishing and public refresh verified on Home, Contact and Painting; original label restored.
- [x] Automatic production build succeeded on 2026-11-03; all 25 CMS/security/routing tests passed. Deployment has not been requested.

# Admin dashboard
- [ ] Verify the designated developer's signed-in overview, all six admin pages, refresh, data retrieval and sign-out; fix reproduced failures only.
- [x] Verified designated developer setup and atomic permanent client ownership handover implemented; developer role is permanently revoked on client claim.
- [x] Authorization safeguards and signed-out setup/route protection checked; authenticated handover awaits creation and verification of designated accounts.
- [x] Current phase limited to admin-only work; public integration unchanged.
- [x] Owner-claim login, notifications, session cleanup, upload previews and dialog layout implemented.
- [x] Six protected admin URLs redirect when signed out; login modes and mobile layout checked.
- [x] Sixteen admin permission/routing tests pass.
- [ ] Remaining signed-in enquiry/service/profile/logout checks are outside this CMS task; developer access is now available.
- [ ] Secure email login, admin permissions, profile and logout.
- [ ] Persistent enquiries, statistics, notes, search, filters and pagination.
- [ ] Service editing, uploads and public website integration.
- [x] Homepage and all-page content drafts, uploads and publishing verified with the developer account.
- [ ] Verify admin workflows and preserve public pages.
- [ ] Confirm personal GitHub connection; blocked on owner-managed Git settings (no repository or branch changed).

# Website import
- [ ] Audit all accessible original inner pages and their links.
- [ ] Import every discovered inner page without replacing the homepage.
- [ ] Restore inner-page interactions and connect all internal destinations.
- [ ] Compare each imported page with the source at desktop, tablet and phone sizes.
- [ ] Report created pages and any unavailable functionality.
- [x] Import the requested homepage.
- [x] Review source and preview on desktop and phone; restore menu, FAQ, select and sliders.
- [x] Verify visible content, primary destinations, controls, routing test and successful build.
- [ ] Verify background video playback: blocked in browser on both source and preview; poster remains visible.