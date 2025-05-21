// src/components/FeaturedCompanies.jsx
import React from "react";
import { Link } from "react-router-dom";
import CompanyCard from "./CompanyCard";
import GradientHeader from "./GradientHeader";
import CustomCurveBackground from "./CustomCurveBackground";

const FeaturedCompanies = () => {
  return (
    <div className="bg-light-teal py-20 relative">
      <div className="container mx-auto px-4">
        <GradientHeader
          title="Featured Companies"
          subtitle="Perusahaan terbaik yang berkolaborasi dengan kami"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter, index) => (
            <CompanyCard key={index} letter={letter} index={index} />
          ))}
        </div>

        {/* View All Companies button */}
        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-teal border border-blue-teal hover:bg-blue-teal hover:text-cream transition duration-300 font-medium"
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
          </Link>
        </div>
      </div>

      {/* Bottom curve */}
      <CustomCurveBackground color="white" height={80} position="bottom" />
    </div>
  );
};

export default FeaturedCompanies;
