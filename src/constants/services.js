import { Palette, Code2, AppWindow, Layers, Bug, CreditCard } from "lucide-react";

export const SERVICES = [
  {
    icon: Palette,
    color: "#2454d8",
    bg: "rgba(36,84,216,0.1)",
    title: "Web Design",
    desc: "Clean, modern UI/UX design that builds trust and converts visitors into clients.",
    tags: ["Figma", "Responsive", "UI/UX"],
  },
  {
    icon: Code2,
    color: "#0e8f86",
    bg: "rgba(14,143,134,0.1)",
    title: "Web Development",
    desc: "Fast, well-structured websites built with React and a modern tooling stack.",
    tags: ["React", "Tailwind", "Performance"],
  },
  {
    icon: AppWindow,
    color: "#15359e",
    bg: "rgba(21,53,158,0.1)",
    title: "Web App Development",
    desc: "Full-stack web applications with reliable backends and polished frontends.",
    tags: ["Django", "REST API", "PostgreSQL"],
  },
  {
    icon: Layers,
    color: "#b6802a",
    bg: "rgba(182,128,42,0.1)",
    title: "SaaS Development",
    desc: "End-to-end SaaS products — authentication, subscriptions, dashboards, billing.",
    tags: ["SaaS", "Subscriptions", "Dashboard"],
  },
  {
    icon: Bug,
    color: "#5b6675",
    bg: "rgba(91,102,117,0.1)",
    title: "Bug Fixing",
    desc: "Quick diagnosis and fixing of frontend or backend issues in any existing project.",
    tags: ["Debug", "Optimize", "Any Stack"],
  },
  {
    icon: CreditCard,
    color: "#c0392b",
    bg: "rgba(192,57,43,0.1)",
    title: "Payment Integration",
    desc: "Razorpay and Stripe integration set up correctly for Indian and global clients.",
    tags: ["Razorpay", "Stripe", "Subscriptions"],
  },
];