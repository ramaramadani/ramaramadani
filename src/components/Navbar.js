"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo} onClick={(e) => handleClick(e, "#home")}>
          <span className={styles.logoBracket}>&lt;</span>
          <span className={styles.logoAccent}>R</span>
          <span className={styles.logoBracket}> /&gt;</span>
        </a>

        <div className={`${styles.links} ${mobileOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.link} ${activeSection === link.href.slice(1) ? styles.active : ""}`}
              onClick={(e) => handleClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/CV-Rama-Ramadani.pdf"
            className={styles.resumeBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <button
          className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
