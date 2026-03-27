import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

import "./styles/globals.css";

// import Cursor   from "./components/Cursor";
import Navbar   from "./components/Navbar";
import Footer   from "./components/Footer";
import WAFloat  from "./components/WAFloat";

import HomePage     from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import PricingPage  from "./pages/PricingPage";
import ContactPage  from "./pages/ContactPage";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <div className="premium-bg">
        <div className="orb" style={{ top: "20%", left: "15%" }}></div>
        <div className="orb" style={{ top: "60%", left: "70%" }}></div>

        {/* Particles */}
        <div className="particle" style={{ top: "10%", left: "10%" }}></div>
        <div className="particle" style={{ top: "30%", left: "50%" }}></div>
        <div className="particle" style={{ top: "70%", left: "80%" }}></div>

        <div className="particle" style={{ top: "5%", left: "5%" }}></div>
        <div className="particle" style={{ top: "15%", left: "40%" }}></div>
        <div className="particle" style={{ top: "25%", left: "75%" }}></div>
        <div className="particle" style={{ top: "35%", left: "20%" }}></div>
        <div className="particle" style={{ top: "45%", left: "60%" }}></div>
        <div className="particle" style={{ top: "55%", left: "10%" }}></div>
        <div className="particle" style={{ top: "65%", left: "80%" }}></div>
        <div className="particle" style={{ top: "75%", left: "35%" }}></div>
        <div className="particle" style={{ top: "85%", left: "55%" }}></div>
        <div className="particle" style={{ top: "15%", left: "85%" }}></div>
        <div className="particle" style={{ top: "30%", left: "5%" }}></div>
        <div className="particle" style={{ top: "50%", left: "25%" }}></div>
      </div>

      {/* <Cursor /> */}
      <ScrollToTop /> 
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
      <WAFloat />
    </>
  );
}