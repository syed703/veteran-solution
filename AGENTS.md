<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website import
## Admin management
- Select the Vercel Nitro preset only when VERCEL=1; preserve the managed Cloud target and use matching browser/server backend variables on external deployments so backend migration never requires redesigning routes or CMS fields.
- Keep private admin reads and mutations behind authenticated server middleware plus a database-backed role check; route gates alone are not authorization.
- Use one root auth subscription and clear cached private records on sign-out to prevent stale-account data.
- Relay recovery events from the root auth subscription and validate the live user before displaying or submitting password recovery; bind refresh markers to that user so callback timing cannot hide the form.
- Keep owner-claim decisions in the database RPC; client access helpers must fail closed and never grant roles from an email string.
- Run the designated-account claim on every login before reading roles; singleton ownership state and an advisory transaction lock make owner handover revoke the pinned temporary developer role permanently without changing existing RLS.
- Store enquiry service slugs as historical snapshots; removing a catalogue service must not remove its enquiries.
- Reuse private website-media storage for the media library; database policies prevent replacing or deleting referenced draft, published or service images, and replacements create new immutable objects.
- Merge section changes atomically through admin_save_content; authenticated draft previews must never alter public queries or caches.

## Website import conventions
- Manage captured content through stable per-page field IDs in the CMS catalogue, React text/attribute bindings and a published-only loader; retain original DOM structure and never render editor-supplied HTML.
- Keep shared FAQ and service-selector defaults in a client-safe content module, so the CMS and public controls use the same fields without duplicating defaults.
- Keep imported homepage markup and interactions in its route file, with source CSS retained separately, to preserve captured structure and visual fidelity.
- Use existing Radix primitives for captured sheet, select, and accordion controls so keyboard access and focus behavior remain consistent.
- Quote submission must not report delivery until a real delivery service is connected; show the available phone contact instead.
- Keep inner-page content in its captured route and page CSS; share only restored interactive controls to avoid diverging menu/select behavior.
- Use un-nested service and legal detail routes alongside their directory pages so direct visits and refreshes render the complete detail page.
