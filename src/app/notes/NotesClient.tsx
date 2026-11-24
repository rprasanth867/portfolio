"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

interface CategoryNode {
  name: string;
  path: string;
  type: "category" | "file";
  children?: CategoryNode[];
  slug?: string;
}

interface MarkdownFile {
  slug: string;
  title: string;
  content: string;
  frontmatter: Record<string, unknown>;
  category: string;
  subcategory?: string;
}

function NotesSidebar({
  structure,
  currentSlug,
  onNavigate
}: {
  structure: CategoryNode[];
  currentSlug?: string;
  onNavigate: (slug: string) => void;
}) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  // Auto-expand the current file's category path
  useEffect(() => {
    if (currentSlug) {
      const parts = currentSlug.split("/");
      let path = "";
      for (let i = 0; i < parts.length - 1; i++) {
        path = path ? `${path}/${parts[i]}` : parts[i];
        setExpandedCategories((prev) => new Set([...prev, path]));
      }
    }
  }, [currentSlug]);

  const toggleCategory = (path: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  const renderNode = (node: CategoryNode, depth: number = 0) => {
    const isExpanded = expandedCategories.has(node.path);
    const isActive = node.slug === currentSlug;
    const hasChildren = node.children && node.children.length > 0;

    if (node.type === "file") {
      return (
        <a
          key={node.path}
          href={`/notes?file=${node.slug}`}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(node.slug!);
          }}
          className={`sidebar-file ${isActive ? "active" : ""}`}
          style={{
            display: "block",
            padding: `${8 + depth * 4}px 12px ${8 + depth * 4}px ${12 + depth * 16}px`,
            fontSize: "0.88rem",
            color: isActive ? "var(--cyan)" : "var(--text-soft)",
            fontWeight: isActive ? 600 : 400,
            textDecoration: "none",
            borderRadius: "8px",
            margin: "2px 8px",
            transition: "all 0.2s ease",
            background: isActive ? "var(--surface-hover)" : "transparent",
            borderLeft: isActive ? "3px solid var(--cyan)" : "3px solid transparent",
          }}
          onMouseEnter={(e) => {
            if (!isActive) {
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.background = "var(--surface)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isActive) {
              e.currentTarget.style.color = "var(--text-soft)";
              e.currentTarget.style.background = "transparent";
            }
          }}
        >
          {node.name}
        </a>
      );
    }

    return (
      <div key={node.path}>
        <button
          onClick={() => toggleCategory(node.path)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: "100%",
            padding: `${10 + depth * 2}px 12px`,
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "var(--text)",
            background: "transparent",
            border: "none",
            borderRadius: "8px",
            margin: "4px 8px 2px",
            cursor: "pointer",
            textAlign: "left",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--surface)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          <span
            style={{
              display: "inline-block",
              transition: "transform 0.2s",
              transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
              color: "var(--cyan)",
              fontSize: "0.7rem",
            }}
          >
            ▸
          </span>
          <span>{node.name}</span>
        </button>
        {isExpanded && node.children && (
          <div style={{ borderLeft: "1px solid var(--border)", marginLeft: "12px" }}>
            {node.children.map((child) => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="notes-sidebar" style={{
      padding: "20px",
      borderRight: "1px solid var(--border)",
      height: "calc(100vh - 200px)",
      overflowY: "auto",
      position: "sticky",
      top: "100px",
      background: "var(--bg-raised)",
    }}>
      <div style={{ marginBottom: "20px", paddingBottom: "16px", borderBottom: "1px solid var(--border)" }}>
        <h3 style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-faint)", marginBottom: "12px" }}>
          Learning Notes
        </h3>
        <p style={{ fontSize: "0.8rem", color: "var(--text-soft)", lineHeight: 1.5 }}>
          Technical notes and learning resources organized by topic.
        </p>
      </div>
      <div>
        {structure.map((node) => renderNode(node))}
      </div>
    </nav>
  );
}

function NotesContent({ slug }: { slug?: string }) {
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setContent("");
      setTitle("Select a note");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`/api/notes?slug=${encodeURIComponent(slug)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Note not found");
        return res.json();
      })
      .then((data) => {
        setContent(data.content);
        setTitle(data.title);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load note");
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "var(--text-soft)" }}>
        Loading note...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "var(--pink)" }}>
        {error}
      </div>
    );
  }

  if (!slug) {
    return (
      <div className="notes-welcome" style={{ padding: "60px 40px", textAlign: "center" }}>
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📚</div>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1rem", color: "var(--text)" }}>
          Welcome to Notes
        </h2>
        <p style={{ fontSize: "1.1rem", color: "var(--text-soft)", maxWidth: "600px", margin: "0 auto 2rem", lineHeight: 1.6 }}>
          Select a note from the sidebar to start reading. Notes are organized by category and cover various topics including React, Next.js, React Native, Node.js, JavaScript, DSA, and more.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
          <span style={{ padding: "8px 16px", borderRadius: "99px", background: "var(--surface)", border: "1px solid var(--border)", fontSize: "0.85rem", color: "var(--text-soft)" }}>
            React & Next.js
          </span>
          <span style={{ padding: "8px 16px", borderRadius: "99px", background: "var(--surface)", border: "1px solid var(--border)", fontSize: "0.85rem", color: "var(--text-soft)" }}>
            React Native
          </span>
          <span style={{ padding: "8px 16px", borderRadius: "99px", background: "var(--surface)", border: "1px solid var(--border)", fontSize: "0.85rem", color: "var(--text-soft)" }}>
            Node.js & JavaScript
          </span>
          <span style={{ padding: "8px 16px", borderRadius: "99px", background: "var(--surface)", border: "1px solid var(--border)", fontSize: "0.85rem", color: "var(--text-soft)" }}>
            DSA & Algorithms
          </span>
          <span style={{ padding: "8px 16px", borderRadius: "99px", background: "var(--surface)", border: "1px solid var(--border)", fontSize: "0.85rem", color: "var(--text-soft)" }}>
            Networking & More
          </span>
        </div>
      </div>
    );
  }

  return (
    <article className="notes-article" style={{ padding: "40px", maxWidth: "900px" }}>
      <header style={{ marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)" }}>
        <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.2, color: "var(--text)", marginBottom: "0.5rem" }}>
          {title}
        </h1>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.8rem", color: "var(--text-faint)" }}>
          <span>{slug}</span>
        </div>
      </header>
      <MarkdownRenderer content={content} />
    </article>
  );
}

export default function NotesClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [structure, setStructure] = useState<CategoryNode[]>([]);
  const [structureLoading, setStructureLoading] = useState(true);
  const slug = searchParams.get("file") || undefined;

  // Fetch structure on mount
  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => {
        setStructure(data.structure || []);
        setStructureLoading(false);
      })
      .catch(() => {
        setStructureLoading(false);
      });
  }, []);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      // Force re-render by updating a dummy state or just rely on searchParams change
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigate = (newSlug: string) => {
    const currentPath = typeof window !== "undefined" ? window.location.pathname : pathname || "/notes";
    const url = new URL(currentPath, window.location.origin);
    url.searchParams.set("file", newSlug);
    router.push(url.toString(), { scroll: false });
  };

  if (structureLoading) {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "0", minHeight: "calc(100vh - 120px)" }}>
        <nav className="notes-sidebar" style={{
          padding: "20px",
          borderRight: "1px solid var(--border)",
          height: "calc(100vh - 200px)",
          overflowY: "auto",
          position: "sticky",
          top: "100px",
          background: "var(--bg-raised)",
        }}>
          <div style={{ padding: "40px", textAlign: "center", color: "var(--text-soft)" }}>
            Loading...
          </div>
        </nav>
        <div style={{ padding: "40px", textAlign: "center", color: "var(--text-soft)" }}>
          Loading notes...
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "0", minHeight: "calc(100vh - 120px)" }}>
      <NotesSidebar
        structure={structure}
        currentSlug={slug}
        onNavigate={handleNavigate}
      />
      <div style={{ overflowY: "auto" }}>
        <NotesContent slug={slug} />
      </div>
    </div>
  );
}