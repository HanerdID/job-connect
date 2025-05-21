// src/components/ScrollingIcons.jsx
import React, { useEffect, useRef } from "react";

const ScrollingIcons = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let offset = 0;
    const icons = container.querySelectorAll(".scroll-icon");

    const animateIcons = () => {
      offset += 0.5;

      icons.forEach((icon, index) => {
        const speed = 1 + (index % 3) * 0.2;
        const newPos = (offset * speed) % container.clientWidth;
        icon.style.transform = `translateX(${newPos}px)`;

        // Reset position when icon moves out of view
        if (newPos > container.clientWidth - 100) {
          icon.style.opacity = "0";
        } else if (newPos < 50) {
          icon.style.opacity = "0";
        } else {
          icon.style.opacity = "1";
        }
      });

      requestAnimationFrame(animateIcons);
    };

    const animation = requestAnimationFrame(animateIcons);
    return () => cancelAnimationFrame(animation);
  }, []);

  const icons = ["💻", "🔍", "📊", "🎨", "📱", "⚙️", "📈", "🚀", "💼", "🔧"];

  return (
    <div ref={containerRef} className="relative h-20 overflow-hidden my-8">
      <div className="flex space-x-8">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="scroll-icon text-3xl transition-opacity duration-300"
            style={{
              transform: `translateX(${index * 100}px)`,
              position: "absolute",
              top: `${(index % 3) * 25}px`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingIcons;
