# Nini Chaladzè | Niniverse - Bilingual Profile Website

## Project Overview
A beautiful, modern bilingual static profile website for **Nini Chaladzè**, a Georgian visual storyteller, educator, and content creator. The site showcases her **Niniverse** brand—a personal universe focused on visual education, creative storytelling, and authentic inspiration with elegant design and seamless language switching between English and Georgian.

## Features Implemented
### Core Functionality
- ✅ **Bilingual Support**: Seamless switching between English (EN) and Georgian (KA) with smooth fade transitions
- ✅ **Dark/Light Theme**: Full theme support with system preference detection
- ✅ **Responsive Design**: Mobile-first design that works beautifully across all devices
- ✅ **Smooth Animations**: Scroll-triggered fade-in animations for all sections
- ✅ **Language Persistence**: Language preference saved in localStorage

### Sections
1. **Hero Section**: Full-width background with Nini's portrait, "Visual Storyteller & Educator" tagline, and inspiring intro about beauty meeting meaning
2. **About Section**: Bio with workspace image, mission statement focusing on visual education and authentic storytelling
3. **Videos Section**: YouTube channel embed showcasing creative journey and educational content
4. **Portfolio Gallery**: Masonry layout with category filters (All, Visual Education, Creative Projects, Featured Work) showcasing masterclasses, collaborations, and professional work
5. **Contact Section**: Connection-focused form emphasizing education, collaboration, and community
6. **Footer**: Inspirational tagline "Where Beauty Meets Meaning — Georgian Heritage, Contemporary Vision"

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
- `./build-github.sh` - Build static site to `/docs` folder for GitHub Pages
- Language files are served from `client/public/` folder

## GitHub Pages Deployment
This is a **100% static site** with no database or backend. To deploy:

1. Run `./build-github.sh` to build static files to `/docs` folder
   - Uses `vite.config.github.ts` which generates **relative paths** (required for GitHub Pages subdirectory deployment)
   - This prevents 404 errors for CSS/JS files when deployed to `https://username.github.io/repo-name/`
2. Commit and push the `/docs` folder to GitHub
3. Configure GitHub Pages to serve from `/docs` folder on main branch
4. Site will be live at `https://[username].github.io/[repo-name]`

See `README.md` for detailed deployment instructions.

## Design Guidelines
Detailed design specifications are documented in `design_guidelines.md`, including:
- Complete color system with HSL values
- Typography hierarchy and font weights
- Component specifications and layouts
- Interaction patterns and animations
- Accessibility requirements

## Contact Information
- **Full Name**: Nini Chaladzè
- **LinkedIn**: https://www.linkedin.com/in/nini-chaladze-425819178/
- **Instagram**: https://www.instagram.com/ni.chaladze/
- **YouTube**: https://www.youtube.com/channel/UC5ew6KjGzWdBDp6eRB9O2zA

## User Preferences
- **Language Display**: The site defaults to English but remembers user's language choice
- **Theme**: Respects system preference, with manual toggle available
- **Navigation**: Smooth scroll behavior with visual feedback
- **Animations**: Subtle, elegant transitions - no distracting motion

## Brand Strategy
The **Niniverse** brand focuses on:
- **Visual Education**: Masterclasses, tips, and lessons on visual storytelling and strategy
- **Creative Journey**: Nini's professional path, experiences, and behind-the-scenes insights
- **Mindful Work**: Routines, organization, and creative productivity
- **Projects & Portfolio**: Professional works, collaborations, and student success stories
- **Lifestyle & Calm**: Everyday inspiration, mindfulness, and balance

**Tone**: Warm yet ambitious, stylish yet grounded, quietly inspiring—never pretentious

**Positioning**: Visual storyteller and educator who celebrates Georgian heritage while embracing contemporary vision

## Recent Changes (October 27, 2025)
- **Complete Niniverse Rebrand**: Transformed from product-focused "Kosi" to education/storytelling-focused "Niniverse"
  - Updated hero tagline from "Creator & Artisan" to "Visual Storyteller & Educator"
  - Rewrote hero intro to emphasize visual education, storytelling, and inspiration
  - Transformed portfolio from physical products to creative projects:
    - "Visual Education" filter (masterclasses, workshops, lessons)
    - "Creative Projects" filter (collaborations, brand photography)
    - "Featured Work" filter (documentaries, student success stories)
  - Updated contact section to emphasize connection, learning, and collaboration
  - Changed footer tagline from "Handcrafted in Georgia" to "Where Beauty Meets Meaning — Georgian Heritage, Contemporary Vision"
- **Fixed Portfolio Navigation**: Corrected filter button labels to match JSON data (gifts/custom/featured)
- All content now aligned with warm, sincere, educational tone

### Previous Updates (October 15, 2025)
- Initial build completed with all MVP features
- Implemented bilingual language system with smooth transitions
- Added dark/light theme support
- Created responsive portfolio gallery with masonry layout
- Integrated scroll animations for elegant reveals
- Added sage green accents throughout the design
- Successfully tested all features end-to-end
- **Fixed GitHub Pages deployment**: 
  - Created `vite.config.github.ts` with relative paths (fixes CSS/JS 404 errors)
  - Implemented hash-based routing to work with GitHub Pages subdirectories
  - Fixed language JSON file paths to use relative URLs (`./en.json` instead of `/en.json`)
  - URLs now use hash fragments (e.g., `/#/`) for compatibility
- **Added build info to footer**:
  - Footer now displays version number and build date
  - Build info is injected at build time using Vite's define feature
  - Format: "v{version} • Built on {date}"
  - Helps track deployed versions on GitHub Pages
- **Updated hero section with new profile photo**:
  - Replaced stock image with Nini's professional portrait (attached_assets/unnamed_1760549168809.jpg)
  - Changed CSS positioning from `bg-center` to `bg-top` to prevent cropping the top of the image
  - Scaled out image using `background-size: contain` to show more of the photo and Nini's full face
  - Ensures full portrait is visible on all screen sizes without any cropping
  - Tested on desktop and mobile - displays perfectly with more of the photo visible

## Next Steps (Future Enhancements)
- Add CMS integration for easier content management
- Implement image optimization and lazy loading
- Add testimonials/reviews section
- Create blog section for content marketing
- Add analytics integration to track visitor engagement
- Optimize for SEO with structured data

## Notes
- Hero uses Nini's actual portrait photo (attached_assets/unnamed_1760549168809.jpg)
- Portfolio items showcase creative/educational work aligned with Niniverse brand
- Contact form currently shows success toast without backend submission (can be connected to email service in future)
- Site is optimized for GitHub mobile editing workflow via JSON files
- All content reflects the Niniverse brand strategy: visual education, authenticity, and inspiration
