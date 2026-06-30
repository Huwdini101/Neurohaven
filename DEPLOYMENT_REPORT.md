# NeuroHaven Cloudflare Pages Deployment Audit

Audit date: 30 June 2026

## Conclusion

NeuroHaven is ready to deploy as a static Cloudflare Pages site. The production
artifact contains only static HTML, CSS, JavaScript, images, `robots.txt`,
`sitemap.xml`, and the SPA routing fallback. There is no backend build, Express
build, server bundle, database, or runtime secret requirement.

## What was checked

- Every repository source and configuration file was searched for old hosting
  runtime code, plugins, dependencies, API assumptions, server compilation, and
  external asset dependencies.
- `package.json`, `pnpm-lock.yaml`, `vite.config.ts`, `tsconfig.json`, and
  `tsconfig.node.json` were reviewed and validated.
- The package script is exactly `"build": "vite build"`.
- A fresh `pnpm install --frozen-lockfile` completed with pnpm 10.11.1.
- TypeScript validation completed with `pnpm run check`.
- Vite compiled 1,601 modules into `dist/` with no application build errors.
- The built output was previewed and the following routes were verified:
  `/`, `/blog`, all three article routes, `/privacy`, and an unknown 404 route.
- A Home-to-Blog internal link was clicked in the built site and navigated
  successfully.
- Every tested page had the expected title, canonical URL, and zero broken
  images. The browser console reported no errors.
- The MailerLite endpoint returned HTTP 200 and correctly reported that email is
  required. No test subscriber was created during this non-mutating audit.
- `robots.txt`, `sitemap.xml`, the favicon, the Open Graph image, standard SEO
  metadata, Open Graph metadata, Twitter metadata, and canonical metadata are
  present in the build.

## What was fixed

- Removed stale lockfile entries for Express, Express types, the old hosting
  runtime, JSX-location tooling, and other backend-era packages.
- Removed a missing Wouter patch declaration that prevented dependency install.
- Regenerated `pnpm-lock.yaml` from the cleaned dependency graph.
- Reduced production dependencies to the packages actually imported by the
  static site.
- Removed 49 unused generated UI components plus unused hooks, theme context,
  shared server-era constants, stale migration notes, completed todo notes, and
  the uploaded source ZIP.
- Removed the unresolved `tw-animate-css` import that blocked the production
  build.
- Made `vite.config.ts` ESM-safe while preserving a repository-root build and a
  single `dist/` output directory.
- Localized the favicon, social image, and page artwork so production no longer
  relies on the previous platform's asset CDN.
- Added `.node-version` and a deployment-safe `.gitignore`.
- Added consistent per-route titles, descriptions, Open Graph/Twitter values,
  and canonical URLs.
- Changed internal footer links to client-side router links.
- Corrected MailerLite network-error handling so a failed request is no longer
  reported as a successful signup.
- Updated the README structure and deployment guidance.

## Verification note

The Codex Windows sandbox blocks the default native esbuild config loader from
reading ancestor directories. The exact `pnpm run build` script was executed and
reached that host-only restriction. The same checked-in configuration and source
then completed a production Vite build using Vite's runner config loader. This is
not a repository or Cloudflare issue; Cloudflare Pages builds run in a Linux
container without this desktop sandbox restriction.

## Remaining issues

No deployment-blocking repository issues remain.

An actual MailerLite subscription was intentionally not submitted because that
would create an external subscriber. The form identifier and validation endpoint
are live and correctly configured.

## Recommended Cloudflare Pages settings

- Build system: v3
- Framework preset: Vite (or None with the values below)
- Production branch: `main` after this cleanup branch is reviewed and merged
- Root directory: repository root (`/` or leave blank)
- Build command: `pnpm run build`
- Build output directory: `dist`
- Node version: `22.22.2`
- pnpm version: `10.11.1`
- Environment variables: none required by the application
- Optional explicit build variables:
  - `NODE_VERSION=22.22.2`
  - `PNPM_VERSION=10.11.1`

Cloudflare Pages recognizes `.node-version`, and the explicit pnpm variable is
recommended because the v3 build image does not infer pnpm from
`package.json#packageManager`.

References:

- [Cloudflare Pages build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Cloudflare Pages build image and version controls](https://developers.cloudflare.com/pages/configuration/build-image/)
