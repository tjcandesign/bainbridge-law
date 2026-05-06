# Draft pages

Files in this folder are **not routed**. The underscore prefix (`_drafts`)
makes this a private folder in the Next.js App Router — it is excluded from
the build and never appears at any URL.

## Current drafts

- `trusts-estates/page.tsx` — future Trusts & Estates practice area.
  Currently hidden. See the TODO at the top of that file for the steps to
  promote it to a public route.

## How to promote a draft to a public page

1. Move the folder out of `_drafts/` (e.g., `_drafts/trusts-estates/` →
   `trusts-estates/`).
2. Update the imports inside `page.tsx` — the relative paths up to
   `components/` will need one fewer `../`.
3. Add navigation entries:
   - `src/components/Header.tsx` (`links` array)
   - `src/components/Footer.tsx` (Practice column)
   - `src/app/services/page.tsx` (add to `practice` array)
4. Remove `robots: { index: false, follow: false }` from the page metadata.
5. Confirm the copy with the firm before launch.
