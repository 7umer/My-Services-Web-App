import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrolled } from "../hooks/useScrolled";
import { useScramble, useMagnetic } from "../lib/motion";
import logo from "../assets/um-web-solutions-logo-full.png";

const LINKS = [
  { name: "Home",               path: "/" },
  { name: "Services",           path: "/services" },
  { name: "Products",           path: "/products" },
  { name: "Pricing",            path: "/pricing" },
  { name: "Final Year Project", path: "/final-year-project" },
  { name: "Contact",            path: "/contact" },
];

/* one link = one scramble instance */
function NavItem({ link, active, onClick }) {
  const ref = useScramble();
  return (
    <Link
      to={link.path}
      onClick={onClick}
      className={`nav-link ${active ? "active" : ""} ${
        link.path === "/final-year-project" ? "nav-fyp" : ""
      }`}
    >
      <span ref={ref}>{link.name}</span>
    </Link>
  );
}

export default function Navbar() {
  const scrolled = useScrolled();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const waRef = useMagnetic(0.25);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <Link to="/" style={{ display: "flex", alignItems: "center" }} aria-label="UM Web Solutions — home">
          <img src={logo} alt="UM Web Solutions" style={{ height: 34, width: "auto" }} />
        </Link>

        <div className="hide-mobile" style={{ display: "flex", gap: 30 }}>
          {LINKS.map((l) => (
            <NavItem key={l.name} link={l} active={location.pathname === l.path} />
          ))}
        </div>

        <div className="hide-mobile">
          <a
            ref={waRef}
            href="https://wa.me/919035477754?text=Hi%2C+I+visited+your+website!"
            target="_blank"
            rel="noreferrer"
            className="btn-wa"
            data-cursor="Chat"
            style={{ padding: "11px 22px" }}
          >
            WhatsApp Us
          </a>
        </div>

        {/* hamburger */}
        <div className="show-mobile">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{
              width: 28, height: 20, display: "flex", flexDirection: "column",
              justifyContent: "space-between", background: "none", border: "none", padding: 0,
            }}
          >
            <span style={{ height: 2, width: "100%", background: "var(--red)" }} />
            <span style={{ height: 2, width: "100%", background: "var(--red)" }} />
            <span style={{ height: 2, width: "100%", background: "var(--red)" }} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <>
          <div
            className="mobile-menu-overlay"
            style={{ position: "fixed", inset: 0, zIndex: 90 }}
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="mobile-menu"
            style={{
              position: "absolute", top: "100%", left: 0, width: "100%",
              display: "flex", flexDirection: "column", alignItems: "center",
              padding: "22px 24px 28px", gap: 18, zIndex: 99,
            }}
          >
            {LINKS.map((l) => (
              <NavItem
                key={l.name}
                link={l}
                active={location.pathname === l.path}
                onClick={() => setMobileOpen(false)}
              />
            ))}
            <a
              href="https://wa.me/919035477754?text=Hi%2C+I+visited+your+website!"
              target="_blank"
              rel="noreferrer"
              className="btn-wa"
              style={{ width: "100%", maxWidth: 220, marginTop: 6 }}
            >
              WhatsApp Us
            </a>
          </div>
        </>
      )}
    </nav>
  );
}