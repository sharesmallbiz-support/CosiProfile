# Nini | Cosi - Bilingual Profile Website

## Project Overview
A beautiful, modern bilingual static profile website for **Nini**, a Georgian content creator and founder of **Cosi**, a bespoke gifts company. The site showcases handcrafted creations with elegant design and seamless language switching between English and Georgian.

## Features Implemented
### Core Functionality
- ✅ **Bilingual Support**: Seamless switching between English (EN) and Georgian (KA) with smooth fade transitions
- ✅ **Dark/Light Theme**: Full theme support with system preference detection
- ✅ **Responsive Design**: Mobile-first design that works beautifully across all devices
- ✅ **Smooth Animations**: Scroll-triggered fade-in animations for all sections
- ✅ **Language Persistence**: Language preference saved in localStorage

### Sections
1. **Hero Section**: Full-width background with Nini's portrait, name, tagline, and call-to-action
2. **About Section**: Bio with workspace image, mission statement, and personal story
3. **Portfolio Gallery**: Masonry layout with category filters (All, Gifts, Custom, Featured) and lightbox modal
4. **Contact Section**: Contact form, social media links (Instagram, Facebook), and location badge
5. **Footer**: Company info, quick links, copyright, and Georgian flag tagline

## Design System
### Color Palette
- **Primary**: Warm terracotta/coral (#D47855) - Georgian warmth
- **Sage Green**: Natural artisan accent (#6D9B7E) - used for secondary elements
- **Backgrounds**: Warm whites (light mode), deep charcoal (dark mode)

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)
- **Georgian**: System fonts with proper fallbacks

### Visual Principles
- Elegant minimalism that lets content breathe
- Visual-first storytelling with high-quality imagery
- Sophisticated yet approachable influencer aesthetic
- Consistent spacing using Tailwind units (4, 6, 8, 12, 16, 20, 24)

## Technical Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Shadcn UI components
- **Language Management**: React Context + localStorage
- **Animations**: Framer Motion + Intersection Observer
- **Theme**: Next-themes for dark mode

## Project Structure
```
client/
├── public/
│   ├── en.json          # English language content
│   └── ka.json          # Georgian language content
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx   # Navigation with language/theme toggles
│   │   ├── Hero.tsx     # Hero section with background image
│   │   ├── About.tsx    # About/bio section
│   │   ├── Portfolio.tsx # Gallery with filters and lightbox
│   │   ├── Contact.tsx  # Contact form and social links
│   │   └── Footer.tsx   # Footer with links
│   ├── contexts/
│   │   └── LanguageContext.tsx  # Language state management
│   ├── hooks/
│   │   └── useScrollAnimation.tsx # Scroll animation hook
│   ├── types/
│   │   └── language.ts  # TypeScript interfaces
│   └── pages/
│       └── Home.tsx     # Main page layout
```

## Content Management
### For GitHub Mobile Editing
Language content is stored in JSON files that can be easily edited via GitHub mobile:

**Location**: `client/public/en.json` and `client/public/ka.json`

**Structure**:
```json
{
  "nav": { navigation labels },
  "hero": { hero section content },
  "about": { bio and mission },
  "portfolio": { items and filters },
  "contact": { form labels and social },
  "footer": { copyright and links }
}
```

To update content:
1. Open GitHub mobile app
2. Navigate to the file (`en.json` or `ka.json`)
3. Tap edit
4. Make changes to the text
5. Commit changes
6. Changes will appear immediately on next deployment

## Development Commands
- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production
- Language files are served from `client/public/` folder

## Design Guidelines
Detailed design specifications are documented in `design_guidelines.md`, including:
- Complete color system with HSL values
- Typography hierarchy and font weights
- Component specifications and layouts
- Interaction patterns and animations
- Accessibility requirements

## User Preferences
- **Language Display**: The site defaults to English but remembers user's language choice
- **Theme**: Respects system preference, with manual toggle available
- **Navigation**: Smooth scroll behavior with visual feedback
- **Animations**: Subtle, elegant transitions - no distracting motion

## Recent Changes (October 15, 2025)
- Initial build completed with all MVP features
- Implemented bilingual language system with smooth transitions
- Added dark/light theme support
- Created responsive portfolio gallery with masonry layout
- Integrated scroll animations for elegant reveals
- Added sage green accents throughout the design
- Successfully tested all features end-to-end

## Next Steps (Future Enhancements)
- Add CMS integration for easier content management
- Implement image optimization and lazy loading
- Add testimonials/reviews section
- Create blog section for content marketing
- Add analytics integration to track visitor engagement
- Optimize for SEO with structured data

## Notes
- All images are high-quality stock photos from the assets folder
- Contact form currently shows success toast without backend submission (can be connected to email service in future)
- Site is optimized for GitHub mobile editing workflow as requested
