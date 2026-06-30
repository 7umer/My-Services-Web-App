import { useState } from "react";

import { useScrolled } from "../hooks/useScrolled";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/um-web-solutions-logo-full.png";


const LINKS = [
  { name: "Home",               path: "/" },
  { name: "Services",           path: "/services" },
  { name: "Products",           path: "/products" },
  { name: "Pricing",            path: "/pricing" },
  { name: "Final Year Project", path: "/final-year-project" },
  { name: "Contact",            path: "/contact" },
];

export default function Navbar() {
  const scrolled = useScrolled();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="UM Web Solutions"
            style={{ height: 34, width: "auto", display: "block" }}
          />
        </Link>

        {/* Links */}
        <div className="hide-mobile" style={{ display: "flex", gap: 28 }}>
          {LINKS.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              className={`nav-link ${location.pathname === l.path ? "active" : ""}`}
              style={
                l.path === "/final-year-project"
                  ? {
                      color: "#10B981",
                      fontWeight: 600,
                      fontSize: 13,
                    }
                  : {}
              }
            >
              {l.name}
            </Link>
          ))}
        </div>

        {/* Desktop WhatsApp */}
<div className="hide-mobile">
  <a
    href="https://wa.me/919035477754?text=Hi%2C+I+visited+your+website!"
    target="_blank"
    rel="noreferrer"
    className="btn-wa"
    style={{ padding: "10px 20px", fontSize: 13,
      maxWidth: 200,
      width: "100%",
      textAlign: "center",
      display: "block",
      borderRadius: 6

     }}
  >
    WhatsApp Us
  </a>
</div>

          {/* Hamburger menu for mobile */}
          <div className="show-mobile" >
            <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              width: 28,
              height: 28,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0
            }}
            >
              <span style={{ height: 3, width: "100%", background: "var(--purple)", borderRadius: 2 }} />
              <span style={{ height: 3, width: "100%", background: "var(--purple)", borderRadius: 2 }} />
              <span style={{ height: 3, width: "100%", background: "var(--purple)", borderRadius: 2 }} />
              </button>
          </div>

      </div>
      

      {/* Mobile Menu */}
      
{mobileOpen && (
  <>
    {/* Full screen overlay */}
    <div
    className="mobile-menu-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.2)",
        zIndex: 90,
      }}
      onClick={() => setMobileOpen(false)}
    ></div>

    {/* Actual menu */}
    <div
      className="mobile-menu"
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        padding: "16px 24px",
        gap: 16,
        zIndex: 99,
        alignItems: "center",
      }}
    >
      {LINKS.map((l) => (
        <Link
          key={l.name}
          to={l.path}
          onClick={() => setMobileOpen(false)}
          className={`nav-link ${location.pathname === l.path ? "active" : ""}`}
          style={{
            textAlign: "center",
            width: "100%",
            maxWidth: 200,
            ...(l.path === "/final-year-project"
              ? { color: "#10B981", fontWeight: 600 }
              : {}),
          }}
        >
          {l.name}
        </Link>
      ))}
      <a
        href="https://wa.me/919035477754?text=Hi%2C+I+visited+your+website!"
        target="_blank"
        rel="noreferrer"
        className="btn-wa"
        style={{
          padding: "10px 20px",
          fontSize: 13,
          maxWidth: 200,
          width: "100%",
          textAlign: "center",
          margin: "0 auto",
          display: "block",
          borderRadius: 6,
        }}
      >
        WhatsApp Us
      </a>
    </div>
  </>
)}

    </nav>
  );
}