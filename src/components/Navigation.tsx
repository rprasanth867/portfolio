"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navItems, personalInfo } from "@/lib/data";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!mobileOpen) return;
      if (event.key === "Escape") {
        setMobileOpen(false);
        burgerRef.current?.focus();
      } else if (event.key === "Tab") {
        const focusable = Array.from(document.querySelectorAll<HTMLElement>("#navLinks a, #navBurger"));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 761px)");
    const closeOnDesktop = () => setMobileOpen(false);
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-locked", mobileOpen);
    return () => document.body.classList.remove("is-locked");
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.querySelector<HTMLElement>("#navLinks a")?.focus();
    }
  }, [mobileOpen]);

  useEffect(() => {
    const sections = navItems.map((item) => item.href).filter((href) => href.startsWith("#"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              setActiveSection(id);
            }
          }
        });
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((href) => {
      const element = document.getElementById(href.slice(1));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`} id="nav">
      <a className="nav__logo" href="#home" aria-label="Home">
        <span className="nav__logo-mark mono" aria-hidden="true">N</span>
        <span className="nav__logo-text">nikhil<span>.dev</span></span>
      </a>

      <nav className={`nav__links ${mobileOpen ? "open" : ""}`} id="navLinks" aria-label="Primary">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`${activeSection === item.href.slice(1) ? "active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <a
          href={personalInfo.resumeUrl}
          className="btn btn--ghost nav__resume"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
        >
          Résumé
          <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 17 17 7M17 7H9M17 7v8" />
          </svg>
        </a>
      </nav>

      <button
        className={`nav__backdrop ${mobileOpen ? "open" : ""}`}
        type="button"
        aria-label="Close navigation menu"
        tabIndex={-1}
        onClick={() => setMobileOpen(false)}
      />

      <button
        className={`nav__burger ${mobileOpen ? "open" : ""}`}
        id="navBurger"
        ref={burgerRef}
        aria-controls="navLinks"
        aria-expanded={mobileOpen}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileOpen((isOpen) => !isOpen)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </header>
  );
}
