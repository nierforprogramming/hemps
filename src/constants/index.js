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

export const artisans = [
  {
    name: "Gore Dhami, 72",
    role: "Hemp Harvester · Durgathali Village, Bajhang",
    desc: "Gore has been reading the hillsides of Bajhang since he was a boy, following his father up the same slopes he still walks today. At 72, he is one of the few people left in the district who knows exactly when the wild hemp is ready — not by calendar, but by the way the stalks begin to yellow at the base and the seeds start to harden. He harvests by hand, the same way it has always been done, cutting low and bundling tight. He cannot tell you how many seasons he has done this. He stopped counting.",
  },
  {
    name: "Gauri Jagri, 35",
    role: "Fiber Peeler · Thalara, Bajhang",
    desc: "Gauri learned to peel hemp fiber from her mother-in-law, sitting outside on cold mornings after the retting bundles came up from the river. What looked like simple work to outsiders took her two full seasons to do well — getting the long strands off cleanly without breaking them is a skill that lives in the hands, not the head. Today she is one of the fastest and most consistent processors in her cluster, and she trains newer women who join the collective. The income has let her keep her two children in school in Chainpur through the winter months, which was not possible before.",
  },
  {
    name: "Bharat Mahat, 30",
    role: "Quality Sorter & Collective Coordinator · Bajhang District",
    desc: "Bharat grew up watching his family sell raw hemp at whatever price the local middleman offered, with no way to know if it was fair. After finishing school in Dhangadhi, he came back to Bajhang and joined the collective to help close that gap. He is the link between the harvest teams and the export side — grading fiber lots, maintaining documentation, and making sure what leaves Bajhang can be traced back to the exact village and season it came from. He is learning export logistics as he goes, and he considers that the most important education he has ever had.",
  },
];
