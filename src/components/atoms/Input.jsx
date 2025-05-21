// src/components/atoms/Input.jsx
import React from "react";

const Input = ({ icon, className = "", ...props }) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
          {icon}
        </div>
      )}
      <input
        className={`w-full rounded-lg border border-neutral-300 p-3 outline-none focus:ring-2 focus:ring-primary/30 ${
          icon ? "pl-10" : ""
        } ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
