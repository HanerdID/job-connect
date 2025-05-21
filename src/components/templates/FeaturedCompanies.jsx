// src/components/templates/FeaturedCompanies.jsx
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import SectionHeader from "../molecules/SectionHeader";
import CompanyCard from "../organisms/CompanyCard";

const FeaturedCompanies = () => {
  // Company data
  const companies = [
    {
      letter: "A",
      name: "Accenture",
      category: "Technology",
      positions: 6,
      featured: true,
    },
    { letter: "B", name: "Bukalapak", category: "E-commerce", positions: 4 },
    { letter: "C", name: "Citrix", category: "Technology", positions: 3 },
    {
      letter: "D",
      name: "Deloitte",
      category: "Finance",
      positions: 8,
      featured: true,
    },
    { letter: "E", name: "Ericsson", category: "Technology", positions: 5 },
    { letter: "F", name: "Freeport", category: "Mining", positions: 2 },
    {
      letter: "G",
      name: "Gojek",
      category: "Technology",
      positions: 7,
      featured: true,
    },
    { letter: "H", name: "HaloDoc", category: "Healthcare", positions: 4 },
  ];

  return (
    <div className="bg-[#FAF9F6] py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Featured Companies"
          subtitle="Perusahaan terbaik yang berkolaborasi dengan kami"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <CompanyCard
              key={index}
              letter={company.letter}
              company={company.name}
              category={company.category}
              positions={company.positions}
              isFeatured={company.featured}
              index={index}
            />
          ))}
        </div>

        {/* View All Companies button */}
        <div className="text-center mt-10">
          <Button
            as={Link}
            to="/"
            variant="outline"
            className="flex items-center mx-auto hover:cursor-pointer"
          >
            View All Companies
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

      {/* Background shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FeaturedCompanies;
