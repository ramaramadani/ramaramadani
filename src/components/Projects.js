"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Smart IoT Attendance System",
    subtitle: "RFID & Fingerprint Based",
    semester: "Semester 4 — 2026",
    role: "Project Leader",
    tech: ["PHP", "Laravel", "Arduino IDE", "RFID Module", "Fingerprint Sensor", "MySQL"],
    description:
      "Architected and led a full-stack automated attendance system integrating RFID and fingerprint hardware with a Laravel web dashboard. Real-time data sync through REST API between Arduino hardware modules and the web application.",
    highlights: [
      "Led the full team as Project Leader from inception to delivery",
      "Designed MySQL schema for attendance logs, user roles, and hardware sessions",
      "Built REST API for real-time hardware-software synchronization",
      "Conducted functional testing, authored test cases, and managed bug tracking",
    ],
    color: "#3b82f6",
    github: "https://github.com/ramaramadani/Smart-IoT-Attendance-System-Finger-RFID-",
  },
  {
    id: 2,
    title: "Smart Solar-Powered Aquaponic",
    subtitle: "IoT Monitoring & Automation",
    semester: "Semester 3 — 2025",
    role: "Project Leader",
    tech: ["Next.js", "Arduino IDE", "ESP32", "ESP8266", "Solar Panel"],
    description:
      "Led development of an IoT aquaponic system combining solar energy with automated fish-feeding, water & pH monitoring, and plant nutrition control. Built a real-time Next.js dashboard communicating with ESP32 via WebSocket and REST API.",
    highlights: [
      "Designed solar power management logic across hardware components",
      "Built Next.js real-time monitoring dashboard with ESP32 integration",
      "Authored complete SRS documentation and system flowcharts using draw.io",
      "Coordinated cross-functional team meetings and tracked task completion",
    ],
    color: "#10b981",
    github: "https://github.com/ramaramadani/Sistem-Aquaponik-Cerdas-Bertenaga-Surya-Untuk-Produksi-Pangan-Berkelanjutan",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    subtitle: "Microservices Architecture for Furniture",
    semester: "Semester 2 — 2025",
    role: "Project Leader",
    tech: ["PHP", "Laravel", "Python", "Django REST", "MySQL"],
    description:
      "Designed and led a decoupled e-commerce application with Laravel frontend and Django REST Framework backend. Features include product catalogue, cart management, order processing, and role-based access control.",
    highlights: [
      "Architected microservices with clean API contracts for independent deployment",
      "Built Laravel UI layer consuming Django REST API endpoints",
      "Applied Agile workflow with structured task coordination",
      "Delivered use case modeling and on-schedule delivery",
    ],
    color: "#8b5cf6",
    github: "https://github.com/ramaramadani/furnipark",
  },
  {
    id: 4,
    title: "Tourism Destination Guide",
    subtitle: "Full-Stack Web Application",
    semester: "Semester 1 — 2024",
    role: "Project Leader",
    tech: ["PHP", "Laravel", "MySQL", "Blade Templates"],
    description:
      "Delivered a full-stack tourism platform as inaugural Project Leader. Features include admin CMS, interactive destination listings, user reviews & ratings, built using the complete Waterfall SDLC workflow.",
    highlights: [
      "First project leadership role — managed full team coordination",
      "Built admin CMS with complete CRUD operations",
      "Authored SRS, flowcharts, and user manuals",
      "Conducted end-to-end functional testing and bug resolution",
    ],
    color: "#f59e0b",
    github: "https://github.com/ramaramadani/Tim1_Aplikasi_Panduan_Destinasi_Wisata_Bahari",
  },
];

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="sectionLabel" style={{ justifyContent: "center" }}>Portfolio</span>
          <h2 className="sectionTitle">Featured Projects</h2>
          <p className="sectionSubtitle" style={{ margin: "0 auto" }}>
            Every project led from start to finish — requirement analysis through production deployment.
          </p>
        </div>

        <div className={`${styles.grid} stagger ${isVisible ? "visible" : ""}`}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.card}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              style={{ "--project-color": project.color }}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardMeta}>
                    <span className={styles.semester}>{project.semester}</span>
                    <span className={styles.role}>{project.role}</span>
                  </div>
                  <div className={styles.cardNumber}>
                    0{project.id}
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardSubtitle}>{project.subtitle}</p>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.techRow}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techBadge}>{t}</span>
                  ))}
                </div>

                <div className={`${styles.expandable} ${activeProject === project.id ? styles.expanded : ""}`}>
                  <div className={styles.highlights}>
                    <h4 className={styles.highlightsTitle}>Key Contributions</h4>
                    <ul className={styles.highlightsList}>
                      {project.highlights.map((h, i) => (
                        <li key={i} className={styles.highlightItem}>
                          <span className={styles.highlightDot} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <button className={styles.expandBtn}>
                    {activeProject === project.id ? "Show Less" : "View Details"}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${styles.expandArrow} ${activeProject === project.id ? styles.arrowUp : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
