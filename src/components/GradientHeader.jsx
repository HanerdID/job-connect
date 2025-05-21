// src/components/GradientHeader.jsx
import React from "react";

const GradientHeader = ({ title, subtitle, align = "center" }) => {
  const textAlign = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`${textAlign} mb-8`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange to-blue-teal rounded-full"></span>
      </h2>
      {subtitle && <p className="text-gray">{subtitle}</p>}
    </div>
  );
};

export default GradientHeader;
