"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Smart IoT Attendance System",
    subtitle: "RFID & Biometric Verification",
    semester: "Semester 4 — 2026",
    role: "Project Leader",
    tech: ["PHP", "Laravel", "Arduino IDE", "NodeMCU (ESP8266)", "RFID MFRC522", "Fingerprint Sensor", "MySQL", "REST API"],
    description:
      "Architected and delivered an automated attendance management system integrating RFID and biometric hardware modules with a Laravel cloud dashboard. Enabled instant real-time synchronization between embedded microcontrollers and the web application via secure RESTful APIs.",
    architecture: "RFID / Fingerprint Sensor ➔ NodeMCU ESP8266 ➔ RESTful API ➔ Laravel Backend ➔ MySQL ➔ Live Web Dashboard",
    highlights: [
      "Led end-to-end team coordination as Project Leader across hardware prototyping and software development",
      "Eliminated proxy attendance and manual errors by 100% using dual-layer hardware verification",
      "Engineered low-latency REST API (<200ms) for reliable hardware-to-cloud data synchronization",
      "Designed normalized MySQL schema with audit logs and role-based access control (Admin, Lecturer, Student)",
      "Conducted comprehensive Black Box & White Box QA testing, authoring SRS and full technical documentation",
    ],
    color: "#3b82f6",
    github: "https://github.com/ramaramadani/Smart-IoT-Attendance-System-Finger-RFID-",
    demo: "https://www.youtube.com/watch?v=w9fP6S1eelM",
  },
  {
    id: 2,
    title: "Smart Solar-Powered Aquaponic",
    subtitle: "IoT Automation & Energy Harvesting",
    semester: "Semester 3 — 2025",
    role: "Project Leader",
    tech: ["Next.js", "ESP32", "ESP8266", "Arduino IDE", "Solar Panel", "Sensors (pH, Temp)", "WebSocket", "REST API"],
    description:
      "Engineered an autonomous IoT aquaponic ecosystem combining off-grid solar energy harvesting with automated fish-feeding, water circulation, and pH/temperature telemetry. Designed a real-time reactive Next.js dashboard connected with ESP32 via WebSocket and REST APIs.",
    architecture: "Sensors (pH, Temp, Water Level) ➔ ESP32 / ESP8266 ➔ WebSocket & REST API ➔ Next.js Real-Time Dashboard ➔ Solar Power Manager",
    highlights: [
      "Supervised cross-functional engineering team as Project Leader across 5 months of development",
      "Automated 24/7 water quality monitoring and feeding routines with zero manual intervention required",
      "Designed solar energy distribution logic to ensure continuous 24/7 off-grid hardware operation",
      "Built responsive Next.js frontend featuring live telemetry charts with dynamic sensor state updates",
      "Authored complete SRS specifications, circuit schematics, and system flowcharts using draw.io",
    ],
    color: "#10b981",
    github: "https://github.com/ramaramadani/Sistem-Aquaponik-Cerdas-Bertenaga-Surya-Untuk-Produksi-Pangan-Berkelanjutan",
    demo: "https://www.youtube.com/watch?v=kv0It86FlBc",
  },
  {
    id: 3,
    title: "E-Commerce Platform (Furnipark)",
    subtitle: "Decoupled Microservices Architecture",
    semester: "Semester 2 — 2025",
    role: "Project Leader",
    tech: ["PHP", "Laravel", "Python", "Django REST Framework", "MySQL", "JWT Auth", "Postman"],
    description:
      "Architected and led the development of a high-performance decoupled e-commerce ecosystem featuring a responsive Laravel frontend consuming modular Django REST Framework backend services. Included product catalogues, dynamic cart, checkout pipeline, and role-based permissions.",
    architecture: "Laravel UI (Frontend Consumer) ➔ RESTful API Gateway ➔ Django REST Framework (Backend Service) ➔ MySQL Relational DB",
    highlights: [
      "Led software engineering team as Project Leader adhering to Agile sprint methodologies",
      "Architected microservices separation of concerns with strictly typed API contracts for independent deployment",
      "Built resilient authentication and transaction flows with comprehensive token security",
      "Conducted extensive API endpoint testing using Postman collections and authored use-case UML models",
    ],
    color: "#8b5cf6",
    github: "https://github.com/ramaramadani/furnipark",
    demo: "https://www.youtube.com/watch?v=71wH64jOmow",
  },
  {
    id: 4,
    title: "Tourism Destination Guide (Oceara)",
    subtitle: "Full-Stack Destination CMS & Review Engine",
    semester: "Semester 1 — 2024",
    role: "Project Leader",
    tech: ["PHP", "Laravel", "MySQL", "Blade Engine", "Bootstrap", "SDLC Waterfall"],
    description:
      "Delivered a full-stack maritime tourism guide platform as inaugural Project Leader. Features included an administrative CMS with full CRUD capabilities, interactive destination discovery with geolocation filters, and a verified community review and rating engine.",
    architecture: "User / Admin Web Client ➔ Laravel MVC & Blade Engine ➔ MySQL Relational DB ➔ CMS & Review Engine",
    highlights: [
      "Appointed first Project Leader role, coordinating requirement gathering and task assignments",
      "Engineered full-featured admin management dashboard with secure image upload pipelines",
      "Implemented dynamic destination search, category filtering, and user rating calculations",
      "Produced comprehensive SRS documentation, system workflow diagrams, and end-user operational manuals",
    ],
    color: "#f59e0b",
    github: "https://github.com/ramaramadani/Tim1_Aplikasi_Panduan_Destinasi_Wisata_Bahari",
    demo: "https://www.youtube.com/watch?v=R9xmlkYdFm4",
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
          <h2 className="sectionTitle">Featured Engineering Projects</h2>
          <p className="sectionSubtitle" style={{ margin: "0 auto" }}>
            Proven track record of 4× Project Leadership — from system architecture, hardware-software integration, to production deployment.
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
                  <div className={styles.architectureBox}>
                    <div className={styles.architectureHeader}>
                      <span className={styles.architectureIcon}>📐</span>
                      <span className={styles.architectureTitle}>System Architecture & Data Flow</span>
                    </div>
                    <p className={styles.architectureText}>{project.architecture}</p>
                  </div>

                  <div className={styles.highlights}>
                    <h4 className={styles.highlightsTitle}>Key Engineering Impact & Contributions</h4>
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
                  <div className={styles.btnGroup}>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.demoLink}
                        onClick={(e) => e.stopPropagation()}
                        title="Watch Live Project Demo on YouTube"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        <span>Demo</span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubLink}
                      onClick={(e) => e.stopPropagation()}
                      title="View Source Code on GitHub"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Code</span>
                    </a>
                  </div>

                  <button className={styles.expandBtn}>
                    {activeProject === project.id ? "Show Less" : "View Architecture"}
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
