// src/components/atoms/Button.jsx
import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  let buttonClass = "btn ";

  // Add variant class
  buttonClass += `btn-${variant} `;

  // Add size class
  if (size === "sm") {
    buttonClass += "text-sm px-4 py-2 ";
  } else if (size === "md") {
    buttonClass += "px-6 py-3 ";
  } else if (size === "lg") {
    buttonClass += "text-lg px-8 py-4 ";
  }

  // Add custom classes
  buttonClass += className;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
