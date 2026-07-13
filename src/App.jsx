import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./styles/globals.css";

import Navbar           from "./components/Navbar";
import Footer           from "./components/Footer";
import WAFloat          from "./components/WAFloat";
import StickyContactBar from "./components/StickyContactBar";
import Preloader        from "./components/Preloader";
import CursorFX         from "./components/CursorFX";
import Ambient          from "./components/Ambient";

import { useSmoothScroll } from "./lib/motion";

import HomePage             from "./pages/HomePage";
import ServicesPage         from "./pages/ServicesPage";
import ProductsPage         from "./pages/ProductsPage";
import PricingPage          from "./pages/PricingPage";
import ContactPage          from "./pages/ContactPage";
import FinalYearProjectPage from "./pages/FinalYearProjectPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  useSmoothScroll();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Preloader />
      <Ambient />
      <CursorFX />

      <ScrollToTop />
      <Navbar />

      <main style={{ flex: 1, position: "relative", zIndex: 2 }}>
        <Routes>
          <Route path="/"                   element={<HomePage />} />
          <Route path="/services"           element={<ServicesPage />} />
          <Route path="/products"           element={<ProductsPage />} />
          <Route path="/pricing"            element={<PricingPage />} />
          <Route path="/contact"            element={<ContactPage />} />
          <Route path="/final-year-project" element={<FinalYearProjectPage />} />
        </Routes>
      </main>

      <Footer />
      <WAFloat />
      <StickyContactBar />
    </div>
  );
}