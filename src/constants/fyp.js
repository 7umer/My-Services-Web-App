import {
  Briefcase,
  Code2,
  Users,
  Zap,
  Layers3,
  Headphones,
  FolderKanban,
  GraduationCap,
  Sprout,
  Star,
  Gem,
} from "lucide-react";

import {
  SiPython,
  SiDjango,
  SiReact,
  SiPostgresql,
} from "react-icons/si";

import {
  FaBrain,
  FaChartLine,
  FaPlug,
} from "react-icons/fa";

export const FYP_WHY_CHOOSE = [
  { icon: Briefcase, label: "Industry-Oriented Development" },
  { icon: Code2, label: "Clean & Scalable Code" },
  { icon: Users, label: "Personalized Technical Guidance" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: Layers3, label: "Modern Technology Stack" },
  { icon: Headphones, label: "Dedicated Support" },
  { icon: FolderKanban, label: "Portfolio-Focused Projects" },
];

export const FYP_TECH_STACK = [
  { icon: SiPython, label: "Python" },
  { icon: SiDjango, label: "Django" },
  { icon: SiReact, label: "React" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: FaPlug, label: "REST APIs" },
  { icon: FaBrain, label: "Artificial Intelligence" },
  { icon: FaBrain, label: "Machine Learning" },
  { icon: FaChartLine, label: "Data Analytics" },
];

export const FYP_PACKAGE_INCLUDES = [
  "Complete Source Code",
  "Professional Documentation",
  "PowerPoint Presentation",
  "Installation Guide",
  "Technical Support",
];

export const FYP_PLANS = [
  {
    name: "Basic",
    color: "#10B981",
    icon: Sprout,
    features: [
      "Mini Project Development",
      "Professional Documentation",
      "Technical Support",
    ],
  },
  {
    name: "Standard",
    color: "#8B5CF6",
    icon: Star,
    popular: true,
    features: [
      "Full Stack Project Development",
      "Professional Documentation",
      "Presentation Support",
      "Deployment Guidance",
    ],
  },
  {
    name: "Premium",
    color: "#FBBF24",
    icon: Gem,
    features: [
      "Advanced Project Development",
      "Complete Documentation",
      "One-to-One Guidance",
      "Priority Support",
      "Project Explanation Session",
    ],
  },
];

export const FYP_WHO_WE_SERVE = [
  { icon: GraduationCap, label: "BE / BTech" },
  { icon: GraduationCap, label: "MCA" },
  { icon: GraduationCap, label: "Diploma" },
  { icon: Users, label: "Individual & Team Projects" },
];

export const FYP_PROCESS = [
  {
    step: "01",
    title: "Share Your Idea",
    desc: "Tell us your project concept, technology preferences, and submission deadline.",
    color: "#8B5CF6",
  },
  {
    step: "02",
    title: "Free Consultation",
    desc: "We discuss requirements, scope, features, and suggest the best technology stack.",
    color: "#10B981",
  },
  {
    step: "03",
    title: "Development Begins",
    desc: "Our team develops your project using clean, scalable, and easy-to-understand code.",
    color: "#FBBF24",
  },
  {
    step: "04",
    title: "Delivery & Support",
    desc: "Receive source code, documentation, PPT, and support for your project presentation.",
    color: "#EC4899",
  },
];