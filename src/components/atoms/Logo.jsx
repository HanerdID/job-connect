// src/components/atoms/Logo.jsx
import { Link } from "react-router-dom";

const Logo = ({ size = "default" }) => {
  const sizes = {
    small: "text-xl",
    default: "text-2xl",
    large: "text-3xl",
  };

  return (
    <Link to="/" className={`font-extrabold ${sizes[size]} flex items-center gap-2`}>
      <img src="images/jobConnect-icon.png" alt="jobConnect Logo" className="w-12"/>
      <span>JobConnect</span>
    </Link>
  );
};

export default Logo;
