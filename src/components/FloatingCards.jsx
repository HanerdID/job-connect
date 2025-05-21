// src/components/FloatingCards.jsx
import React, { useEffect, useRef } from "react";

const FloatingCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = container.querySelectorAll(".floating-card");

    cards.forEach((card, index) => {
      // Set initial position
      card.style.transform = `translate(${Math.random() * 40 - 20}px, ${
        Math.random() * 40 - 20
      }px)`;

      // Create floating animation
      const animateCard = () => {
        const xPos = Math.sin(Date.now() / 1000 / (1 + index * 0.1)) * 15;
        const yPos = Math.cos(Date.now() / 1500 / (1 + index * 0.1)) * 15;
        const rotation = Math.sin(Date.now() / 2000 / (1 + index * 0.1)) * 5;

        card.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${rotation}deg)`;
        requestAnimationFrame(animateCard);
      };

      const animation = requestAnimationFrame(animateCard);
      return () => cancelAnimationFrame(animation);
    });
  }, []);

  const colors = [
    "var(--color-teal)",
    "var(--color-orange)",
    "var(--color-blue-teal)",
    "var(--color-mint)",
    "var(--color-soft-cream)",
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div
        className="floating-card absolute top-[15%] left-[10%] w-16 h-16 rounded-lg opacity-50"
        style={{ backgroundColor: colors[0] }}
      ></div>
      <div
        className="floating-card absolute top-[25%] right-[15%] w-20 h-20 rounded-full opacity-30"
        style={{ backgroundColor: colors[1] }}
      ></div>
      <div
        className="floating-card absolute bottom-[25%] left-[20%] w-12 h-12 rounded-full opacity-40"
        style={{ backgroundColor: colors[2] }}
      ></div>
      <div
        className="floating-card absolute bottom-[15%] right-[25%] w-14 h-14 rounded-lg opacity-60"
        style={{ backgroundColor: colors[3] }}
      ></div>
      <div
        className="floating-card absolute top-[45%] left-[45%] w-10 h-10 rounded-lg opacity-30"
        style={{ backgroundColor: colors[4] }}
      ></div>
    </div>
  );
};

export default FloatingCards;
