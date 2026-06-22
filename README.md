# Karthik J — Portfolio

A single-page personal portfolio built with **React + Vite + Tailwind CSS v4**, ported
from a Claude Design source.

## Stack

- React 18 (SPA)
- Vite 6
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Fonts: Syne, Instrument Sans, JetBrains Mono (Google Fonts)

## Develop

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  components/   UI sections (Hero, About, Experience, Projects, Skills, Education, Contact)
                + effects (ScrollProgress, CursorGlow, HeroCanvas, Reveal)
  hooks/        useReveal (scroll reveal), useParallax
  data/         portfolio.js — single source of truth for all content
  index.css     Tailwind v4 theme tokens, keyframes, base styles
```

Content (projects, experience, skills, education, contact) lives in
`src/data/portfolio.js` — edit there to update the site.
