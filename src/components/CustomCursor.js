"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop with real mouse
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches || window.innerWidth < 768) {
      setShouldRender(false);
      return;
    }
    setShouldRender(true);
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    // Wait a frame for refs to be attached
    const rafId = requestAnimationFrame(() => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) return;

      let isLoopRunning = false;

      const animateRing = () => {
        const dx = mousePos.current.x - ringPos.current.x;
        const dy = mousePos.current.y - ringPos.current.y;
        ringPos.current.x += dx * 0.18;
        ringPos.current.y += dy * 0.18;
        ring.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;

        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
          animationRef.current = requestAnimationFrame(animateRing);
        } else {
          isLoopRunning = false;
        }
      };

      const startRingLoop = () => {
        if (!isLoopRunning) {
          isLoopRunning = true;
          animationRef.current = requestAnimationFrame(animateRing);
        }
      };

      const handleMouseMove = (e) => {
        mousePos.current.x = e.clientX;
        mousePos.current.y = e.clientY;
        setIsVisible(true);
        dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
        startRingLoop();
      };

      const handleMouseLeave = () => {
        setIsVisible(false);
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        isLoopRunning = false;
      };

      const handleMouseEnter = () => setIsVisible(true);

      const handleMouseOver = (e) => {
        const target = e.target;
        if (
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest?.("a") ||
          target.closest?.("button")
        ) {
          setIsHovering(true);
        }
      };

      const handleMouseOut = () => setIsHovering(false);

      document.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
      document.addEventListener("mouseenter", handleMouseEnter, { passive: true });
      document.addEventListener("mouseover", handleMouseOver, { passive: true });
      document.addEventListener("mouseout", handleMouseOut, { passive: true });
      startRingLoop();

      // Store cleanup refs
      dotRef.current._cleanup = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
        document.removeEventListener("mouseover", handleMouseOver);
        document.removeEventListener("mouseout", handleMouseOut);
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (dotRef.current?._cleanup) dotRef.current._cleanup();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.dot} ${isVisible ? styles.visible : ""} ${isHovering ? styles.hovering : ""}`}
      />
      <div
        ref={ringRef}
        className={`${styles.ring} ${isVisible ? styles.visible : ""} ${isHovering ? styles.hovering : ""}`}
      />
    </>
  );
}
