import fs from "fs";
import path from "path";
import matter from "gray-matter";

const LEARN_DIR = path.join(process.cwd(), "learn");

export interface MarkdownFile {
  slug: string;
  title: string;
  content: string;
  frontmatter: Record<string, unknown>;
  category: string;
  subcategory?: string;
}

export interface CategoryNode {
  name: string;
  path: string;
  type: "category" | "file";
  children?: CategoryNode[];
  slug?: string;
}

function getAllFiles(dir: string, baseDir: string = LEARN_DIR): CategoryNode[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const nodes: CategoryNode[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);

    if (entry.isDirectory()) {
      const children = getAllFiles(fullPath, baseDir);
      if (children.length > 0) {
        nodes.push({
          name: entry.name,
          path: relativePath,
          type: "category",
          children,
        });
      }
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const slug = relativePath.replace(/\.md$/, "").replace(/\\/g, "/");
      nodes.push({
        name: entry.name.replace(/\.md$/, ""),
        path: relativePath,
        type: "file",
        slug,
      });
    }
  }

  return nodes.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === "category" ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });
}

export function getLearnStructure(): CategoryNode[] {
  if (!fs.existsSync(LEARN_DIR)) {
    return [];
  }
  return getAllFiles(LEARN_DIR);
}

export function getMarkdownFile(slug: string): MarkdownFile | null {
  const filePath = path.join(LEARN_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);

  const pathParts = slug.split("/");
  const category = pathParts[0];
  const subcategory = pathParts.length > 1 ? pathParts.slice(0, -1).join("/") : undefined;

  return {
    slug,
    title: (frontmatter.title as string) || pathParts[pathParts.length - 1].replace(/-/g, " "),
    content,
    frontmatter,
    category,
    subcategory,
  };
}

export function getAllMarkdownFiles(): MarkdownFile[] {
  const structure = getLearnStructure();
  const files: MarkdownFile[] = [];

  function collectFiles(nodes: CategoryNode[]) {
    for (const node of nodes) {
      if (node.type === "file" && node.slug) {
        const file = getMarkdownFile(node.slug);
        if (file) {
          files.push(file);
        }
      } else if (node.children) {
        collectFiles(node.children);
      }
    }
  }

  collectFiles(structure);
  return files;
}

export function getFilesByCategory(category: string): MarkdownFile[] {
  const categoryDir = path.join(LEARN_DIR, category);

  if (!fs.existsSync(categoryDir)) {
    return [];
  }

  const entries = fs.readdirSync(categoryDir, { withFileTypes: true });
  const files: MarkdownFile[] = [];

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(".md")) {
      const slug = `${category}/${entry.name.replace(/\.md$/, "")}`;
      const file = getMarkdownFile(slug);
      if (file) {
        files.push(file);
      }
    } else if (entry.isDirectory()) {
      const subFiles = getFilesByCategory(`${category}/${entry.name}`);
      files.push(...subFiles);
    }
  }

  return files;
}

export function getCategories(): string[] {
  if (!fs.existsSync(LEARN_DIR)) {
    return [];
  }
  return fs.readdirSync(LEARN_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}