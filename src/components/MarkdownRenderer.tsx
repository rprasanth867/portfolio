"use client";

import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const components = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      {...props}
      className="markdown-h1 scroll-mt-24"
      style={{
        fontSize: "clamp(2rem, 5vw, 3rem)",
        fontWeight: 800,
        letterSpacing: "-0.03em",
        lineHeight: 1.1,
        marginBottom: "1rem",
        color: "var(--text)",
      }}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className="markdown-h2 scroll-mt-24"
      style={{
        fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
        fontWeight: 700,
        letterSpacing: "-0.02em",
        lineHeight: 1.2,
        marginTop: "2.5rem",
        marginBottom: "1rem",
        color: "var(--text)",
        paddingBottom: "0.5rem",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      className="markdown-h3 scroll-mt-24"
      style={{
        fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
        fontWeight: 600,
        letterSpacing: "-0.01em",
        lineHeight: 1.3,
        marginTop: "2rem",
        marginBottom: "0.75rem",
        color: "var(--text)",
      }}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      {...props}
      className="markdown-h4 scroll-mt-24"
      style={{
        fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
        fontWeight: 600,
        lineHeight: 1.4,
        marginTop: "1.5rem",
        marginBottom: "0.5rem",
        color: "var(--text)",
      }}
    >
      {children}
    </h4>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      {...props}
      style={{
        marginBottom: "1rem",
        lineHeight: 1.75,
        color: "var(--text-soft)",
        fontSize: "1.05rem",
      }}
    >
      {children}
    </p>
  ),
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      {...props}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      style={{
        color: "var(--cyan)",
        textDecoration: "underline",
        textUnderlineOffset: "2px",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--violet)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--cyan)";
      }}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      {...props}
      style={{
        marginBottom: "1rem",
        paddingLeft: "1.5rem",
        listStyleType: "disc",
      }}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      {...props}
      style={{
        marginBottom: "1rem",
        paddingLeft: "1.5rem",
        listStyleType: "decimal",
      }}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      {...props}
      style={{
        marginBottom: "0.5rem",
        lineHeight: 1.75,
        color: "var(--text-soft)",
      }}
    >
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: React.QuoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      style={{
        margin: "1.5rem 0",
        padding: "1rem 1.5rem",
        borderLeft: "4px solid var(--violet)",
        background: "var(--surface)",
        borderRadius: "0 var(--radius) var(--radius) 0",
        fontStyle: "italic",
        color: "var(--text-soft)",
      }}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      {...props}
      style={{
        fontFamily: "var(--font-mono), monospace",
        fontSize: "0.9em",
        background: "var(--surface)",
        padding: "0.2em 0.4em",
        borderRadius: "4px",
        color: "var(--pink)",
        border: "1px solid var(--border)",
      }}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      {...props}
      style={{
        margin: "1.5rem 0",
        padding: "1.5rem",
        background: "rgba(5, 6, 10, 0.9)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        overflow: "auto",
        fontFamily: "var(--font-mono), monospace",
        fontSize: "0.85rem",
        lineHeight: 1.7,
      }}
    >
      {children}
    </pre>
  ),
  table: ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
      <table
        {...props}
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.9rem",
        }}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead
      {...props}
      style={{
        background: "var(--surface)",
        borderBottom: "2px solid var(--border-strong)",
      }}
    >
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props}>{children}</tbody>
  ),
  tr: ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      {...props}
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      {children}
    </tr>
  ),
  th: ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      {...props}
      style={{
        padding: "0.75rem 1rem",
        textAlign: "left",
        fontWeight: 600,
        color: "var(--text)",
        background: "var(--surface)",
        borderBottom: "2px solid var(--border-strong)",
      }}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      {...props}
      style={{
        padding: "0.75rem 1rem",
        color: "var(--text-soft)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {children}
    </td>
  ),
  img: ({ src, alt, title, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <figure style={{ margin: "2rem 0", textAlign: "center" }}>
      <img
        src={src}
        alt={alt}
        title={title}
        {...props}
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "var(--radius)",
          border: "1px solid var(--border)",
          boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.5)",
        }}
        loading="lazy"
      />
      {(alt || title) && (
        <figcaption
          style={{
            marginTop: "0.75rem",
            fontSize: "0.85rem",
            color: "var(--text-faint)",
            fontStyle: "italic",
          }}
        >
          {alt || title}
        </figcaption>
      )}
    </figure>
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      {...props}
      style={{
        margin: "2rem 0",
        border: "none",
        borderTop: "1px solid var(--border)",
        width: "100%",
      }}
    />
  ),
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} style={{ color: "var(--text)", fontWeight: 600 }}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em {...props} style={{ fontStyle: "italic", color: "var(--text-soft)" }}>
      {children}
    </em>
  ),
  del: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <del
      {...props}
      style={{
        textDecoration: "line-through",
        color: "var(--text-faint)",
      }}
    >
      {children}
    </del>
  ),
  details: ({ children, ...props }: React.DetailsHTMLAttributes<HTMLDetailsElement>) => (
    <details
      {...props}
      style={{
        margin: "1rem 0",
        padding: "1rem",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
      }}
    >
      {children}
    </details>
  ),
  summary: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <summary
      {...props}
      style={{
        cursor: "pointer",
        fontWeight: 600,
        color: "var(--text)",
        listStyle: "none",
      }}
    >
      {children}
    </summary>
  ),
};

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  return (
    <div className={`markdown-content ${className}`} style={{ color: "var(--text)" }}>
      <Markdown
        components={components}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
      >
        {content}
      </Markdown>
    </div>
  );
}