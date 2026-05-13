import residential from "@/assets/residential.jpg";
import commercial from "@/assets/commercial.jpg";
import industrial from "@/assets/industrial.jpg";
import farmhouse from "@/assets/farmhouse.jpg";
import restaurant from "@/assets/restaurant.jpg";
import hospital from "@/assets/hospital.jpg";
import education from "@/assets/education.jpg";

export type ServiceData = {
  slug: string;
  to: string;
  title: string;
  short: string;
  blurb: string;
  image: string;
  intro: string;
  covers: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: ServiceData[] = [
  {
    slug: "vaastu-education",
    to: "/services/vaastu-education",
    title: "Vaastu Education",
    short: "Learn the science",
    blurb: "Workshops and one-to-one classes covering the principles of Vaastu Shastra for students, homeowners and architects.",
    image: education,
    intro:
      "Vaastu is not superstition — it is a living science of space, direction and energy refined over thousands of years. Our education programs make these principles practical and accessible.",
    covers: [
      "Foundations of Vaastu Shastra and the five elements (pancha bhuta)",
      "Reading directions, the Vaastu Purusha Mandala and site analysis",
      "Application to modern apartments, independent homes and offices",
      "Common myths vs. authentic shastra-based practice",
    ],
    process: [
      { title: "Enroll", text: "Choose a beginner, intermediate or advanced track." },
      { title: "Learn", text: "Live sessions in Telugu and English with reference material." },
      { title: "Practice", text: "Hands-on case studies from real residential and commercial sites." },
      { title: "Certify", text: "Receive a certificate of completion and ongoing mentorship." },
    ],
    faqs: [
      { q: "Do I need an architecture background?", a: "No. Our courses are designed for everyone — homeowners, students, designers and builders." },
      { q: "Is the content in Telugu?", a: "Primary teaching is in Telugu, with English explanations and notes." },
    ],
  },
  {
    slug: "residential",
    to: "/services/residential",
    title: "Residential Projects",
    short: "Homes that nurture",
    blurb: "Vaastu consultation for new homes, flats, duplex houses and renovations — for peace, prosperity and family harmony.",
    image: residential,
    intro:
      "A home is more than walls — it is the energy field your family lives within. We design and audit homes so every direction supports health, wealth and harmony.",
    covers: [
      "Plot selection, entrance direction and main door placement",
      "Pooja room, kitchen, bedrooms, toilets and staircase planning",
      "Water sources, septic tank and overhead tank positions",
      "Remedies for existing homes without major demolition",
    ],
    process: [
      { title: "Site visit", text: "On-site or remote evaluation with floor plan and compass readings." },
      { title: "Analysis", text: "Detailed Vaastu report against the Vaastu Purusha Mandala." },
      { title: "Recommendations", text: "Practical changes, layout suggestions and shastra-based remedies." },
      { title: "Pooja", text: "Vaastu Shanti pooja conducted at an auspicious muhurtam." },
    ],
    faqs: [
      { q: "Do I need to demolish my house?", a: "Almost never. Most issues are corrected through layout, usage and simple remedies." },
      { q: "Can you advise for a rented flat?", a: "Yes. We provide non-structural remedies tailored to rented spaces." },
    ],
  },
  {
    slug: "commercial",
    to: "/services/commercial",
    title: "Commercial Projects",
    short: "Spaces that grow",
    blurb: "Offices, showrooms and retail stores aligned with Vaastu for steady growth, focused teams and loyal customers.",
    image: commercial,
    intro:
      "Commercial spaces concentrate the energy of money, decisions and people. Correct Vaastu positions cash counters, owner cabins and entrances for sustained business success.",
    covers: [
      "Owner / MD cabin and seating direction",
      "Cash counter, accounts and reception placement",
      "Conference rooms, workstations and pantry",
      "Brand signage, entry and parking direction",
    ],
    process: [
      { title: "Brief", text: "Understand the business, team size and growth goals." },
      { title: "Audit", text: "Full Vaastu audit of the floor plate and surroundings." },
      { title: "Plan", text: "Seating chart, zoning and remedies for the existing fit-out." },
      { title: "Review", text: "Follow-up visits during fit-out and after occupancy." },
    ],
    faqs: [
      { q: "We are leasing the space — is it still useful?", a: "Yes. Internal layout and seating can be optimized without structural changes." },
    ],
  },
  {
    slug: "industrial",
    to: "/services/industrial",
    title: "Industrial Projects",
    short: "Factories that flow",
    blurb: "Vaastu planning for factories, warehouses and manufacturing units — production flow, safety and labour harmony.",
    image: industrial,
    intro:
      "Industrial Vaastu balances heavy machinery, raw material movement and human safety. Right-direction zoning improves output, reduces breakdowns and supports worker wellbeing.",
    covers: [
      "Plot orientation, gate and weighbridge positions",
      "Production area, raw material and finished goods zoning",
      "Heavy machinery, boiler and furnace placement",
      "Owner cabin, accounts office and workers' facilities",
    ],
    process: [
      { title: "Site survey", text: "Plot study, slope analysis and surrounding influences." },
      { title: "Master plan", text: "Vaastu-aligned layout for buildings, roads and utilities." },
      { title: "Pooja", text: "Bhumi pooja and Vaastu Shanti at the auspicious time." },
      { title: "Support", text: "Reviews at key construction milestones." },
    ],
    faqs: [
      { q: "Our factory is already built — can you help?", a: "Yes. We focus on internal zoning, machine placement and remedy-based corrections." },
    ],
  },
  {
    slug: "farmhouse-plot",
    to: "/services/farmhouse-plot",
    title: "Farmhouse or Plot",
    short: "Land that prospers",
    blurb: "Plot selection and farmhouse Vaastu — soil, slope, water bodies and orientation for a prosperous and peaceful estate.",
    image: farmhouse,
    intro:
      "The right plot can change a family's destiny. We evaluate land for shape, slope, soil, surrounding roads and natural elements before you invest.",
    covers: [
      "Plot shape, dimensions and road influences (veedhi shoolas)",
      "Soil testing reference and slope direction",
      "Borewell, well and water body placement",
      "Boundary wall, gate and farmhouse positioning",
    ],
    process: [
      { title: "Pre-purchase", text: "Vaastu evaluation before you commit to the plot." },
      { title: "Layout", text: "Master layout for farmhouse, garden, cattle shed and parking." },
      { title: "Construction", text: "Direction-wise guidance during the build." },
      { title: "Inauguration", text: "Bhumi pooja and Griha pravesham at auspicious time." },
    ],
    faqs: [
      { q: "Is plot shape really important?", a: "Yes. Square and rectangular plots are most favourable; irregular shapes need careful remedies." },
    ],
  },
  {
    slug: "restaurant",
    to: "/services/restaurant",
    title: "Restaurant",
    short: "Tables that fill",
    blurb: "Restaurant and cloud kitchen Vaastu — kitchen direction, seating flow and cash counter placement for steady footfall.",
    image: restaurant,
    intro:
      "In a restaurant, the kitchen is the heart and the cash counter is the lifeline. Correct Vaastu attracts customers, maintains hygiene-friendly flow and protects the owner's earnings.",
    covers: [
      "Kitchen, gas stove and chimney direction (Agneya)",
      "Dining seating layout and customer flow",
      "Cash counter, reception and billing area",
      "Restrooms, storage and signage",
    ],
    process: [
      { title: "Concept", text: "Align Vaastu with brand, cuisine and capacity." },
      { title: "Layout", text: "Floor plan optimisation and remedy plan for fit-out." },
      { title: "Opening", text: "Vaastu pooja before the restaurant opens its doors." },
    ],
    faqs: [
      { q: "Can Vaastu help a struggling restaurant?", a: "Often yes — repositioning the cash counter, kitchen elements and entrance can revive footfall." },
    ],
  },
  {
    slug: "hospital",
    to: "/services/hospital",
    title: "Hospital Project",
    short: "Healing by design",
    blurb: "Hospitals and clinics designed with Vaastu — operation theatres, patient wards and consultation rooms that support healing.",
    image: hospital,
    intro:
      "A healing space must itself be in balance. Hospital Vaastu carefully positions operation theatres, ICUs, pharmacies and patient wards to support recovery and reduce stress.",
    covers: [
      "Operation theatre, ICU and emergency block direction",
      "Patient wards, consultation rooms and waiting area",
      "Pharmacy, laboratory and administration",
      "Mortuary, biomedical waste and utility zoning",
    ],
    process: [
      { title: "Master plan", text: "Vaastu-aligned block planning with the architect." },
      { title: "Department zoning", text: "Direction-wise placement of clinical departments." },
      { title: "Audit", text: "Audit of existing hospitals and corrective remedies." },
    ],
    faqs: [
      { q: "Does Vaastu apply to small clinics too?", a: "Absolutely. Even a single-room clinic benefits from correct seating, entrance and equipment direction." },
    ],
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
) as Record<string, ServiceData>;
