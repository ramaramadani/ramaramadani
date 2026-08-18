"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Contact.module.css";

const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "ramaramadanipbl@gmail.com",
    href: "mailto:ramaramadanipbl@gmail.com",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+62 823-8951-9698",
    href: "tel:+6282389519698",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Batam, Indonesia",
    href: null,
  },
];

const socials = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rama-ramadani-865291334",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/ramaramadani",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [ref, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send — replace with actual API (EmailJS / Formspree)
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="sectionLabel" style={{ justifyContent: "center" }}>Get In Touch</span>
          <h2 className="sectionTitle">Let&apos;s Work Together</h2>
          <p className="sectionSubtitle" style={{ margin: "0 auto" }}>
            Interested in collaborating or have a project in mind? Let&apos;s connect and build something great.
          </p>
        </div>

        <div className={`${styles.grid} reveal ${isVisible ? "visible" : ""}`}>
          <div className={styles.info}>
            <div className={styles.contactCards}>
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href || "#"}
                  className={styles.contactCard}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className={styles.contactIcon}>{item.icon}</div>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>{item.label}</span>
                    <span className={styles.contactValue}>{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.socials}>
              <span className={styles.socialsLabel}>Follow me on</span>
              <div className={styles.socialLinks}>
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                className={styles.input}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                type="email"
                className={styles.input}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                className={styles.textarea}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn} disabled={sending}>
              {sending ? (
                <span className={styles.spinner} />
              ) : sent ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
