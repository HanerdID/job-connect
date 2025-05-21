// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
