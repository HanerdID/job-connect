// src/components/templates/CategoriesSection.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import SectionHeader from "../molecules/SectionHeader";
import CategoryCard from "../organisms/CategoryCard";

const CategoriesSection = () => {
  // Data kategori
  const categories = [
    {
      id: 1,
      name: "Information Technology",
      icon: "💻",
    },
    {
      id: 2,
      name: "Design & Creative",
      icon: "🎨",
    },
    { id: 3, name: "Marketing", icon: "📊" },
    { id: 4, name: "Finance", icon: "💼" },
    {
      id: 5,
      name: "Customer Service",
      icon: "🙋‍♀️",
    },
    { id: 6, name: "Healthcare", icon: "🏥" },
    { id: 7, name: "Education", icon: "🎓" },
    { id: 8, name: "Engineering", icon: "⚙️" },
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
    <div className="bg-gradient-to-b from-white to-[#FAF9F6] py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionHeader
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
          <Button
            as={Link}
            to="/"
            variant="outline"
            className="flex items-center mx-auto hover:cursor-pointer"
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
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
