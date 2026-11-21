"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      document.getElementById("preloader")?.classList.add("done");
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cursorGlow = cursorGlowRef.current;
    const scrollProgress = scrollProgressRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorGlow) {
        cursorGlow.style.left = `${e.clientX - 170}px`;
        cursorGlow.style.top = `${e.clientY - 170}px`;
        cursorGlow.classList.add("on");
      }
    };

    const handleScroll = () => {
      if (scrollProgress) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        scrollProgress.style.width = `${scrollPercent * 100}%`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    root.classList.add("js-enabled");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      root.classList.remove("js-enabled");
    };
  }, []);

  return (
    <>
      <div className="bg-aurora" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />
      <div className="cursor-glow" ref={cursorGlowRef} aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true">
        <span ref={scrollProgressRef} />
      </div>
    </>
  );
}
