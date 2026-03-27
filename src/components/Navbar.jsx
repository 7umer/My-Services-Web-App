import { useScrolled } from "../hooks/useScrolled";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const scrolled = useScrolled();
  const location = useLocation();

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo */}
        <div className="font-display" style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>
          <span style={{ color: "var(--text)" }}>UM </span>
          <span className="grad-text">Web Solutions</span>
          <span style={{ color: "var(--purple)", fontSize: 22 }}>.</span>
        </div>

        {/* Links */}
        <div className="hide-mobile" style={{ display: "flex", gap: 36 }}>
          {LINKS.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              className={`nav-link ${location.pathname === l.path ? "active" : ""}`}
            >
              {l.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/919035477754?text=Hi%2C+I+visited+your+website!"
          target="_blank"
          rel="noreferrer"
          className="btn-wa"
          style={{ padding: "10px 20px", fontSize: 13 }}
        >
          <span></span> WhatsApp Us
        </a>
      </div>
    </nav>
  );
}