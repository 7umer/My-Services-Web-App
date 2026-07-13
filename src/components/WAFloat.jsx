/* Floating WhatsApp — red, emerges on load, bobs, pulses a red ripple. */

import { FaWhatsapp } from "react-icons/fa";

export default function WAFloat() {
  return (
    <a
      href="https://wa.me/919035477754?text=Hi%2C+I+visited+your+website!"
      target="_blank"
      rel="noreferrer"
      className="wa-red"
      aria-label="Chat with us on WhatsApp"
      data-cursor="Chat"
    >
      <span className="wa-ripple" aria-hidden="true" />
      <span className="wa-ripple wa-ripple-2" aria-hidden="true" />
      <FaWhatsapp size={26} />
      <span className="wa-tip">Chat with us</span>
    </a>
  );
}