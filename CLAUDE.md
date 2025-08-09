# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Development Server
- `npm run dev` - Start Astro development server
- `npm run build` - Build the site for production
- `npm run preview` - Preview the built site locally

### Code Quality
- `npm run lint` - Run ESLint on the codebase
- `npm run format` - Format code with Prettier

### Post-Build
- `npm run postbuild` - Automatically formats built files (runs after build)

## Architecture Overview

This is a personal portfolio website built with **Astro**, using **Tailwind CSS** for styling and **TypeScript** for type safety. The site is a single-page application showcasing Lucas Everett's work and experience.

### Project Structure
- **src/pages/index.astro** - Main entry point that renders the entire single-page portfolio
- **src/layouts/Layout.astro** - Base HTML layout with SEO meta tags and global styling
- **src/components/** - Reusable Astro components:
  - `Home.astro` - Main content component with all portfolio sections (hero, work, about, skills, contact)
  - `WorkCard.astro` - Component for displaying project cards with variants (featured/standard)
  - `Social.astro` - Social media links component
- **src/styles/global.css** - Global CSS imports and styles
- **public/** - Static assets including icons, images, and thumbnails

### Key Technologies
- **Astro** - Static site generator with component-based architecture
- **Tailwind CSS v4** - Utility-first CSS framework (using Vite plugin)
- **TypeScript** - Type safety with strict configuration
- **ESLint** - Code linting with Astro-specific rules and accessibility checks
- **Prettier** - Code formatting

### Build Configuration
- **astro.config.mjs** - Astro configuration with Tailwind CSS Vite plugin
- **eslint.config.js** - ESLint flat config with Astro and accessibility rules
- **tsconfig.json** - TypeScript strict configuration extending Astro's recommended settings

### Content Structure
The site is structured as a single-page portfolio with sections for:
- Hero/intro with profile image and call-to-action buttons
- Work section featuring Easy Speed Dial (browser extension) and other projects
- About section with professional background and strengths
- Skills section with technology icons
- Contact section with social media links

All content is hardcoded in the Astro components, making this a static site with no CMS or external data sources.