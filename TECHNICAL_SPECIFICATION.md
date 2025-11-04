# Niniverse - Technical Specification Document

**Version:** 1.0  
**Last Updated:** November 4, 2025  
**Project Owner:** Nini Chaladzè  
**Project Type:** Bilingual Static Profile Website

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Business Overview](#business-overview)
3. [Project Objectives](#project-objectives)
4. [Scope and Features](#scope-and-features)
5. [Technical Architecture](#technical-architecture)
6. [Technology Stack](#technology-stack)
7. [Design System](#design-system)
8. [Content Management](#content-management)
9. [Deployment Strategy](#deployment-strategy)
10. [Development Workflow](#development-workflow)
11. [Quality Assurance](#quality-assurance)
12. [Performance Optimization](#performance-optimization)
13. [Accessibility](#accessibility)
14. [SEO Implementation](#seo-implementation)
15. [Future Enhancements](#future-enhancements)
16. [Maintenance and Support](#maintenance-and-support)

---

## Executive Summary

**Niniverse** is a bilingual (English/Georgian) static profile website for Nini Chaladzè, a Georgian visual storyteller and educator. The platform serves as the digital home for the "Niniverse" brand—a personal universe focused on visual education, creative storytelling, and authentic inspiration.

The site is built as a 100% static application with zero backend dependencies, designed for seamless content editing via JSON files directly from GitHub mobile, and deployed to GitHub Pages for maximum reliability and minimal operational overhead.

---

## Business Overview

### Brand Identity

**Niniverse** represents Nini Chaladzè's commitment to:
- **Visual Education**: Teaching visual storytelling, strategy, and creative skills
- **Creative Journey**: Sharing professional experiences and behind-the-scenes insights
- **Mindful Work**: Promoting routines, organization, and creative productivity
- **Portfolio Showcase**: Highlighting professional work, collaborations, and student success stories
- **Lifestyle & Inspiration**: Everyday mindfulness, balance, and authentic living

### Brand Voice & Tone

- **Warm yet ambitious**: Approachable but professional
- **Stylish yet grounded**: Sophisticated without pretension
- **Quietly inspiring**: Motivational without being preachy
- **Authentic**: Genuine Georgian heritage meets contemporary vision

### Target Audience

1. **Visual Learners**: Individuals seeking to improve their visual storytelling skills
2. **Creative Professionals**: Photographers, content creators, and brand strategists
3. **Students**: Aspiring creatives looking for mentorship and education
4. **Collaborators**: Brands and organizations seeking partnership opportunities
5. **Community Members**: Followers interested in mindful creativity and inspiration

---

## Project Objectives

### Primary Goals

1. **Establish Online Presence**: Create a professional digital home for the Niniverse brand
2. **Showcase Expertise**: Highlight Nini's work in visual education and creative storytelling
3. **Enable Discovery**: Make it easy for potential students and collaborators to connect
4. **Support Bilingual Audience**: Serve both English-speaking and Georgian-speaking communities
5. **Enable Mobile Editing**: Allow content updates via GitHub mobile without technical barriers

### Success Metrics

- **User Engagement**: Smooth navigation and interaction across all sections
- **Content Accessibility**: Seamless language switching with zero friction
- **Mobile Experience**: Perfect responsiveness on all device sizes
- **Performance**: Fast load times (< 3 seconds on 3G)
- **Maintenance**: Content updates possible in < 5 minutes from mobile device

---

## Scope and Features

### Core Features

#### 1. Bilingual Language System
- **Languages Supported**: English (EN) and Georgian (KA)
- **Language Toggle**: One-click switching in header navigation
- **Smooth Transitions**: Fade animations during language changes
- **Persistence**: User language preference saved in localStorage
- **HTML Lang Attribute**: Dynamic updates for accessibility and SEO

#### 2. Dark/Light Theme Support
- **System Preference Detection**: Automatic theme based on OS settings
- **Manual Toggle**: Theme switch button in header
- **Persistent Preference**: Theme choice saved in localStorage
- **Smooth Transitions**: Elegant fade between themes
- **Complete Coverage**: All components fully themed

#### 3. Responsive Design
- **Mobile-First**: Optimized for smallest screens first
- **Breakpoints**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Touch-Friendly**: Large interactive areas for mobile users
- **Adaptive Layouts**: Content reorganizes intelligently per screen size

#### 4. Single-Page Navigation
- **Smooth Scrolling**: Animated scroll to anchors
- **Sticky Header**: Always-accessible navigation
- **Active Section Indicators**: Visual feedback on current section
- **Quick Links**: Footer navigation for easy access

#### 5. Section Breakdown

##### Hero Section
- Full-width background with Nini's professional portrait
- Tagline: "Visual Storyteller & Educator"
- Inspiring introduction about visual education and authenticity
- Call-to-action to explore content

##### About Section
- Professional biography with workspace imagery
- Mission statement focusing on visual education
- Personal story connecting Georgian heritage to contemporary vision
- Visual emphasis on warmth and approachability

##### Videos Section
- Embedded YouTube channel showcase
- Direct link to full channel
- Highlights creative journey and educational content

##### Portfolio Gallery
- **Masonry Layout**: Pinterest-style responsive grid
- **Category Filters**: 
  - All (default view)
  - Visual Education (masterclasses, workshops, lessons)
  - Creative Projects (collaborations, brand photography)
  - Featured Work (documentaries, student success stories)
- **Lightbox**: Full-screen image viewing with navigation
- **Lazy Loading**: Images load as user scrolls

##### Contact Section
- Connection-focused messaging
- Contact form with validation
- Social media links:
  - LinkedIn
  - Instagram
  - YouTube
- Call-to-action emphasizing education, collaboration, and community

##### Footer
- Inspirational tagline: "Where Beauty Meets Meaning — Georgian Heritage, Contemporary Vision"
- Quick navigation links to sections
- Social media icons
- Build version and date information
- Copyright notice

#### 6. Animations
- **Scroll-Triggered Animations**: Sections fade in on viewport entry
- **Intersection Observer**: Performance-optimized visibility detection
- **Subtle Transitions**: Elegant, non-distracting motion
- **Reduced Motion Support**: Respects user accessibility preferences

---

## Technical Architecture

### Application Type
**100% Static Site** - No backend, no database, no server-side logic

### Architecture Pattern
**Single-Page Application (SPA)** with hash-based routing for GitHub Pages compatibility

### Project Structure

```
niniverse/
├── client/                          # Frontend application
│   ├── public/                      # Static assets
│   │   ├── en.json                  # English language content
│   │   └── ka.json                  # Georgian language content
│   ├── src/
│   │   ├── components/              # React components
│   │   │   ├── Header.tsx           # Navigation with language/theme toggles
│   │   │   ├── Hero.tsx             # Hero section
│   │   │   ├── About.tsx            # About section
│   │   │   ├── Videos.tsx           # YouTube embed section
│   │   │   ├── Portfolio.tsx        # Gallery with filters
│   │   │   ├── Contact.tsx          # Contact form
│   │   │   └── Footer.tsx           # Footer
│   │   ├── contexts/
│   │   │   ├── LanguageContext.tsx  # Language state management
│   │   │   └── ThemeProvider.tsx    # Theme state management
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.tsx # Intersection Observer hook
│   │   ├── pages/
│   │   │   ├── Home.tsx             # Main page layout
│   │   │   └── not-found.tsx        # 404 page
│   │   ├── types/
│   │   │   └── language.ts          # TypeScript interfaces
│   │   ├── App.tsx                  # Root component
│   │   └── main.tsx                 # Entry point
│   ├── index.html                   # HTML template
│   └── index.css                    # Global styles
├── attached_assets/                 # Image assets
│   └── unnamed_1760549168809.jpg    # Nini's portrait
├── docs/                            # GitHub Pages build output
├── build-github.sh                  # GitHub Pages build script
├── vite.config.github.ts            # Vite config for static build
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── design_guidelines.md             # Design system documentation
├── README.md                        # Deployment instructions
└── replit.md                        # Project documentation

```

### Data Flow

1. **User visits site** → Browser loads `index.html`
2. **React initializes** → Checks localStorage for language/theme preferences
3. **Language provider** → Fetches appropriate JSON file (en.json or ka.json)
4. **Content renders** → Components display localized content
5. **User interactions** → State updates trigger re-renders
6. **Preferences saved** → localStorage persists language/theme choices

### State Management

- **Language State**: React Context API (`LanguageContext`)
- **Theme State**: React Context API (`ThemeProvider`)
- **Local State**: React hooks (useState, useEffect) for component-level state
- **Persistence**: Browser localStorage for user preferences

---

## Technology Stack

### Frontend Framework
- **React 18.3**: Modern UI library with hooks and concurrent features
- **TypeScript 5.x**: Type-safe development with enhanced IDE support

### Build Tools
- **Vite 5.4**: Lightning-fast build tool and dev server
- **esbuild**: Super-fast JavaScript bundler (used by Vite)

### Styling & UI
- **Tailwind CSS 3.x**: Utility-first CSS framework
- **Shadcn UI**: High-quality React component library
- **Radix UI**: Unstyled, accessible component primitives
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Beautiful icon library

### Routing
- **Wouter**: Lightweight routing library (< 2KB)
- **Hash-based routing**: Required for GitHub Pages subdirectory deployment

### Fonts
- **Playfair Display**: Elegant serif for headings
- **Inter**: Clean sans-serif for body text
- **System Fonts**: Georgian language fallbacks

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: Automatic vendor prefixes

### Hosting & Deployment
- **GitHub Pages**: Free static site hosting
- **GitHub Repository**: Version control and content management

---

## Design System

### Color Palette

#### Primary Colors
- **Primary (Terracotta/Coral)**: #D47855
  - HSL: `20 59% 58%`
  - Usage: Accent color, CTAs, links, active states
  
#### Secondary Colors
- **Sage Green**: #6D9B7E
  - HSL: `140 21% 52%`
  - Usage: Secondary accents, hover states, decorative elements

#### Background Colors
- **Light Mode**:
  - Background: Warm white (#FAFAF9)
  - Card: Soft white (#FFFFFF)
  - Muted: Light beige (#F5F5F4)

- **Dark Mode**:
  - Background: Deep charcoal (#1A1A1A)
  - Card: Dark gray (#2A2A2A)
  - Muted: Medium gray (#3A3A3A)

#### Text Colors
- **Light Mode**: Dark gray hierarchy (#171717, #525252, #737373)
- **Dark Mode**: Light gray hierarchy (#FAFAFA, #D4D4D4, #A3A3A3)

### Typography

#### Font Families
```css
--font-heading: 'Playfair Display', serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-georgian: system-ui, -apple-system, sans-serif;
```

#### Type Scale
- **H1**: 2.5rem (40px) - Hero title
- **H2**: 2rem (32px) - Section headings
- **H3**: 1.5rem (24px) - Subsection headings
- **Body**: 1rem (16px) - Paragraph text
- **Small**: 0.875rem (14px) - Captions, labels

#### Font Weights
- **Regular**: 400 (body text)
- **Medium**: 500 (labels, UI elements)
- **Semibold**: 600 (subheadings)
- **Bold**: 700 (headings)

### Spacing System

Based on Tailwind's spacing scale (1 unit = 0.25rem = 4px):
- **xs**: 4px (gap-1)
- **sm**: 8px (gap-2)
- **md**: 16px (gap-4)
- **lg**: 24px (gap-6)
- **xl**: 32px (gap-8)
- **2xl**: 48px (gap-12)
- **3xl**: 64px (gap-16)

### Component Specifications

#### Buttons
- **Height**: 40px (min-h-10)
- **Padding**: 16px horizontal, 8px vertical
- **Border Radius**: 6px (rounded-md)
- **Hover State**: Subtle elevation and color shift
- **Active State**: Pressed appearance

#### Cards
- **Background**: Card color with subtle elevation
- **Padding**: 24px (p-6)
- **Border Radius**: 8px (rounded-lg)
- **Shadow**: Subtle drop shadow (shadow-sm)

#### Forms
- **Input Height**: 40px
- **Input Padding**: 12px horizontal
- **Label Spacing**: 8px below label
- **Error Color**: Destructive red (#EF4444)
- **Focus Ring**: Primary color with opacity

### Layout Principles
- **Container Max Width**: 1280px
- **Content Padding**: 16px mobile, 24px tablet, 32px desktop
- **Section Spacing**: 80px vertical (py-20)
- **Grid Gap**: 24px (gap-6)

---

## Content Management

### Content Storage
All user-facing content is stored in JSON files located at:
- `client/public/en.json` (English)
- `client/public/ka.json` (Georgian)

### JSON Structure

```json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "videos": "Videos",
    "portfolio": "Portfolio",
    "contact": "Contact"
  },
  "hero": {
    "company": "Niniverse",
    "title": "Visual Storyteller & Educator",
    "description": "Welcome to a calm, inspiring space..."
  },
  "about": {
    "title": "About",
    "subtitle": "Visual Education Meets Authentic Storytelling",
    "bio": "...",
    "mission": "..."
  },
  "portfolio": {
    "title": "Portfolio",
    "items": [...],
    "filters": {
      "all": "All",
      "education": "Visual Education",
      "projects": "Creative Projects",
      "featured": "Featured Work"
    }
  },
  "contact": {
    "title": "Let's Connect",
    "description": "...",
    "form": {...},
    "social": {...}
  },
  "footer": {
    "tagline": "Where Beauty Meets Meaning",
    "copyright": "© 2025 Niniverse. All rights reserved."
  }
}
```

### Portfolio Item Structure

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "description": "Project description",
  "category": "education|projects|featured",
  "image": "/path/to/image.jpg"
}
```

### Mobile Editing Workflow

**GitHub Mobile App Process:**

1. Open GitHub mobile app
2. Navigate to repository
3. Browse to `client/public/en.json` or `ka.json`
4. Tap edit button (pencil icon)
5. Make content changes
6. Write commit message
7. Commit directly to main branch
8. GitHub Pages automatically rebuilds (if auto-deploy enabled)

**Advantages:**
- No technical skills required
- Edit from anywhere with phone
- Version control built-in
- Zero deployment complexity

---

## Deployment Strategy

### Build Process

#### Development Build
```bash
npm run dev
```
- Starts Vite dev server on port 5000
- Hot module replacement enabled
- Source maps for debugging
- Absolute paths for local development

#### Production Build for GitHub Pages
```bash
./build-github.sh
```

**Build script performs:**
1. Uses `vite.config.github.ts` with relative paths
2. Builds static files to `dist/public/` directory
3. Copies build output to `docs/` folder
4. Generates hash-based filenames for cache busting
5. Minifies CSS and JavaScript
6. Optimizes images

**Output:**
- All files in `/docs` folder
- `index.html` entry point
- `assets/` folder with hashed filenames
- `en.json` and `ka.json` in root

### GitHub Pages Configuration

**Repository Settings:**
1. Go to Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main`
4. Folder: `/docs`
5. Save configuration

**URL Structure:**
- Primary: `https://[username].github.io/[repo-name]/`
- Custom domain support available

### Build Configuration Differences

**Development** (`vite.config.ts`):
- Base path: `/`
- Absolute URLs
- Source maps enabled
- Development optimizations

**Production** (`vite.config.github.ts`):
- Base path: `./` (relative)
- Relative URLs throughout
- Production optimizations
- Minification enabled
- Tree shaking
- Code splitting

### Version Management

**Build Information:**
- Version injected from `package.json`
- Build timestamp added at build time
- Displayed in footer: "v{version} • Built on {date}"

---

## Development Workflow

### Local Development Setup

```bash
# Clone repository
git clone [repo-url]
cd niniverse

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Server
- **URL**: http://localhost:5000
- **Hot Reload**: Automatic on file changes
- **Console Logging**: Available for debugging

### Making Changes

**Component Updates:**
1. Edit React components in `client/src/components/`
2. Changes auto-reload in browser
3. Check browser console for errors
4. Test in both light/dark themes
5. Test in both EN/KA languages

**Content Updates:**
1. Edit `client/public/en.json` or `ka.json`
2. Refresh browser to see changes
3. Verify formatting and spelling
4. Ensure both language files have matching structure

**Style Updates:**
1. Edit `client/index.css` for global styles
2. Use Tailwind utility classes in components
3. Check responsiveness at all breakpoints
4. Verify dark mode appearance

### Testing Checklist

- [ ] All sections visible and functional
- [ ] Language toggle works (EN ↔ KA)
- [ ] Theme toggle works (Light ↔ Dark)
- [ ] Portfolio filters function correctly
- [ ] Contact form validation works
- [ ] All links open correctly
- [ ] Smooth scroll navigation works
- [ ] Responsive on mobile, tablet, desktop
- [ ] Images load correctly
- [ ] No console errors

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/update-about-section

# Make changes and commit
git add .
git commit -m "Update about section with new bio"

# Push to GitHub
git push origin feature/update-about-section

# Merge to main (or use pull request)
git checkout main
git merge feature/update-about-section
git push origin main
```

### Deployment Workflow

```bash
# Build for GitHub Pages
./build-github.sh

# Verify build output
ls -la docs/

# Commit build
git add docs/
git commit -m "Build: Update static site"

# Push to GitHub
git push origin main

# GitHub Pages auto-deploys in ~1-2 minutes
```

---

## Quality Assurance

### Code Quality

**TypeScript:**
- Strict type checking enabled
- No implicit `any` types
- Type inference where appropriate
- Interfaces for all data structures

**Linting:**
- ESLint configured for React and TypeScript
- Prettier for code formatting
- Pre-commit hooks (optional)

**Component Quality:**
- Reusable components
- Props validation via TypeScript
- Descriptive variable names
- Clear component hierarchy

### Browser Compatibility

**Supported Browsers:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Chrome Android (last 2 versions)

**Progressive Enhancement:**
- Works without JavaScript (basic content visible)
- Graceful degradation for older browsers
- Polyfills included where necessary

### Testing Strategy

**Manual Testing:**
- Visual regression testing
- Cross-browser testing
- Mobile device testing
- Accessibility testing with screen readers

**Automated Testing (Future):**
- Unit tests for utility functions
- Component tests with React Testing Library
- E2E tests with Playwright
- Visual regression with Percy or Chromatic

---

## Performance Optimization

### Current Optimizations

**Build-Time:**
- Code splitting
- Tree shaking (removing unused code)
- Minification (CSS and JavaScript)
- Image optimization
- Hash-based cache busting

**Runtime:**
- Lazy loading images
- Intersection Observer for scroll animations
- Efficient React re-renders
- LocalStorage for cached preferences

**Bundle Size:**
- Main JS: ~310 KB (gzipped: ~99 KB)
- Main CSS: ~75 KB (gzipped: ~12 KB)
- Total page weight: ~1.2 MB (with images)

### Performance Targets

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

### Future Optimizations

- Image format conversion (WebP, AVIF)
- Critical CSS extraction
- Service Worker for offline support
- CDN for asset delivery
- Further code splitting

---

## Accessibility

### WCAG 2.1 AA Compliance

**Implemented:**
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators on interactive elements
- Sufficient color contrast (4.5:1 minimum)
- Alt text for all images
- Proper heading hierarchy (H1 → H6)

**Language Support:**
- `lang` attribute updated dynamically
- Georgian character support
- RTL support ready (if needed in future)

**Motion Sensitivity:**
- Respects `prefers-reduced-motion`
- Option to disable animations

**Screen Reader Support:**
- Descriptive link text
- Form labels properly associated
- Status messages announced
- Logical content order

---

## SEO Implementation

### On-Page SEO

**Meta Tags:**
```html
<title>Niniverse</title>
<meta name="description" content="Niniverse - A calm, inspiring space where beauty meets meaning. Visual education, creative storytelling, and authentic inspiration from Georgian visual storyteller Nini Chaladzè.">
```

**Open Graph:**
```html
<meta property="og:title" content="Niniverse">
<meta property="og:description" content="Visual education and creative storytelling from Nini Chaladzè">
<meta property="og:type" content="website">
<meta property="og:url" content="[site-url]">
```

**Structured Data (Future):**
- Person schema for Nini Chaladzè
- Organization schema for Niniverse
- BreadcrumbList for navigation

### Technical SEO

- **Sitemap**: Auto-generated (future)
- **Robots.txt**: Configured for GitHub Pages
- **Canonical URLs**: Implemented
- **Mobile-Friendly**: Fully responsive
- **HTTPS**: Enforced by GitHub Pages
- **Page Speed**: Optimized for Core Web Vitals

### Content SEO

- **Keyword Strategy**: Visual education, Georgian storyteller, creative education
- **Heading Structure**: Proper H1-H6 hierarchy
- **Internal Linking**: Cross-section navigation
- **Image Optimization**: Descriptive filenames and alt text

---

## Future Enhancements

### Short-Term (Next 3 Months)

1. **Blog Section**
   - Markdown-based blog posts
   - Category filtering
   - Search functionality
   - RSS feed

2. **Newsletter Integration**
   - Email collection form
   - Mailchimp or ConvertKit integration
   - Welcome email sequence

3. **Enhanced Portfolio**
   - Video support
   - Case studies with detailed breakdowns
   - Client testimonials
   - Before/after comparisons

4. **Analytics Integration**
   - Google Analytics 4
   - Privacy-focused analytics (Plausible or Fathom)
   - Event tracking for key interactions

### Mid-Term (3-6 Months)

1. **CMS Integration**
   - Forestry, Netlify CMS, or TinaCMS
   - Visual editing interface
   - Preview before publish
   - Media library

2. **Course Platform**
   - Embedded course content
   - Video lessons
   - Downloadable resources
   - Progress tracking

3. **Booking System**
   - 1-on-1 consultation scheduling
   - Workshop registration
   - Calendar integration (Calendly or Cal.com)

4. **Enhanced Interactivity**
   - Interactive portfolio filters with animations
   - 3D elements or parallax effects
   - Micro-interactions on hover/click
   - Scroll-based storytelling

### Long-Term (6-12 Months)

1. **Student Portal**
   - Member login
   - Course access
   - Progress dashboard
   - Community features

2. **E-Commerce**
   - Digital product sales
   - Course purchases
   - Workshop tickets
   - Stripe integration

3. **Community Features**
   - Forum or discussion board
   - Student showcase gallery
   - Success stories section
   - Collaborative projects

4. **Advanced Personalization**
   - Content recommendations
   - Personalized learning paths
   - Saved favorites
   - User preferences

---

## Maintenance and Support

### Regular Maintenance Tasks

**Weekly:**
- Monitor site uptime
- Check for broken links
- Review analytics data
- Respond to contact form submissions

**Monthly:**
- Update content as needed
- Review and respond to feedback
- Check browser compatibility
- Test mobile experience
- Security dependency updates

**Quarterly:**
- Performance audit
- SEO review and optimization
- Accessibility audit
- Backup verification
- Content strategy review

### Dependency Updates

```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Test after updates
npm run dev
./build-github.sh
```

### Backup Strategy

- **Code**: Version controlled in GitHub (automatic)
- **Content**: JSON files in repository (versioned)
- **Images**: Stored in repository (versioned)
- **Build Output**: Regenerated from source (not critical)

### Troubleshooting Guide

**Issue: Site not updating after push**
- Solution: Clear browser cache, wait 2-3 minutes for GitHub Pages

**Issue: Images not loading**
- Solution: Verify relative paths, check GitHub Pages base URL

**Issue: Language toggle not working**
- Solution: Check localStorage, verify JSON file loading

**Issue: Dark mode not persisting**
- Solution: Check localStorage, verify ThemeProvider implementation

### Support Contacts

- **Technical Issues**: [Developer contact]
- **Content Updates**: GitHub repository issues
- **Hosting**: GitHub Pages documentation
- **Design Questions**: design_guidelines.md reference

---

## Appendix

### File Size Reference

**Assets:**
- Hero Image: ~65 KB
- Workspace Image: ~150 KB
- Portfolio Images: ~200-290 KB each
- Total Assets: ~2 MB

**Code:**
- HTML: ~1.3 KB
- CSS: ~75 KB (12 KB gzipped)
- JavaScript: ~310 KB (99 KB gzipped)

### Browser Console Commands

```javascript
// Check current language
localStorage.getItem('language')

// Check current theme
localStorage.getItem('theme')

// Clear all preferences
localStorage.clear()
```

### Useful Links

- **GitHub Repository**: [Insert URL]
- **Live Site**: [Insert GitHub Pages URL]
- **Design Guidelines**: See `design_guidelines.md`
- **Project Documentation**: See `replit.md`
- **Deployment Guide**: See `README.md`

---

**Document Version History:**

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | November 4, 2025 | Initial technical specification | Replit Agent |

---

**End of Technical Specification Document**
