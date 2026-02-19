# Kairos — Consultant & Training Landing Page

A modern, premium landing page built for **Kairos** — a game-based learning company that builds tabletop experiences to develop workplace skills.

This page is designed for **corporate L&D teams and independent consultants**, showcasing four proprietary learning games with interactive video previews.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules (vanilla CSS)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: Google Fonts via `next/font`

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
kairos-consultant/
├── public/
│   ├── hero-boxes.jpg            # Hero section product image
│   ├── kairos-logo.png           # Brand logo
│   ├── logo-team-compass.png     # Game logo
│   ├── logo-shared-spaces.png    # Game logo
│   ├── logo-surface-tension.png  # Game logo
│   ├── logo-cycle-time.png       # Game logo
│   └── videos/
│       ├── team-compass.mp4      # Promo video
│       ├── shared-spaces.mp4     # Promo video
│       ├── surface-tension.mp4   # Promo video
│       └── cycle-time.mp4        # Promo video
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout with fonts
│   │   ├── page.tsx              # Home page
│   │   └── globals.css           # Global styles & design tokens
│   └── components/
│       ├── Navbar.tsx             # Navigation with game dropdown
│       ├── Hero.tsx               # Hero section with parallax
│       ├── Features.tsx           # "What's Different" feature cards
│       ├── Games.tsx              # Game cards with video previews
│       ├── CTA.tsx                # Call-to-action section
│       ├── Footer.tsx             # Footer with links
│       └── AnimatedSection.tsx    # Reusable animation components
└── package.json
```

## Features

- 🎮 **Interactive Game Cards** — Click-to-play video previews with sound
- ✨ **Smooth Animations** — Scroll-triggered reveals, parallax, and micro-interactions
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🎨 **Modern Design** — Clean white theme with purple, red, green, yellow accents
- ⚡ **Fast** — Static generation, optimized images, minimal JavaScript

## Deployment

Deploy to [Vercel](https://vercel.com) with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

Private — © Kairos. All rights reserved.
