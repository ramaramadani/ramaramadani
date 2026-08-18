"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./About.module.css";

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="section">
      <div className="container" ref={ref}>
        <div className={`${styles.grid} ${isVisible ? "visible" : ""}`}>
          <div className={`${styles.left} reveal ${isVisible ? "visible" : ""}`}>
            <span className="sectionLabel">About Me</span>
            <h2 className="sectionTitle">Passionate About Building<br/>Impactful Solutions</h2>
            <p className={styles.bio}>
              I&apos;m Rama Ramadani, an Informatics Engineering student at
              <strong> Politeknik Negeri Batam</strong> with a strong academic record
              (GPA 3.90/4.00, Cum Laude). I specialize in full-stack web development
              using Laravel, Django, and Next.js, as well as embedded IoT systems
              with Arduino and ESP32.
            </p>
            <p className={styles.bio}>
              Over 4 consecutive semesters, I&apos;ve been appointed as Project Leader,
              consistently guiding teams through the complete Software Development
              Life Cycle — from requirement analysis and system design to implementation,
              testing, documentation, and production deployment.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Full-Stack Development</span>
              <span className={styles.tag}>IoT Systems</span>
              <span className={styles.tag}>Project Leadership</span>
              <span className={styles.tag}>REST API Design</span>
              <span className={styles.tag}>Database Architecture</span>
              <span className={styles.tag}>Technical Documentation</span>
            </div>
          </div>

          <div className={`${styles.right} reveal ${isVisible ? "visible" : ""}`}>
            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDot} />
                <span>quick_info.json</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.codeLine}>
                  <span className={styles.codeKey}>&quot;name&quot;</span>
                  <span className={styles.codePunc}>: </span>
                  <span className={styles.codeValue}>&quot;Rama Ramadani&quot;</span>
                  <span className={styles.codePunc}>,</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKey}>&quot;education&quot;</span>
                  <span className={styles.codePunc}>: </span>
                  <span className={styles.codeValue}>&quot;D3 Teknik Informatika&quot;</span>
                  <span className={styles.codePunc}>,</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKey}>&quot;campus&quot;</span>
                  <span className={styles.codePunc}>: </span>
                  <span className={styles.codeValue}>&quot;Politeknik Negeri Batam&quot;</span>
                  <span className={styles.codePunc}>,</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKey}>&quot;gpa&quot;</span>
                  <span className={styles.codePunc}>: </span>
                  <span className={styles.codeNum}>3.90</span>
                  <span className={styles.codePunc}>,</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKey}>&quot;semester&quot;</span>
                  <span className={styles.codePunc}>: </span>
                  <span className={styles.codeNum}>4</span>
                  <span className={styles.codePunc}>,</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKey}>&quot;location&quot;</span>
                  <span className={styles.codePunc}>: </span>
                  <span className={styles.codeValue}>&quot;Batam, Indonesia&quot;</span>
                  <span className={styles.codePunc}>,</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKey}>&quot;leadership&quot;</span>
                  <span className={styles.codePunc}>: </span>
                  <span className={styles.codeValue}>&quot;4x Project Leader&quot;</span>
                </div>
              </div>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>🎓</span>
                <span className={styles.statValue}>3.90</span>
                <span className={styles.statLabel}>GPA Score</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>🚀</span>
                <span className={styles.statValue}>4+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>👨‍💻</span>
                <span className={styles.statValue}>4×</span>
                <span className={styles.statLabel}>Team Lead</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>⚡</span>
                <span className={styles.statValue}>6+</span>
                <span className={styles.statLabel}>Tech Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
