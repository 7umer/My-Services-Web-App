export const PRODUCTS = [
  {
    id: "clinic-saas",
    name: "Clinic SaaS",
    tagline: "Complete clinic management — from patients to payments",
    status: "In Active Development",
    statusColor: "#10B981",
    description:
      "A complete clinic management system — patient records, prescriptions, billing, and appointment tracking. Built for modern clinics that want to go digital.",
    features: [
      { emoji: "👤", title: "Patient Management", desc: "Add, search, track patient records easily" },
      { emoji: "💊", title: "Prescriptions", desc: "Digital prescriptions with medicine database" },
      { emoji: "💰", title: "Billing", desc: "Auto-generate invoices and track payments" },
      { emoji: "📅", title: "Appointments", desc: "Calendar view with status tracking" },
      { emoji: "👥", title: "Staff Management", desc: "Roles, access control, attendance" },
      { emoji: "📊", title: "Analytics", desc: "Revenue, patient flow, monthly reports" },
    ],
pricing: [
  { plan: "Basic",        inr: "₹499/mo",   usd: "$15/mo" },
  { plan: "Pro",          inr: "₹1499/mo",  usd: "$35/mo"},
  { plan: "Clinic Chain", inr: "₹2999/mo",  usd: "$79/mo"},
],
startingInr: "₹499",
startingUsd: "$15",
  },
];
