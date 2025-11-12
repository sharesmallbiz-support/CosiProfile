# Image Optimization - WebP Conversion

This project includes an automated image optimization system that converts all images to WebP format for better performance.

## Overview

WebP images provide significantly smaller file sizes while maintaining quality:
- **Average size reduction**: 57.7%
- **Quality setting**: 85 (adjustable in the script)
- **Supported formats**: PNG, JPG, JPEG, GIF

## How It Works

### Automatic Conversion During Build

The build process automatically converts all images to WebP format before building the application:

```bash
npm run build
```

This runs:
1. `npm run optimize:images` - Converts images to WebP
2. `vite build` - Builds the React application
3. `esbuild` - Builds the server

### Manual Conversion

To manually convert images without building:

```bash
npm run optimize:images
```

### The Conversion Script

The conversion script (`scripts/convert-to-webp.js`) automatically:
- Scans the entire project for image files (excluding node_modules and dist)
- Converts each image to WebP format
- Skips images that already have a WebP version
- Preserves the original files
- Reports file size savings

## Adding New Images

When adding new images to the project:

1. **Add the original image** (PNG, JPG, etc.) to the appropriate directory (e.g., `attached_assets/`)

2. **Update the component** to import the `.webp` version:
   ```typescript
   import myImage from '@assets/my-image.webp';
   ```

3. **Run the optimization** (or let the build process do it):
   ```bash
   npm run optimize:images
   ```

## Configuration

To adjust the WebP quality or other settings, edit `scripts/convert-to-webp.js`:

```javascript
const WEBP_QUALITY = 85; // Change this value (0-100)
```

## Benefits

- **Faster page loads**: Smaller images load faster
- **Reduced bandwidth**: Less data transfer for users
- **Better performance**: Improved Core Web Vitals scores
- **Automatic**: Runs as part of the build process
- **Non-destructive**: Original images are preserved

## Current Status

All 24 images in the project have been converted to WebP:
- Hero images
- Portfolio images
- About section images
- Documentation assets

Total size reduction: ~4.07 MB (57.7% smaller)
