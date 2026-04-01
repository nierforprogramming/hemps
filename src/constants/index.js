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

export const processSteps = [
  {
    num: "01",
    tag: "Wild Harvesting",
    title: "The Plant Grows. We Follow It.",
    desc: "Wild hemp in Bajhang is not cultivated — it grows naturally on hillsides and river margins. Harvest teams, working in small family groups, hand-cut mature stalks at the base during the optimal window in late summer and autumn. No monoculture. No deforestation. No planting inputs.",
  },
  {
    num: "02",
    tag: "Field Sorting",
    title: "Quality Starts Before the River.",
    desc: "Immediately after cutting, stalks are sorted by length and maturity. Undersized or damaged stalks are set aside for local use. Consistent bundles are tied and transported to riverside retting sites on foot and by mule. This field-level sorting is the first quality checkpoint and determines fiber grade before retting begins.",
  },
  {
    num: "03",
    tag: "River Retting",
    title: "Mountain Water Does the Work.",
    desc: "Sorted bundles are submerged in cold, fast-moving river water for 10–20 days. The microbial action in natural river water breaks down the pectin binding the fiber to the woody stalk — water retting. No chemicals added at any point. The result is fiber that separates cleanly from the hurd, with intact long strands.",
  },
  {
    num: "04",
    tag: "Hand Peeling",
    title: "Every Strand, Separated by Hand.",
    desc: "After retting, fiber is hand-stripped from the woody core. This is skilled, labor-intensive work done predominantly by women artisans. Hand-peeling produces long-strand fiber with minimal breakage — a quality that machine-decortication consistently fails to match. It is also the stage that sustains the majority of our artisan employment.",
  },
  {
    num: "05",
    tag: "Sun Drying",
    title: "Altitude Air. No Heat Treatment.",
    desc: "Peeled fiber is spread on clean ground and dried in direct sunlight at altitude, where UV intensity and low humidity accelerate drying while preserving quality. No mechanical drying. No heat treatment. Typical drying time: 3–5 days depending on season and elevation.",
  },
  {
    num: "06",
    tag: "Quality Grading",
    title: "Consistent Quality. Every Bale.",
    desc: "Dried fiber is sorted by strand length, color consistency, and fineness. First-quality long-strand fiber is separated from shorter secondary fiber, which is sold separately for different downstream applications. Each grade is documented and labeled.",
  },
  {
    num: "07",
    tag: "Export Packaging",
    title: "Ready for International Shipment.",
    desc: "Graded fiber is compressed, baled, and sealed for export. We prepare full customs documentation: HS code classification, processing stage declaration, certificate of origin, and phytosanitary certificates where required. Every shipment leaves Bajhang fully documented.",
  },
];
