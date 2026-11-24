"use client";

import { useEffect, useRef } from "react";
import { personalInfo } from "@/lib/data";
import TypedText from "./TypedText";

export default function Hero() {
  const heroCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = heroCardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <p className="hero__eyebrow reveal in">
          <span className="pulse" aria-hidden="true" />
          <span>Available for new opportunities</span>
        </p>

        <h1 id="hero-title" className="hero__title reveal in">
          <span className="hero__name-prefix">{personalInfo.namePrefix}</span>
          <span className="line">
            <span className="word">{personalInfo.firstName}</span>{" "}<span className="word grad">{personalInfo.lastName}</span>
          </span>
        </h1>

        <p className="hero__role mono reveal in">
          <span className="mono">{'>'}</span> <TypedText /><span className="caret" aria-hidden="true">_</span>
        </p>

        <p className="hero__blurb reveal in">{personalInfo.tagline}</p>

        <div className="hero__cta reveal in">
          <a href="#stack" className="btn btn--primary magnetic">
            View my stack
            <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href={personalInfo.resumeUrl} className="btn btn--ghost magnetic" download={personalInfo.resumeFileName}>
            Download Resume
            <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 4v12M6 12l6 6 6-6M4 20h16" />
            </svg>
          </a>
        </div>

        <ul className="hero__socials reveal in" role="list" aria-label="Social links">
          <li>
            <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" role="listitem" aria-label="GitHub">
              <svg className="ico ico--fill" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.57-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" role="listitem" aria-label="LinkedIn">
              <svg className="ico ico--fill" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.4c0-1.29-.02-2.95-1.9-2.95-1.9 0-2.19 1.4-2.19 2.85V21h-4z" />
              </svg>
            </a>
          </li>
          <li>
            <a href={personalInfo.emailUrl} role="listitem" aria-label="Email">
              <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 6h18v12H3z" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </li>
          <li className="hero__socials-loc"><span className="mono">{personalInfo.location}</span></li>
        </ul>
      </div>

      <div className="hero__visual reveal in" aria-hidden="true">
        <div className="hero__card" ref={heroCardRef}>
          <div className="hero__card-glow" aria-hidden="true" />
          <div className="term" role="img" aria-label="Terminal showing a technical stack summary starting up">
            <div className="term__bar">
              <span className="dot dot--r" aria-hidden="true" />
              <span className="dot dot--y" aria-hidden="true" />
              <span className="dot dot--g" aria-hidden="true" />
              <span className="term__title mono">{personalInfo.brandName}@{personalInfo.city.toLowerCase()} — services</span>
            </div>
            <div className="term__body mono">
              <div><span className="t-p">$</span> npm run start:prod</div>
              <div className="t-dim">[app] bootstrapping services…</div>
              <div><span className="t-ok">✓</span> react-native <span className="t-dim">design system · 30+ components</span></div>
              <div><span className="t-ok">✓</span> nextjs       <span className="t-dim">SSR · SEO optimized</span></div>
              <div><span className="t-ok">✓</span> nodejs       <span className="t-dim">REST APIs · Express · MySQL</span></div>
              <div><span className="t-ok">✓</span> websocket    <span className="t-dim">real-time · XMPP · SSE</span></div>
              <div><span className="t-ok">✓</span> mongodb      <span className="t-dim">document store · indexes ok</span></div>
              <div><span className="t-ok">✓</span> redis        <span className="t-dim">cache · session store</span></div>
              <div><span className="t-ok">✓</span> docker       <span className="t-dim">containerized · CI/CD</span></div>
              <div aria-hidden="true"> </div>
              <div><span className="t-key">startup</span> <span className="t-dim">35% faster · 5+ enterprise apps</span></div>
              <div aria-hidden="true"> </div>
              <div><span className="t-ok">▶ ready</span> <span className="t-dim">on :4000 — 0 errors</span><span className="term__cursor" aria-hidden="true" /></div>
            </div>
          </div>
          <div className="hero__card-frame" aria-hidden="true" />
          <div className="hero__chip hero__chip--1"><b>4+</b> yrs shipping</div>
          <div className="hero__chip hero__chip--2"><b>35%</b> faster startup</div>
        </div>
        <a href="#top" className="hero__scroll" aria-hidden="true">
          <span />
        </a>
      </div>
    </section>
  );
}
