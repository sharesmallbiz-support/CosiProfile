#!/bin/bash
# Build script for GitHub Pages deployment
# This builds the static site and outputs to /docs folder

echo "🔨 Building static site for GitHub Pages..."

# Run vite build with GitHub-specific config (uses relative paths)
vite build --config vite.config.github.ts

# Remove old docs folder if it exists
rm -rf docs

# Copy built files to docs folder
cp -r dist/public docs

echo "✅ Build complete! Static files are in /docs folder"
echo "📝 Next steps:"
echo "   1. Commit the /docs folder to your repository"
echo "   2. Go to GitHub repository Settings > Pages"
echo "   3. Set source to 'Deploy from a branch'"
echo "   4. Select 'main' branch and '/docs' folder"
echo "   5. Save and your site will be live!"
