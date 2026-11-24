import { NextRequest, NextResponse } from "next/server";
import { getMarkdownFile, getLearnStructure, CategoryNode } from "@/lib/markdown";

function rewriteImagePaths(content: string, slug: string): string {
  // Get the directory of the markdown file
  const slugDir = slug.includes("/") ? slug.substring(0, slug.lastIndexOf("/")) : "";

  // Helper to resolve a source path to a filename under /learn/assets/
  const resolveToAsset = (src: string): string => {
    // Skip if already absolute URL or data URI
    if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
      return src;
    }

    // Handle paths starting with /assets/ - map to /learn/assets/
    if (src.startsWith("/assets/")) {
      const filename = src.split("/").pop() || src;
      return `/learn/assets/${filename}`;
    }

    // Skip if already an absolute path (starts with / but not /assets/)
    if (src.startsWith("/")) {
      return src;
    }

    // Resolve relative path to get the filename
    let resolvedPath: string;
    if (src.startsWith("../")) {
      // Go up from slug directory
      const parts = slugDir.split("/").filter(Boolean);
      const srcParts = src.split("/");
      let upCount = 0;
      for (const part of srcParts) {
        if (part === "..") upCount++;
        else break;
      }
      const baseParts = parts.slice(0, -upCount);
      const fileParts = srcParts.slice(upCount);
      resolvedPath = [...baseParts, ...fileParts].join("/");
    } else {
      // Relative to slug directory
      resolvedPath = slugDir ? `${slugDir}/${src}` : src;
    }

    // Clean up any remaining .. or .
    const finalParts = resolvedPath.split("/").filter(Boolean);
    const cleanParts: string[] = [];
    for (const part of finalParts) {
      if (part === "..") {
        cleanParts.pop();
      } else if (part !== ".") {
        cleanParts.push(part);
      }
    }
    resolvedPath = cleanParts.join("/");

    // Extract just the filename and map to /learn/assets/
    const filename = resolvedPath.split("/").pop() || resolvedPath;
    return `/learn/assets/${filename}`;
  };

  // Rewrite markdown image syntax: ![alt](src)
  content = content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
    const resolvedSrc = resolveToAsset(src);
    if (resolvedSrc === src) return match;
    return `![${alt}](${resolvedSrc})`;
  });

  // Rewrite HTML img tags: <img ... src="..." ...>
  content = content.replace(/<img\s+([^>]*?)src="([^"]+)"([^>]*)>/gi, (match, before, src, after) => {
    const resolvedSrc = resolveToAsset(src);
    if (resolvedSrc === src) return match;
    return `<img ${before}src="${resolvedSrc}"${after}>`;
  });

  return content;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get("slug");

  if (slug) {
    const file = getMarkdownFile(slug);
    if (!file) {
      return NextResponse.json({ error: "Note not found" }, { status: 404 });
    }
    // Rewrite image paths to point to public assets
    const content = rewriteImagePaths(file.content, slug);
    return NextResponse.json({
      slug: file.slug,
      title: file.title,
      content,
      frontmatter: file.frontmatter,
      category: file.category,
      subcategory: file.subcategory,
    });
  }

  // Return the full structure
  const structure = getLearnStructure();
  return NextResponse.json({ structure });
}