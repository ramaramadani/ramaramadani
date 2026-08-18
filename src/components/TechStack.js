"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./TechStack.module.css";

const categories = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["Python", "PHP", "JavaScript", "C++ (Arduino)", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    icon: "⚙️",
    skills: ["Laravel", "Django REST", "Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Hardware / IoT",
    icon: "🔌",
    skills: ["Arduino IDE", "ESP32 / ESP8266", "RFID Modules", "Fingerprint Sensor", "Solar Panel Integration"],
  },
  {
    title: "Tools & Methods",
    icon: "🛠️",
    skills: ["Git & GitHub", "REST API / Postman", "MySQL", "Agile / Waterfall SDLC", "Technical Writing"],
  },
];

export default function TechStack() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="section">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="sectionLabel" style={{ justifyContent: "center" }}>Technical Skills</span>
          <h2 className="sectionTitle">Tools & Technologies I Work With</h2>
          <p className="sectionSubtitle" style={{ margin: "0 auto" }}>
            Combining software engineering expertise with hands-on hardware experience to build end-to-end solutions.
          </p>
        </div>

        <div className={`${styles.grid} stagger ${isVisible ? "visible" : ""}`}>
          {categories.map((cat) => (
            <div key={cat.title} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>
              <div className={styles.skills}>
                {cat.skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
