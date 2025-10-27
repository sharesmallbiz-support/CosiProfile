# Nini | Niniverse - Bilingual Profile Website

A beautiful, modern bilingual static profile website for **Nini Chaladzè**, Georgian visual storyteller and educator showcasing her **Niniverse** brand focused on visual education, creative storytelling, and authentic inspiration.

## 🌟 Features

- 🌍 **Bilingual Support** - Seamless English/Georgian language switching
- 🎨 **Beautiful Design** - Warm terracotta and sage green Georgian-inspired palette
- 📱 **Fully Responsive** - Perfect on all devices
- 🌓 **Dark/Light Theme** - Complete theme support
- 🖼️ **Portfolio Gallery** - Masonry layout with lightbox modal
- ✉️ **Contact Form** - Professional contact section
- 🏷️ **Build Info** - Footer displays version and build date

## 🚀 GitHub Pages Deployment

### One-Time Setup

1. **Build the static site**:
   ```bash
   ./build-github.sh
   ```
   This creates the `/docs` folder with all static files using **relative paths** (required for GitHub Pages subdirectory deployment).

2. **Commit and push to GitHub**:
   ```bash
   git add docs/
   git commit -m "Build static site for GitHub Pages"
   git push origin main
   ```

3. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings > Pages**
   - Under "Source", select **Deploy from a branch**
   - Select branch: **main**
   - Select folder: **/docs**
   - Click **Save**

4. **Your site will be live** at: `https://[your-username].github.io/[repo-name]`
   
   Note: The site uses hash-based routing (URLs will have `#/` like `https://your-site.github.io/niniverse/#/`). This ensures the app works correctly on GitHub Pages subdirectories.

### Updating Content

Edit the language files and rebuild:

1. Edit content in:
   - `client/public/en.json` (English)
   - `client/public/ka.json` (Georgian)

2. Rebuild:
   ```bash
   ./build-github.sh
   ```

3. Commit and push:
   ```bash
   git add docs/
   git commit -m "Update content"
   git push origin main
   ```

Changes will be live in 1-2 minutes!

## 📝 Editing Content via GitHub Mobile

You can edit content directly from the GitHub mobile app:

1. Open GitHub app and navigate to this repository
2. Open either:
   - `client/public/en.json` (English content)
   - `client/public/ka.json` (Georgian content)
3. Tap **Edit** (pencil icon)
4. Make your changes
5. Commit changes

After committing, run `./build-github.sh` on your computer and push to deploy.

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:5000

## 📁 Project Structure

```
├── client/
│   ├── public/
│   │   ├── en.json          # English content
│   │   └── ka.json          # Georgian content
│   └── src/
│       ├── components/      # React components
│       ├── contexts/        # Language context
│       └── pages/           # Page layouts
├── docs/                    # Built static files (GitHub Pages)
├── build-github.sh          # Build script for GitHub Pages
└── README.md
```

## 🎨 Design System

- **Primary Color**: Warm terracotta (#D47855)
- **Accent Color**: Sage green (#6D9B7E)
- **Typography**: Playfair Display (headings) + Inter (body)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ in Georgia 🇬🇪
