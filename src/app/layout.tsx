import type { Metadata } from "next";
import { personalInfo } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: `${personalInfo.firstName} ${personalInfo.lastName}`,
  description: personalInfo.tagline,
  keywords: ["Full Stack Engineer", "Node.js", "React", "Next.js", "TypeScript", "RabbitMQ", "Web3", "FIX Protocol", "Real-time Systems"],
  authors: [{ name: personalInfo.name }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: `${personalInfo.firstName} ${personalInfo.lastName}`,
    description: personalInfo.tagline,
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
            <div className="preloader__name mono">{personalInfo.brandName}{personalInfo.brandDomain}</div>
            <div className="preloader__bar"><i /></div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
