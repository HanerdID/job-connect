// src/pages/Home.jsx
import Hero from "../components/templates/Hero";
import CategoriesSection from "../components/templates/CategoriesSection";
import FeaturedCompanies from "../components/templates/FeaturedCompanies";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <CategoriesSection />
      <FeaturedCompanies />
    </div>
  );
};

export default Home;
