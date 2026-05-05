# ljhnick.github.io

Personal site of Jiahao Nick Li. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # outputs to dist/
pnpm preview  # serves dist/
```

## Edit content

- **About / bio**: `src/pages/index.astro`
- **Publications**: one Markdown file per paper in `src/content/publications/`. Schema in `src/content/config.ts`. Set `selected: true` to surface on the home page.
- **News**: one file per item in `src/content/news/` (filename: `YYYY-MM-DD-slug.md`). Front-matter has `date:`; the body is the announcement (Markdown).
- **Site title, email, GA id, links**: `src/consts.ts`.
- **Static assets** (PDFs, profile photo, paper preview images): `public/assets/`. Anything in `public/` is served at the same path on the live site.
- **`/omniquery/` standalone subsite**: `public/omniquery/` — passed through unchanged.

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with Astro and publishes to GitHub Pages. Make sure repo Settings → Pages → Source is set to **GitHub Actions**.

If the site uses a custom domain, add a `public/CNAME` file containing the domain (e.g. `jiahaoli.net`).
