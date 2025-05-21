// src/components/organisms/Navbar.jsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Logo from "../atoms/Logo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 shadow-md" : "py-5"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(250, 249, 246, 0.9)" : "#FAF9F6",
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo size={scrolled ? "default" : "default"} />

        <div className="hidden md:flex items-center space-x-4">
          {!isHomePage && (
            <div className="relative mr-4 w-64">
              <Input
                type="text"
                placeholder="Search for jobs"
                className="py-2 bg-[#FAF9F6]/80"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                }
              />
            </div>
          )}

          <Link to="/login">
            <Button>Sign In</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Link to="/login">
            <Button size="sm">Sign In</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
