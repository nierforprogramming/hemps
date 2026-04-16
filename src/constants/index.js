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
    img: "/images/harvest.jpeg",
  },
  {
    num: "02",
    tag: "Field Sorting",
    title: "Quality Starts Before the River.",
    desc: "Immediately after cutting, stalks are sorted by length and maturity. Undersized or damaged stalks are set aside for local use. Consistent bundles are tied and transported to riverside retting sites on foot and by mule. This field-level sorting is the first quality checkpoint and determines fiber grade before retting begins.",
    img: "/images/retting.jpeg",
  },
  {
    num: "03",
    tag: "River Retting",
    title: "Mountain Water Does the Work.",
    desc: "Sorted bundles are submerged in cold, fast-moving river water for 10–20 days. The microbial action in natural river water breaks down the pectin binding the fiber to the woody stalk — water retting. No chemicals added at any point. The result is fiber that separates cleanly from the hurd, with intact long strands.",
    img: "/images/before-river.jpeg",
  },
  {
    num: "04",
    tag: "Hand Peeling",
    title: "Every Strand, Separated by Hand.",
    desc: "After retting, fiber is hand-stripped from the woody core. This is skilled, labor-intensive work done predominantly by women artisans. Hand-peeling produces long-strand fiber with minimal breakage — a quality that machine-decortication consistently fails to match. It is also the stage that sustains the majority of our artisan employment.",
    img: "/images/drying.jpeg",
  },
  {
    num: "05",
    tag: "Sun Drying",
    title: "Altitude Air. No Heat Treatment.",
    desc: "Peeled fiber is spread on clean ground and dried in direct sunlight at altitude, where UV intensity and low humidity accelerate drying while preserving quality. No mechanical drying. No heat treatment. Typical drying time: 3–5 days depending on season and elevation.",
    img: "/images/fiber.jpeg",
  },
  {
    num: "06",
    tag: "Quality Grading",
    title: "Consistent Quality. Every Bale.",
    desc: "Dried fiber is sorted by strand length, color consistency, and fineness. First-quality long-strand fiber is separated from shorter secondary fiber, which is sold separately for different downstream applications. Each grade is documented and labeled.",
    img: "/images/grading.jpg",
  },
  {
    num: "07",
    tag: "Export Packaging",
    title: "Ready for International Shipment.",
    desc: "Graded fiber is compressed, baled, and sealed for export. We prepare full customs documentation: HS code classification, processing stage declaration, certificate of origin, and phytosanitary certificates where required. Every shipment leaves Bajhang fully documented.",
    img: "/images/grading.jpg",
  },
];

export const products = [
  {
    tag: "Primary Offering",
    title: "Wild Himalayan Hemp Fiber",
    headerBg: "bg-primary-md",
    desc: "Long-strand, water-retted hemp fiber hand-harvested from wild populations in Bajhang district. Chemical-free from harvest to bale. Traceable to harvest village.",
    useCases:
      "Natural yarn spinning, eco-textile weaving, hemp rope and twine, composite reinforcement, sustainable packaging.",
    meta: [
      { label: "Form", value: "Loose hanks or bales" },
      { label: "MOQ", value: "100 kg minimum" },
      { label: "Stage", value: "Semi-processed raw" },
      { label: "Stock", value: "Seasonal — inquire" },
    ],
    image: "/images/fiber.jpeg",
  },
  {
    tag: "Secondary Offering",
    title: "Lokta Fiber",
    subtitle: "Daphne cannabina",
    headerBg: "bg-primary-md",
    image: "/images/drying.jpeg",

    desc: "Raw lokta bark fiber, hand-processed using traditional methods. Long foundational to Nepal's handmade paper industry; sought by natural fiber innovators for specialist applications.",
    useCases:
      "Specialty paper, natural textile blending, craft applications, sustainable packaging.",
    meta: [
      { label: "Form", value: "Loose hanks or sheets" },
      { label: "MOQ", value: "50 kg minimum" },
      { label: "Stage", value: "Semi-processed raw" },
      { label: "Stock", value: "Limited — inquire early" },
    ],
  },
  {
    tag: "Custom Option",
    title: "Mixed & Sample Research Lots",
    headerBg: "bg-primary-lt",
    desc: "For buyers exploring multiple fiber types or building a materials research library. Mixed sample lots and small R&D quantities with no minimum for sample kits.",
    useCases:
      "Material R&D, product development sampling, pilot programs, academic research.",

    meta: [
      { label: "Form", value: "Custom per spec" },
      { label: "MOQ", value: "No minimum for samples" },
      { label: "Stage", value: "Semi-processed raw" },
      { label: "Pricing", value: "Custom — request quote" },
    ],
  },
];

export const whyItems = [
  {
    num: "1",
    title: "Consistency Across Batches",
    desc: "Our grading process produces reliable fiber quality across orders. We document each bale's grade and origin village — you know exactly what you're receiving.",
  },
  {
    num: "2",
    title: "Full Customs Documentation",
    desc: "Complete export documentation: HS code classification, processing stage declaration, certificate of origin, phytosanitary certificates. No customs surprises.",
  },
  {
    num: "3",
    title: "A Sourcing Story That Holds Up",
    desc: "Every fiber is traceable to a specific community in Bajhang. We provide sourcing narrative, artisan profiles, and community impact data for your brand marketing.",
  },
  {
    num: "4",
    title: "Direct Partnership, Not Brokerage",
    desc: "You work with the collective directly. No intermediaries inflating cost or obscuring sourcing details — end to end.",
  },
];

export const contactCards = [
  {
    tag: "Wholesale & Export",
    title: "Buying at Volume?",
    email: "wholesale@nepalhempcollective.com",
    desc: "Quantity (kg), destination country, intended use, and timeline. We respond within 2 business days.",
    border: "border-t-[3px] border-primary",
  },
  {
    tag: "Samples & Product Questions",
    title: "Evaluating Our Fiber?",
    email: "samples@nepalhempcollective.com",
    desc: "We dispatch 100–500g sample kits to qualifying manufacturers. Include your company name and intended application.",
    border: "border-t-[3px] border-accent",
  },
  {
    tag: "Press, Partnerships & NGOs",
    title: "Something Else?",
    email: "partnerships@nepalhempcollective.com",
    desc: "Media, fair-trade certification, academic collaboration, and NGO discussions welcome. Include a brief description of your organisation.",
    border: "border-t-[3px] border-primary/70",
  },
];
