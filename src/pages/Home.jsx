// src/pages/Home.jsx
import React from "react";
import Hero from "../components/templates/Hero";
import CategoriesSection from "../components/templates/CategoriesSection";
import FeaturedCompanies from "../components/templates/FeaturedCompanies";
import JobsSection from "../components/templates/JobsSection";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <JobsSection />
      <CategoriesSection />
      <FeaturedCompanies />
    </div>
  );
};

export default Home;
