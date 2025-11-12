import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../..');

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif'];
const WEBP_QUALITY = 85; // Quality setting for WebP (0-100)

async function findImages(dir, imageList = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== 'dist') {
      await findImages(fullPath, imageList);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        imageList.push(fullPath);
      }
    }
  }

  return imageList;
}

async function convertToWebP(imagePath) {
  const parsedPath = path.parse(imagePath);
  const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

  try {
    // Check if WebP already exists
    try {
      await fs.access(webpPath);
      console.log(`⏭️  Skipping ${path.relative(projectRoot, imagePath)} (WebP already exists)`);
      return { success: true, skipped: true };
    } catch {
      // WebP doesn't exist, proceed with conversion
    }

    // Convert to WebP
    await sharp(imagePath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(webpPath);

    const originalStats = await fs.stat(imagePath);
    const webpStats = await fs.stat(webpPath);
    const savingsPercent = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);

    console.log(`✅ Converted ${path.relative(projectRoot, imagePath)}`);
    console.log(`   Original: ${(originalStats.size / 1024).toFixed(1)} KB → WebP: ${(webpStats.size / 1024).toFixed(1)} KB (${savingsPercent}% smaller)`);

    return {
      success: true,
      originalSize: originalStats.size,
      webpSize: webpStats.size,
      skipped: false
    };
  } catch (error) {
    console.error(`❌ Failed to convert ${path.relative(projectRoot, imagePath)}: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('🔍 Scanning for images...\n');

  const images = await findImages(projectRoot);
  console.log(`Found ${images.length} image(s) to process\n`);

  if (images.length === 0) {
    console.log('No images found to convert.');
    return;
  }

  let converted = 0;
  let skipped = 0;
  let failed = 0;
  let totalOriginalSize = 0;
  let totalWebpSize = 0;

  for (const imagePath of images) {
    const result = await convertToWebP(imagePath);
    if (result.success) {
      if (result.skipped) {
        skipped++;
      } else {
        converted++;
        totalOriginalSize += result.originalSize;
        totalWebpSize += result.webpSize;
      }
    } else {
      failed++;
    }
  }

  console.log('\n📊 Summary:');
  console.log(`   ✅ Converted: ${converted}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   ❌ Failed: ${failed}`);

  if (converted > 0) {
    const totalSavings = ((1 - totalWebpSize / totalOriginalSize) * 100).toFixed(1);
    console.log(`   💾 Total size reduction: ${((totalOriginalSize - totalWebpSize) / 1024).toFixed(1)} KB (${totalSavings}%)`);
  }

  console.log('\n✨ WebP conversion complete!');
}

main().catch(console.error);
