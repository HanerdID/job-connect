// src/components/CompanyCard.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CompanyCard = ({ letter, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";

      // Staggered animation based on index
      setTimeout(() => {
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100 * (index % 4));
    }
  }, [index]);

  // Daftar warna untuk logo perusahaan
  const logoColors = [
    { bg: "#80CBC4", text: "#FFFFFF" }, // teal
    { bg: "#5DAFB0", text: "#FFFFFF" }, // blue-teal
    { bg: "#80CBC4", text: "#FFFFFF" }, // teal
    { bg: "#5DAFB0", text: "#FFFFFF" }, // blue-teal
    { bg: "#80CBC4", text: "#FFFFFF" }, // teal
    { bg: "#5DAFB0", text: "#FFFFFF" }, // blue-teal
    { bg: "#80CBC4", text: "#FFFFFF" }, // teal
    { bg: "#5DAFB0", text: "#FFFFFF" }, // blue-teal
  ];

  const colorIndex = index % logoColors.length;
  const logoColor = logoColors[colorIndex];

  // Perusahaan sample
  const companies = [
    "Accenture",
    "Bukalapak",
    "Citrix",
    "Deloitte",
    "Ericsson",
    "Freeport",
    "Gojek",
    "HaloDoc",
  ];

  // Kategori sample
  const categories = [
    "Technology",
    "E-commerce",
    "Technology",
    "Finance",
    "Technology",
    "Mining",
    "Technology",
    "Healthcare",
  ];

  // Jumlah posisi terbuka
  const openPositions = [6, 4, 3, 8, 5, 2, 7, 4];

  const companyName = companies[index];
  const category = categories[index];
  const positions = openPositions[index];

  // Featured badge hanya untuk beberapa perusahaan
  const isFeatured = index === 0 || index === 3 || index === 6;

  return (
    <Link to={`/`} className="block">
      <div
        ref={cardRef}
        className="rounded-xl bg-cream p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        style={{
          backgroundColor: "var(--color-cream)",
        }}
      >
        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-2 right-2">
            <div className="rounded-full bg-orange text-white text-xs px-3 py-1">
              Featured
            </div>
          </div>
        )}

        <div className="flex items-start">
          {/* Logo */}
          <div
            className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mr-4"
            style={{
              backgroundColor: logoColor.bg,
              color: logoColor.text,
            }}
          >
            {letter}
          </div>

          {/* Company Info */}
          <div className="flex-1">
            <h3 className="font-bold text-lg text-dark-teal">{companyName}</h3>
            <p className="text-gray text-sm">{category}</p>
          </div>
        </div>

        {/* Open Positions & View Link */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-blue-teal">{positions} open positions</p>
          <div className="flex items-center text-gray hover:text-dark-teal transition-colors">
            View
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
