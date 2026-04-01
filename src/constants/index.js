import { FiMapPin, FiShield, FiUsers } from "react-icons/fi";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Our Story",
    path: "/story",
  },

  {
    name: "Process",
    path: "/process",
  },

  {
    name: "Products",
    path: "/products",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

export const stats = [
  { value: "10+", label: "Years Active" },
  { value: "200+", label: "Artisan Families" },
  { value: "18", label: "Export Destinations" },
  { value: "0", label: "Chemicals Used" },
];

export const value = [
  {
    icon: <FiShield size={28} />,
    title: "Chemical-Free at Every Stage",
    desc: "Wild-harvested, water-retted in natural river water, sun-dried in open Himalayan air. No industrial boiling, no synthetic inputs, no machines. The fiber your brand sources has never touched a chemical.",
  },
  {
    icon: <FiMapPin size={28} />,
    title: "From Hillside to Invoice",
    desc: "Every bale is traceable to its harvest village in Bajhang district. We provide full sourcing documentation for customs clearance, supplier audits, and brand transparency storytelling.",
  },
  {
    icon: <FiUsers size={28} />,
    title: "Livelihoods Built Into Every Bale",
    desc: "Behind each shipment is a network of farming families and women artisans carrying generations of traditional processing knowledge. Your order funds fair wages and preserves a craft industrial production cannot replicate.",
  },
];

export const steps = [
  { num: "01", label: "Wild Harvest" },
  { num: "02", label: "River Retting" },
  { num: "03", label: "Hand Peeling" },
  { num: "04", label: "Sun Drying" },
  { num: "05", label: "Quality Sort & Export" },
];
