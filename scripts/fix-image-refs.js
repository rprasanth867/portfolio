#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const LEARN_DIR = path.join(__dirname, '../learn');

function fixImageRefs() {
  function processDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        processDir(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const relativePath = path.relative(LEARN_DIR, fullPath);
        const depth = relativePath.split(path.sep).length - 1;
        
        let newContent = content;
        
        // Calculate the correct relative path to root assets
        let prefix = '';
        if (depth === 0) {
          prefix = 'assets/';
        } else if (depth === 1) {
          prefix = '../assets/';
        } else if (depth === 2) {
          prefix = '../../assets/';
        } else {
          prefix = '../'.repeat(depth) + 'assets/';
        }

        // Fix markdown images: ![alt](src)
        newContent = newContent.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
          // Skip absolute URLs, data URIs
          if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
            return match;
          }
          
          // Extract just the filename
          const filename = src.split('/').pop();
          
          // Skip if already correct
          if (src === `${prefix}${filename}` || src === `../assets/${filename}` || src === `assets/${filename}`) {
            return match;
          }
          
          return `![${alt}](${prefix}${filename})`;
        });

        // Fix HTML img tags: <img src="...">
        newContent = newContent.replace(/<img\s+([^>]*?)src="([^"]+)"([^>]*)>/gi, (match, before, src, after) => {
          if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
            return match;
          }
          
          const filename = src.split('/').pop();
          if (src === `${prefix}${filename}`) {
            return match;
          }
          
          return `<img ${before}src="${prefix}${filename}"${after}>`;
        });

        if (newContent !== content) {
          fs.writeFileSync(fullPath, newContent, 'utf-8');
          console.log(`Fixed: ${relativePath}`);
        }
      }
    }
  }

  processDir(LEARN_DIR);
  console.log('\nDone fixing image references');
}

fixImageRefs();
