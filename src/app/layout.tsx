import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikhil Kumar — Full Stack Engineer",
  description: "Full stack engineer with 3+ years building scalable web applications — prediction-market and trading integrations, event-driven architectures, FIX protocol pipelines, Web3 wallet flows and AI integrations that actually ship.",
  keywords: ["Full Stack Engineer", "Node.js", "React", "Next.js", "TypeScript", "RabbitMQ", "Web3", "FIX Protocol", "Real-time Systems"],
  authors: [{ name: "Nikhil Kumar" }],
  openGraph: {
    title: "Nikhil Kumar — Full Stack Engineer",
    description: "Full stack engineer with 3+ years building scalable web applications",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <div
          className="preloader"
          id="preloader"
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "grid",
            placeItems: "center",
            background: "#05060a",
          }}
        >
          <div className="preloader__inner">
            <div className="preloader__name mono">nikhil.dev</div>
            <div className="preloader__bar"><i /></div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
