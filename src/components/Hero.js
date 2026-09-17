"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const roles = [
  "IoT Systems Engineer",
  "Full-Stack Developer",
  "Hardware-to-Cloud Architect",
  "4× Project Leader",
];

const floatingBadges = [
  { text: "Next.js", icon: "⚡", pos: styles.badgeTopLeft, anim: styles.float1 },
  { text: "ESP32 & IoT", icon: "📡", pos: styles.badgeTopRight, anim: styles.float2 },
  { text: "Laravel", icon: "🛡️", pos: styles.badgeBottomRight, anim: styles.float3 },
  { text: "Django REST", icon: "🐍", pos: styles.badgeBottomLeft, anim: styles.float4 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Particle grid animation with viewport & tab visibility optimization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId = null;
    let particles = [];
    let mouse = { x: -1000, y: -1000 };
    let isHeroInView = true;
    let isTabActive = true;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.1;
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          this.x -= (dx / dist) * force * 2;
          this.y -= (dy / dist) * force * 2;
        } else {
          this.x += (this.baseX - this.x) * 0.02;
          this.y += (this.baseY - this.y) * 0.02;
        }

        this.baseX += this.speedX;
        this.baseY += this.speedY;

        if (this.baseX < 0 || this.baseX > canvas.width) this.speedX *= -1;
        if (this.baseY < 0 || this.baseY > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 83, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const count = Math.min((canvas.width * canvas.height) / 14000, 80);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168, 184, 204, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!isHeroInView || !isTabActive) {
        animationId = null;
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connectParticles();
      animationId = requestAnimationFrame(animate);
    };

    const startLoop = () => {
      if (!animationId && isHeroInView && isTabActive) {
        animationId = requestAnimationFrame(animate);
      }
    };

    const stopLoop = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    // Pause when Hero scrolls out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isHeroInView = entry.isIntersecting;
        if (isHeroInView) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.05 }
    );

    const heroSection = document.getElementById("home");
    if (heroSection) observer.observe(heroSection);

    // Pause when tab is inactive
    const handleVisibility = () => {
      isTabActive = !document.hidden;
      if (isTabActive) startLoop();
      else stopLoop();
    };

    const handleMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    resize();
    init();
    startLoop();

    window.addEventListener("resize", () => {
      resize();
      init();
    }, { passive: true });
    window.addEventListener("mousemove", handleMouse, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stopLoop();
      if (heroSection) observer.unobserve(heroSection);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.grain} />

      <div className={styles.content}>
        <div className={styles.heroGrid}>
          {/* Left Column: Intro & Info */}
          <div className={styles.heroLeft}>

            <h1 className={styles.title}>
              <span className={styles.greeting}>HELLO, I&apos;M</span>
              <span className={styles.name}>
                Rama <span className={styles.nameAccent}>Ramadani</span>
              </span>
            </h1>

            <div className={styles.typingWrap}>
              <span className={styles.typingPrefix}>{"// "}</span>
              <span className={styles.typingText}>{displayText}</span>
              <span className={styles.cursor} />
            </div>

            <p className={styles.subtitle}>
              Informatics Engineering student at Politeknik Negeri Batam specializing
              in full-stack web engineering and embedded IoT systems. Dedicated to building
              reliable, high-impact digital solutions from hardware to cloud.
            </p>

            {/* Highlight Badges */}
            <div className={styles.highlightPills}>
              <span className={styles.highlightPill}>✦ GPA 3.80 / 4.00</span>
              <span className={styles.highlightPill}>✦ Cum Laude</span>
              <span className={styles.highlightPill}>✦ 4× Project Leader</span>
              <span className={styles.highlightPill}>✦ IoT &amp; Full-Stack</span>
            </div>

            <div className={styles.cta}>
              <button className={styles.ctaPrimary} onClick={() => scrollTo("projects")}>
                <span>View My Work</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </button>
              <a
                href="/CV-Rama-Ramadani.pdf"
                download="CV-Rama-Ramadani.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>3.80</span>
                <span className={styles.statLabel}>GPA (Sem 1-4)</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>4+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>4×</span>
                <span className={styles.statLabel}>Team Lead</span>
              </div>
            </div>
          </div>

          {/* Right Column: Circular Avatar with Orbital Rings & Badges */}
          <div className={styles.heroRight}>
            <div className={styles.avatarStage}>
              {/* Glowing Aura Backdrop */}
              <div className={styles.ambientGlow} />

              {/* Orbital Rings */}
              <div className={styles.orbitRingOuter} />
              <div className={styles.orbitRingMiddle} />
              <div className={styles.orbitRingInner} />

              {/* Central Circular Avatar Photo Frame */}
              <div className={styles.photoFrame}>
                <div className={styles.photoGlow} />
                <div className={styles.photoInner}>
                  <Image
                    src="/rama.jpeg"
                    alt="Rama Ramadani"
                    width={500}
                    height={500}
                    priority
                    className={styles.photoImg}
                  />
                </div>
              </div>

              {/* Floating Tech Badges */}
              {floatingBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className={`${styles.floatingBadge} ${badge.pos} ${badge.anim}`}
                >
                  <span className={styles.badgeIcon}>{badge.icon}</span>
                  <span className={styles.badgeText}>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}
