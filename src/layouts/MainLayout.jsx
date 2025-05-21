// src/layouts/MainLayout.jsx
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const MainLayout = () => {
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
    <div className="min-h-screen flex flex-col bg-light-teal">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 backdrop-blur-md" : "py-5"
        }`}
        style={{
          backgroundColor: scrolled
            ? "rgba(251, 248, 239, 0.85)"
            : "var(--color-cream)",
        }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-3xl font-extrabold text-dark-teal">
            JobConnect
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {!isHomePage && (
              <div className="relative mr-4">
                <input
                  type="text"
                  placeholder="Search for jobs"
                  className="pl-10 pr-4 py-2 rounded-full border-none focus:ring-2 focus:ring-blue-teal focus:outline-none w-64"
                  style={{ backgroundColor: "var(--color-cream)" }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray"
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
              </div>
            )}

            <Link to="/login" className="btn btn-primary">
              Sign in
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-dark-teal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-teal text-white relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-full">
          <svg
            className="w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#80CBC4"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JobConnect</h3>
              <p className="text-white opacity-80">
                Platform pencarian lowongan kerja terbaik di Indonesia
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Navigasi</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-white hover:opacity-70 transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/post-job"
                    className="hover:text-white hover:opacity-70 transition"
                  >
                    Post Job
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-white hover:opacity-70 transition"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <p className="text-white opacity-80">info@jobconnect.id</p>
              <p className="text-white opacity-80">+62 21 1234 5678</p>
            </div>
          </div>

          <div className="border-t border-white border-opacity-20 mt-8 pt-6 text-center text-white opacity-70">
            <p>© 2025 JobConnect - Platform Lowongan Kerja Terbaik</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
