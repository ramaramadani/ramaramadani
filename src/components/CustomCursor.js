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

      const handleMouseMove = (e) => {
        mousePos.current.x = e.clientX;
        mousePos.current.y = e.clientY;
        setIsVisible(true);
        dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      };

      const handleMouseLeave = () => setIsVisible(false);
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

      const animateRing = () => {
        ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
        ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;
        ring.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
        animationRef.current = requestAnimationFrame(animateRing);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);
      document.addEventListener("mouseover", handleMouseOver);
      document.addEventListener("mouseout", handleMouseOut);
      animationRef.current = requestAnimationFrame(animateRing);

      // Store cleanup refs
      dotRef.current._cleanup = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
        document.removeEventListener("mouseover", handleMouseOver);
        document.removeEventListener("mouseout", handleMouseOut);
        cancelAnimationFrame(animationRef.current);
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
