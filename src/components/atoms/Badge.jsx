// src/components/atoms/Badge.jsx

const Badge = ({ children, variant = "default", className = "" }) => {
  const baseStyles = "inline-block rounded-full text-xs font-medium px-3 py-1";

  const variants = {
    default: "bg-[#FAF9F6] text-[#3E3A74] border border-primary/20",
    primary: "bg-[#3E3A74] text-white",
    accent: "bg-[#FFC857] text-[#3E3A74]",
    outline: "bg-transparent border border-primary text-[#3E3A74]",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
