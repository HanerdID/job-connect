// src/components/organisms/Footer.jsx
import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#3E3A74] text-white relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-full">
        <svg
          className="w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#FAF9F6"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo size="large" />
            <p className="text-white/80 mt-4">
              Platform pencarian lowongan kerja terbaik di Indonesia
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#FFC857] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/post-job"
                  className="hover:text-[#FFC857] transition"
                >
                  Post Job
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-[#FFC857] transition">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <p className="text-white/80">info@jobconnect.id</p>
            <p className="text-white/80">+62 21 1234 5678</p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/70">
          <p>© 2025 JobConnect - Platform Lowongan Kerja Terbaik</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
