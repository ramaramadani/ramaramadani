"use client";
import { useState, useEffect } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <a href="#home" className={styles.logo}>
            <span className={styles.logoBracket}>&lt;</span>
            <span className={styles.logoAccent}>R</span>
            <span className={styles.logoBracket}> /&gt;</span>
          </a>
          <p className={styles.tagline}>
            Full-Stack Developer & IoT Engineer based in Batam, Indonesia.
            Building reliable digital solutions from hardware to software.
          </p>
        </div>

        <div className={styles.center}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <nav className={styles.footerLinks}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className={styles.right}>
          <h4 className={styles.colTitle}>Connect</h4>
          <div className={styles.connectLinks}>
            <a href="mailto:ramaramadanipbl@gmail.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
            <a href="https://linkedin.com/in/rama-ramadani-865291334" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/ramaramadani" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://instagram.com/ramaramadaniii" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span className={styles.copy}>
            &copy; {new Date().getFullYear()} Rama Ramadani. All rights reserved.
          </span>
          <span className={styles.built}>
            Built with Next.js & passion.
          </span>
        </div>
      </div>

      <button
        className={`${styles.topBtn} ${showTop ? styles.topBtnVisible : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </footer>
  );
}
