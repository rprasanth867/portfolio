#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const LEARN_DIR = path.join(__dirname, '../learn');
const PUBLIC_ASSETS_DIR = path.join(__dirname, '../public/learn/assets');
const ROOT_ASSETS_DIR = path.join(LEARN_DIR, 'assets');

function copyAssets() {
  // Ensure directories exist
  if (!fs.existsSync(PUBLIC_ASSETS_DIR)) {
    fs.mkdirSync(PUBLIC_ASSETS_DIR, { recursive: true });
  }
  if (!fs.existsSync(ROOT_ASSETS_DIR)) {
    fs.mkdirSync(ROOT_ASSETS_DIR, { recursive: true });
  }

  let copiedToPublic = 0;
  let copiedToRoot = 0;

  function copyFromDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === 'assets') {
          // Copy all files from this assets folder
          const assetFiles = fs.readdirSync(fullPath);
          for (const assetFile of assetFiles) {
            const src = path.join(fullPath, assetFile);

            // 1. Copy to public/learn/assets/ (for production)
            const publicDest = path.join(PUBLIC_ASSETS_DIR, assetFile);
            if (!fs.existsSync(publicDest) || fs.statSync(src).mtime > fs.statSync(publicDest).mtime) {
              fs.copyFileSync(src, publicDest);
              console.log(`Public: ${path.relative(LEARN_DIR, src)} -> public/learn/assets/${assetFile}`);
              copiedToPublic++;
            }

            // 2. Copy to learn/assets/ at root (single source of truth for VS Code preview)
            const rootDest = path.join(ROOT_ASSETS_DIR, assetFile);
            if (!fs.existsSync(rootDest) || fs.statSync(src).mtime > fs.statSync(rootDest).mtime) {
              fs.copyFileSync(src, rootDest);
              console.log(`Root: ${path.relative(LEARN_DIR, src)} -> learn/assets/${assetFile}`);
              copiedToRoot++;
            }
          }
        } else {
          copyFromDir(fullPath);
        }
      }
    }
  }

  copyFromDir(LEARN_DIR);
  console.log(`\nTotal copied to public: ${copiedToPublic}`);
  console.log(`Total copied to root learn/assets: ${copiedToRoot}`);
}

copyAssets();
