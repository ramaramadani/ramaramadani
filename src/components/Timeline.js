"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Timeline.module.css";

const experiences = [
  {
    semester: "Semester 4",
    year: "2026",
    title: "Smart IoT Attendance System",
    role: "Project Leader",
    description:
      "Led full-stack Laravel + Arduino hardware integration project. Architected RFID/fingerprint attendance with real-time REST API synchronization. Managed complete SDLC from requirements to deployment.",
    skills: ["Laravel", "Arduino", "RFID", "MySQL", "REST API"],
    icon: "🔐",
  },
  {
    semester: "Semester 3",
    year: "2025",
    title: "Smart Solar-Powered Aquaponic",
    role: "Project Leader",
    description:
      "Led IoT aquaponic system combining solar energy with automated monitoring. Built Next.js real-time dashboard with ESP32 via WebSocket. Authored complete SRS documentation.",
    skills: ["Next.js", "ESP32", "Solar", "WebSocket", "IoT"],
    icon: "🌱",
  },
  {
    semester: "Semester 2",
    year: "2025",
    title: "E-Commerce Microservices Platform",
    role: "Project Leader",
    description:
      "Designed decoupled architecture with Laravel UI + Django REST API backend. Clean API contracts enabling independent deployment. Applied Agile workflow with structured coordination.",
    skills: ["Laravel", "Django REST", "Microservices", "Agile"],
    icon: "🛒",
  },
  {
    semester: "Semester 1",
    year: "2024",
    title: "Tourism Destination Guide",
    role: "Project Leader",
    description:
      "Inaugural leadership role delivering full-stack tourism platform. Admin CMS, interactive listings, reviews & ratings. Complete Waterfall SDLC workflow with full documentation.",
    skills: ["Laravel", "MySQL", "Blade", "Waterfall SDLC"],
    icon: "✈️",
  },
];

export default function Timeline() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="experience" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="sectionLabel" style={{ justifyContent: "center" }}>Experience</span>
          <h2 className="sectionTitle">Project Leadership Journey</h2>
          <p className="sectionSubtitle" style={{ margin: "0 auto" }}>
            Appointed Project Leader for 4 consecutive semesters, guiding teams through the complete SDLC.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line} />
          {experiences.map((exp, i) => (
            <TimelineItem key={i} item={exp} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index, isVisible }) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`${styles.item} ${isLeft ? styles.left : styles.right} ${isVisible ? styles.itemVisible : ""}`}
      style={{ transitionDelay: `${index * 0.2 + 0.3}s` }}
    >
      <div className={styles.dot}>
        <span>{item.icon}</span>
      </div>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <span className={styles.badge}>{item.semester}</span>
          <span className={styles.year}>{item.year}</span>
        </div>
        <h3 className={styles.title}>{item.title}</h3>
        <span className={styles.role}>{item.role}</span>
        <p className={styles.desc}>{item.description}</p>
        <div className={styles.skillRow}>
          {item.skills.map((s) => (
            <span key={s} className={styles.skillTag}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
