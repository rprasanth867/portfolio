import { Suspense } from "react";
import { Metadata } from "next";
import NotesClient from "./NotesClient";

export const metadata: Metadata = {
  title: "Notes & Learning | Prasanth Rudrakshula",
  description: "Technical notes, learning resources, and documentation covering React, Next.js, React Native, Node.js, JavaScript, DSA, and more.",
};

export default function NotesPage() {
  return (
    <section className="section" id="notes">
      <div className="section__head">
        <span className="section__index mono">07</span>
        <h2 className="section__title">Notes & Learning</h2>
        <div className="section__rule" />
      </div>
      <Suspense fallback={<NotesSkeleton />}>
        <NotesClient />
      </Suspense>
    </section>
  );
}

function NotesSkeleton() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "40px" }}>
      <div style={{ padding: "20px" }}>
        <div style={{ height: "400px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)" }} />
      </div>
      <div style={{ padding: "20px" }}>
        <div style={{ height: "200px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)" }} />
        <div style={{ height: "300px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)", marginTop: "20px" }} />
      </div>
    </div>
  );
}