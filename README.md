# Julian Jay De Guzman — Portfolio

Personal portfolio of Julian Jay De Guzman, a 3rd-year BSIT student at Gordon College and aspiring web developer.

**Live site:** _add your Vercel link here_

## Tech stack
React 19, Vite, React Router, Tailwind CSS v4

## Pages
Home, About, Projects, Contact, and a 404 Not Found page.

## Run locally
```bash
npm install
npm run dev
```
Build for production with `npm run build`.

## Structure
```
src/
  components/  Header, Footer, Layout, ProjectCard, SkillBadge, ContactForm...
  pages/       Home, About, Projects, Contact, NotFound
  data/        profile.js, skills.js, projects.js
  hooks/       usePageTitle
  assets/      portrait and project screenshots
```
`vercel.json` rewrites every route to `index.html` so refreshing `/about` works on the live site.
