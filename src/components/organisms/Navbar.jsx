// src/components/organisms/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import Logo from "../atoms/Logo";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "#ffffffdd" : "#FAF9F6",
        backdropFilter: "blur(6px)",
      }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />

        <div className="flex items-center space-x-3">
          {/* Catchy Login Button */}
          <Link to="/login">
            <Button
              type="primary"
              icon={<LoginOutlined />}
              size="middle"
              style={{
                backgroundColor: "#FFC857",
                color: "#3E3A74",
                fontWeight: "bold",
                border: "none",
              }}
            >
              Masuk
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
