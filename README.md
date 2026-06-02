# Tadesse Angaw

Personal software engineering site for Tadesse Angaw. A static Astro site backed by local Markdown content.

## Pages

| Path         | Purpose                         |
| ------------ | ------------------------------- |
| `/`          | Home                            |
| `/blog`      | Engineering writing             |
| `/portfolio` | Engineering portfolio narrative |
| `/cv`        | Professional CV                 |

## Tech Stack

- Astro
- Tailwind CSS
- Astro content collections for Markdown blog posts
- Cloudflare Pages for hosting
- GitHub Actions for deployment
- Prettier with Astro formatting support

## Local Development

```bash
npm install
npm run dev
```

Before committing, run:

```bash
npm run format
npm run format:check
npm run build
```

## Blog Posts

Blog posts live in:

```text
src/content/blog/
```

Use date-prefixed filenames so content stays easy to scan:

```text
2026-05-24-tech-heritage.md
```

Required frontmatter:

```yaml
---
title: "Blog Title"
slug: "blog-slug"
excerpt: "Short post summary for the blog."
publishedAt: XXXX-XX-XX
tags: ["tag-1", "tag-2"]
draft: false
---
```

Optional image fields for blog hero and social sharing:

```yaml
heroImage: "/images/blog/example-og.jpg"
heroImageAlt: "Description of the image."
heroImageCreditName: "Author, Source"
heroImageSourceUrl: "https://example.com/source"
heroImageLicenseName: "CC BY-SA 3.0"
heroImageLicenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/"
```

Blog hero/social images should be `1200x630` and live under `public/images/blog/` so platforms like LinkedIn, Slack, and
X can fetch them with a stable URL.

## Images

Use `src/assets/` for images rendered by Astro components, such as portfolio project images. Astro can optimize and
fingerprint these during build.

Use `public/` for stable URL assets:

- Favicons
- Open Graph images
- Files that external crawlers or platforms need to fetch directly

## SEO

The site includes:

- Canonical URLs
- Open Graph and Twitter metadata
- Article image previews when configured
- `robots.txt`
- `sitemap.xml`
- JSON-LD site/person metadata

Set these GitHub Actions variables before deployment:

- `PUBLIC_SITE_URL`: canonical site URL, `https://tadesseangaw.com`

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` builds the site and deploys `dist` to Cloudflare
Pages on pushes to `main`.

Required GitHub configuration:

| Kind                | Name                            | Purpose                           |
| ------------------- | ------------------------------- | --------------------------------- |
| Repository variable | `CLOUDFLARE_PAGES_PROJECT_NAME` | Cloudflare Pages project name     |
| Repository secret   | `CLOUDFLARE_ACCOUNT_ID`         | Cloudflare account ID             |
| Repository secret   | `CLOUDFLARE_API_TOKEN`          | API token allowed to deploy Pages |

Manual deploy:

```bash
npm ci
npm run build
npx wrangler pages deploy dist --project-name=your-pages-project
```

## Notes

Generated folders such as `dist/`, `.astro/`, and `node_modules/` are ignored. Local editor state such as `.idea/` and
`.cursor/` is also ignored.
