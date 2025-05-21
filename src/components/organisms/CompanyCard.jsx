// src/components/organisms/CompanyCard.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Badge from "../atoms/Badge";

const CompanyCard = ({
  letter,
  company,
  category,
  positions,
  index = 0,
  isFeatured = false,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";

      setTimeout(() => {
        card.style.transition = "all 0.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100 * (index % 4));
    }
  }, [index]);

  return (
    <Link to="/" className="block">
      <div
        ref={cardRef}
        className="bg-white border-2 rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 relative"
      >
        {isFeatured && (
          <div className="absolute top-2 right-2">
            <Badge variant="accent">Featured</Badge>
          </div>
        )}

        <div className="flex items-start">
          {/* Logo */}
          <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mr-4 bg-[#3E3A74] text-white">
            {letter}
          </div>

          {/* Company Info */}
          <div className="flex-1">
            <h3 className="font-bold text-lg text-[#3E3A74]">{company}</h3>
            <p className="text-neutral-600 text-sm">{category}</p>
          </div>
        </div>

        {/* Open Positions & View Link */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-[#3E3A74]/80">{positions} open positions</p>
          <div className="flex items-center text-neutral-600 hover:text-[#3E3A74] transition-colors">
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
