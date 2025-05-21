// src/components/organisms/CategoryCard.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category, index = 0 }) => {
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
        className="bg-white p-8 rounded-xl border-2 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 relative group h-full"
      >
        <div className="mb-4 text-4xl">{category.icon}</div>
        <h3 className="font-medium text-[#3E3A74] text-lg">{category.name}</h3>

        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#3E3A74]"
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

        {/* Jumlah pekerjaan pada kategori */}
        <div className="absolute bottom-3 left-auto text-xs text-neutral-500 font-medium">
          {Math.floor(Math.random() * 50) + 10} posisi tersedia
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
