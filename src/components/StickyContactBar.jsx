import { useState, useEffect, useRef } from "react";
import { Mail, Phone, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ITEMS = [
  { icon: Mail, label: "Email Us", href: "mailto:um7websolutions@gmail.com" },
  { icon: Phone, label: "Call Us", href: "tel:+919035477754" },
  { icon: Info, label: "Make an Inquiry", href: "/contact", internal: true },
];

export default function StickyContactBar() {
  const navigate = useNavigate();
  const wrapRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  // Tap outside closes an open item on touch devices
  useEffect(() => {
    if (!isTouch) return;
    const handleOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("touchstart", handleOutside);
    return () => document.removeEventListener("touchstart", handleOutside);
  }, [isTouch]);

  const handleClick = (e, item, i) => {
    if (isTouch && openIndex !== i) {
      e.preventDefault();
      setOpenIndex(i);
      return;
    }
    if (item.internal) {
      e.preventDefault();
      navigate(item.href);
    }
    setOpenIndex(null);
  };

  return (
    <>
      {/* Right side: Email / Call / Inquiry — expand-on-hover-or-tap */}
      <div className="sticky-contact-bar" ref={wrapRef}>
        {ITEMS.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            className={`contact-item ${openIndex === i ? "open" : ""}`}
            title={item.label}
            onClick={(e) => handleClick(e, item, i)}
            onMouseEnter={() => !isTouch && setOpenIndex(i)}
            onMouseLeave={() => !isTouch && setOpenIndex(null)}
          >
            <item.icon size={20} className="contact-item-icon" />
            <span className="contact-item-label">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Left side: vertical "Contact Us" tab — always links straight to /contact */}
      <button
        className="left-contact-tab"
        onClick={() => navigate("/contact")}
        aria-label="Contact Us"
      >
        Contact Us
      </button>
    </>
  );
}