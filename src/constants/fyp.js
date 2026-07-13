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
  SiPython, SiOpenjdk, SiJavascript, SiPhp, SiReact, SiAngular, SiVuedotjs,
  SiNodedotjs, SiExpress, SiDjango, SiFlask, SiSpring, SiLaravel, SiFlutter,
  SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiTensorflow, SiPytorch,
  SiPandas, SiBootstrap, SiTailwindcss, SiDocker,
} from "react-icons/si";

import { FaPlug } from "react-icons/fa";

export const FYP_WHY_CHOOSE = [
  { icon: Briefcase, label: "Industry-Oriented Development" },
  { icon: Code2, label: "Clean & Scalable Code" },
  { icon: Users, label: "Personalized Technical Guidance" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: Layers3, label: "Modern Technology Stack" },
  { icon: Headphones, label: "Dedicated Support" },
  { icon: FolderKanban, label: "Portfolio-Focused Projects" },
];

/* Full stack list — rendered as a moving icon rail (see TechRail).
   `color` is the official brand colour of each technology. */
export const FYP_TECH_STACK = [
  { icon: SiPython,      label: "Python",       color: "#3776AB" },
  { icon: SiOpenjdk,     label: "Java",         color: "#F89820" },
  { icon: SiJavascript,  label: "JavaScript",   color: "#F7DF1E" },
  { icon: SiPhp,         label: "PHP",          color: "#777BB4" },
  { icon: SiReact,       label: "React",        color: "#61DAFB" },
  { icon: SiAngular,     label: "Angular",      color: "#DD0031" },
  { icon: SiVuedotjs,    label: "Vue.js",       color: "#4FC08D" },
  { icon: SiNodedotjs,   label: "Node.js",      color: "#5FA04E" },
  { icon: SiExpress,     label: "Express.js",   color: "#FFFFFF" },
  { icon: SiDjango,      label: "Django",       color: "#44B78B" },
  { icon: SiFlask,       label: "Flask",        color: "#FFFFFF" },
  { icon: SiSpring,      label: "Spring Boot",  color: "#6DB33F" },
  { icon: SiLaravel,     label: "Laravel",      color: "#FF2D20" },
  { icon: SiFlutter,     label: "Flutter",      color: "#02569B" },
  { icon: SiMongodb,     label: "MongoDB",      color: "#47A248" },
  { icon: SiMysql,       label: "MySQL",        color: "#4479A1" },
  { icon: SiPostgresql,  label: "PostgreSQL",   color: "#4169E1" },
  { icon: SiFirebase,    label: "Firebase",     color: "#FFCA28" },
  { icon: SiTensorflow,  label: "TensorFlow",   color: "#FF6F00" },
  { icon: SiPytorch,     label: "PyTorch",      color: "#EE4C2C" },
  { icon: SiPandas,      label: "Pandas",       color: "#E70488" },
  { icon: SiBootstrap,   label: "Bootstrap",    color: "#7952B3" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38BDF8" },
  { icon: SiDocker,      label: "Docker",       color: "#2496ED" },
  { icon: FaPlug,        label: "REST APIs",    color: "#FF1E1E" },
];

/* short list used by the big text marquee under the hero */
export const FYP_MARQUEE = [
  "Python", "React", "Django", "Java", "Machine Learning", "Flutter",
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