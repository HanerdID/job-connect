// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import FeaturedCompanies from "../components/FeaturedCompanies";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <CategorySection />
      <FeaturedCompanies />
    </div>
  );
};

export default Home;
