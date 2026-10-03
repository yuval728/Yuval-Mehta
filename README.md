# Yuval Mehta | Portfolio

Next.js 16, Tailwind, Framer Motion. Deployed on Vercel at https://yuvalmehta.vercel.app

## Content
All copy lives in `src/data/config.ts`. Project cards are pulled from GitHub (`pinnedRepos`, exact repo names) and overlaid with curated copy from `CONFIG.projects`. Articles come from the Medium RSS feed.

## Environment
- `GITHUB_TOKEN`: avoids GitHub API rate limits on Vercel
- `RESEND_API_KEY`, `RESEND_FROM`: contact form email (sender must be a verified Resend domain)

## Develop
`npm install && npm run dev`
