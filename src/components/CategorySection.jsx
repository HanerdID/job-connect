// src/components/CategorySection.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import GradientHeader from "./GradientHeader";

const CategorySection = () => {
  // Data kategori
  const categories = [
    {
      id: 1,
      name: "Information Technology",
      icon: "💻",
      color: "var(--color-mint)",
    },
    {
      id: 2,
      name: "Design & Creative",
      icon: "🎨",
      color: "var(--color-soft-cream)",
    },
    { id: 3, name: "Marketing", icon: "📊", color: "var(--color-light-teal)" },
    { id: 4, name: "Finance", icon: "💼", color: "var(--color-cream)" },
    {
      id: 5,
      name: "Customer Service",
      icon: "🙋‍♀️",
      color: "var(--color-light-teal)",
    },
    { id: 6, name: "Healthcare", icon: "🏥", color: "var(--color-soft-cream)" },
    { id: 7, name: "Education", icon: "🎓", color: "var(--color-mint)" },
    { id: 8, name: "Engineering", icon: "⚙️", color: "var(--color-cream)" },
  ];

  // Ref untuk animasi
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Menambahkan kelas visible untuk memicu animasi
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const categoryCards = document.querySelectorAll(".category-card");
    categoryCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      categoryCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="bg-white py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <GradientHeader
          title="Jelajahi Kategori"
          subtitle="Temukan posisi yang sesuai dengan keahlian dan minat Anda"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Browse All Categories button */}
        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-teal border border-blue-teal hover:bg-blue-teal hover:text-cream transform duration-300 font-medium"
          >
            Browse All Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Sub-komponen CategoryCard
const CategoryCard = ({ category, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";

      // Staggered animation
      setTimeout(() => {
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100 * (index % 4));
    }
  }, [index]);

  return (
    <Link to={`/`} className="block">
      <div
        ref={cardRef}
        className="category-card group fade-in"
        style={{ backgroundColor: category.color }}
      >
        <div className="mb-4 text-4xl">{category.icon}</div>
        <h3 className="font-medium text-dark-teal text-lg">{category.name}</h3>

        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-teal"
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
        <div className="absolute bottom-3 left-4 text-xs text-gray font-medium">
          {Math.floor(Math.random() * 50) + 10} posisi tersedia
        </div>
      </div>
    </Link>
  );
};

export default CategorySection;
