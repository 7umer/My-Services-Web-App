/* Sticky contact rail — icons only.
   Dark tiles, off-white icons. Label slides out on hover only. */

   import { Phone, Mail, MessageSquare } from "lucide-react";

   const ITEMS = [
     { icon: Phone,         label: "Call",    href: "tel:+919035477754" },
     { icon: Mail,          label: "Email",   href: "mailto:um7websolutions@gmail.com" },
     { icon: MessageSquare, label: "Enquiry", href: "/contact" },
   ];
   
   export default function StickyContactBar() {
     return (
       <nav className="rail-bar" aria-label="Quick contact">
         {ITEMS.map(({ icon: Icon, label, href }) => (
           <a
             key={label}
             href={href}
             className="rail-tile"
             aria-label={label}
             data-cursor={label}
             target={href.startsWith("http") ? "_blank" : undefined}
             rel="noreferrer"
           >
             <Icon size={18} strokeWidth={1.6} />
             <span className="rail-tip">{label}</span>
           </a>
         ))}
       </nav>
     );
   }