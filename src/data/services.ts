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
  /** Optional second paragraph shown beneath the intro. */
  intro2?: string;
  /** Heading for the bullet list (e.g. "What we offer", "What you'll learn"). */
  offerHeading: string;
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
    blurb:
      "Become a confident Vaastu consultant — workshops and one-to-one classes covering authentic Vaastu Shastra in Telugu and English.",
    image: education,
    intro:
      "Learning Vaastu Shastra is the first step to a meaningful career as a Vaastu consultant. Our courses prepare you to read directions, study a floor plan, identify imbalances and recommend practical, shastra-based remedies for any home or workplace.",
    intro2:
      "Through structured theory, live case studies and on-site practice, you will learn to assess, align and transform spaces — helping individuals, families and businesses create environments that nurture health, relationships and prosperity.",
    offerHeading: "What you'll learn",
    covers: [
      "Qualities of the eight directions and the Vaastu Purusha Mandala",
      "Eleven types of Vaastu corrections — structural, behavioural, elemental, colour, mirrors, plants, pictures, yantras and more",
      "Exterior and interior Vaastu corrections for homes",
      "Office and workplace corrections",
      "Placement of yantras and shastra-based remedies",
      "Property evaluation and pre-purchase checklist",
      "Practical case studies, with a focus on remedies that avoid demolition",
    ],
    process: [
      { title: "Enroll", text: "Choose a beginner, intermediate or advanced track that matches your background." },
      { title: "Learn", text: "Live sessions in Telugu with English notes, plus reference material from classical texts." },
      { title: "Practice", text: "Hands-on case studies from real residential and commercial sites." },
      { title: "Certify", text: "Receive a certificate of completion with continued mentorship as you begin practice." },
    ],
    faqs: [
      { q: "Do I need an architecture background?", a: "No. Our courses are designed for everyone — homeowners, students, designers, builders and aspiring consultants." },
      { q: "Is the content in Telugu?", a: "Primary teaching is in Telugu, with English explanations and notes for wider accessibility." },
      { q: "Will I be able to consult after the course?", a: "Yes. The advanced track is built around real case studies and a final evaluation so you can begin consulting with confidence." },
    ],
  },
  {
    slug: "residential",
    to: "/services/residential",
    title: "Residential Projects",
    short: "Homes that nurture",
    blurb:
      "Vaastu consultation for new homes, flats, duplex houses and renovations — for peace, prosperity and family harmony.",
    image: residential,
    intro:
      "A home shapes the everyday energy of your family. We help align furniture, colours and natural materials with classical Vaastu principles so your home receives ample light and ventilation, has the main entrance in an auspicious direction, and keeps walkways free of obstruction and clutter.",
    intro2:
      "From plot selection to griha pravesham, every recommendation is rooted in shastra and adapted carefully for modern apartments, independent homes and renovations.",
    offerHeading: "What we cover",
    covers: [
      "Plot selection and pre-purchase Vaastu evaluation",
      "Bungalow and floor planning",
      "Plot entry and main door (bungalow entry) direction",
      "AAY calculation for the building, bed size and other proportions",
      "Dhan (wealth) zone and locker placement",
      "Water sources — overhead tank, borewell and underground tank",
      "Brahmasthan, pooja room and bedroom planning",
      "Kitchen, toilets and staircase positioning",
      "Practical remedies for existing homes — without major demolition",
    ],
    process: [
      { title: "Site visit", text: "On-site or remote evaluation with floor plan and compass readings." },
      { title: "Analysis", text: "Detailed Vaastu report against the Vaastu Purusha Mandala." },
      { title: "Recommendations", text: "Practical changes, layout suggestions and shastra-based remedies." },
      { title: "Pooja", text: "Vaastu Shanti pooja conducted at an auspicious muhurtam." },
    ],
    faqs: [
      { q: "Do I need to demolish my house?", a: "Almost never. Most issues are corrected through layout, usage and simple shastra-based remedies." },
      { q: "Can you advise for a rented flat?", a: "Yes. We provide non-structural remedies tailored to rented homes and apartments." },
      { q: "What are the top three Vaastu tips when buying a home?", a: "Sufficient sunlight, proper ventilation and a clear Brahmasthan. Also confirm that no toilet sits over the south-east (Agneya) corner." },
    ],
  },
  {
    slug: "commercial",
    to: "/services/commercial",
    title: "Commercial Projects",
    short: "Spaces that grow",
    blurb:
      "Offices, showrooms, retail stores and clinics aligned with Vaastu — for steady growth, focused teams and loyal customers.",
    image: commercial,
    intro:
      "Vaastu in a commercial space supports a healthy work environment, attracts positive energy and helps build a strong reputation for the business. Aligning the architecture and interiors with shastra turns the workplace into a hub of productivity and prosperity.",
    intro2:
      "We work with offices, showrooms, retail stores, clinics and small healthcare facilities, optimising layout, seating, lighting and the cash counter for sustained business success.",
    offerHeading: "What we cover",
    covers: [
      "Office layout, owner / MD cabin and seating direction",
      "Reception, conference rooms and workstations",
      "Pantry, break area and restrooms",
      "Electrical equipment and water elements (cooler, RO, fountain)",
      "Showroom entrance, display area and product placement",
      "Lighting, colour scheme and customer interaction zones",
      "Cash counter, billing and accounts placement",
      "Hospital and clinic spaces — entrance, reception and patient rooms",
      "Plants, greenery and brand signage",
    ],
    process: [
      { title: "Brief", text: "Understand the business, team size and growth goals." },
      { title: "Audit", text: "Full Vaastu audit of the floor plate and surroundings." },
      { title: "Plan", text: "Seating chart, zoning and remedies for the existing fit-out." },
      { title: "Review", text: "Follow-up visits during fit-out and after occupancy." },
    ],
    faqs: [
      { q: "We are leasing the space — is it still useful?", a: "Yes. Internal layout, seating and the cash counter can be optimised without any structural changes." },
      { q: "Can Vaastu help a struggling showroom?", a: "Often yes — repositioning the entrance flow, display zones and cash counter typically improves footfall and conversions." },
    ],
  },
  {
    slug: "industrial",
    to: "/services/industrial",
    title: "Industrial Projects",
    short: "Factories that flow",
    blurb:
      "Vaastu planning for factories, warehouses and manufacturing units — production flow, safety and labour harmony.",
    image: industrial,
    intro:
      "Industrial Vaastu balances heavy machinery, raw material movement and human safety. The orientation of equipment, choice of colours, use of natural materials, location of the administrative office and main entrance, clutter-free pathways and proper lighting and ventilation all shape how a factory performs.",
    intro2:
      "Right-direction zoning improves output, reduces breakdowns and supports worker wellbeing — across factories, warehouses and manufacturing units of every scale.",
    offerHeading: "What we cover",
    covers: [
      "Machinery placement and production flow",
      "Main entry and gate direction",
      "Marma points within the industrial plot",
      "Power arrangement — transformer, generator, panel rooms",
      "Water arrangement, borewell and overhead tank",
      "Septic / safety tank position",
      "Brahmasthan and central courtyard",
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
      { q: "How do I run my factory at full capacity?", a: "Energise the north, south-east and west zones for manufacturing, keep the Brahmasthan clear and protect the entrance from veedhi shoolas." },
    ],
  },
  {
    slug: "farmhouse-plot",
    to: "/services/farmhouse-plot",
    title: "Farmhouse or Plot",
    short: "Land that prospers",
    blurb:
      "Vaastu guidance for plots and farmhouses — soil, slope, water bodies and orientation for a prosperous and peaceful estate.",
    image: farmhouse,
    intro:
      "We provide complete Vaastu guidance for farmhouses and plots, beginning with a thorough analysis of size, shape, terrain and the surrounding natural elements. We assess the existing energy flow and identify imbalances that can be corrected for stronger long-term outcomes.",
    intro2:
      "Recommendations cover the placement of the building, entrances, water sources and storage, alongside landscaping advice for plants and trees that strengthen the overall energy balance.",
    offerHeading: "What we offer",
    covers: [
      "Initial Vaastu consultation and pre-purchase plot evaluation",
      "Plot shape, dimensions and road influences (veedhi shoolas)",
      "Map and master layout creation",
      "Borewell, well and water body placement",
      "Boundary wall, gate and farmhouse positioning",
      "Slope of land and direction of natural drainage",
      "Site / house inspection",
      "Vaastu remedies and landscaping guidance",
    ],
    process: [
      { title: "Pre-purchase", text: "Vaastu evaluation before you commit to the plot." },
      { title: "Layout", text: "Master layout for farmhouse, garden, cattle shed and parking." },
      { title: "Construction", text: "Direction-wise guidance during the build." },
      { title: "Inauguration", text: "Bhumi pooja and Griha pravesham at auspicious time." },
    ],
    faqs: [
      { q: "Is plot shape really important?", a: "Yes. Square and rectangular plots are most favourable; irregular shapes need careful remedies and sometimes a specific construction strategy." },
      { q: "Where should the slope of the land be?", a: "Ideally towards the north-east and east — this allows water and energy to flow in the most beneficial direction." },
    ],
  },
  {
    slug: "restaurant",
    to: "/services/restaurant",
    title: "Restaurant",
    short: "Tables that fill",
    blurb:
      "Restaurant and cloud-kitchen Vaastu — kitchen direction, seating flow and cash counter placement for steady footfall.",
    image: restaurant,
    intro:
      "The success of a restaurant or cafe rests not only on food and service, but on the ambience and energy of the space. We study the layout, seating, kitchen position and overall flow to find imbalances and align them for a positive dining experience.",
    intro2:
      "Applied with care, Vaastu turns a restaurant into a place that delights the senses, attracts repeat guests and protects the owner's earnings.",
    offerHeading: "Benefits you'll see",
    covers: [
      "Optimal customer satisfaction and comfort",
      "Positive energy dynamics throughout the space",
      "Boosted prosperity and steady footfall",
      "Healthier environment for staff and patrons",
      "A distinctive, memorable brand identity",
      "Kitchen, gas stove and chimney direction (Agneya)",
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
      { q: "Does this apply to a cloud kitchen too?", a: "Absolutely. The kitchen Agneya, cash zone and storage placement matter just as much without dine-in seating." },
    ],
  },
  {
    slug: "hospital",
    to: "/services/hospital",
    title: "Hospital Project",
    short: "Healing by design",
    blurb:
      "Hospitals and clinics designed with Vaastu — operation theatres, patient wards and consultation rooms that support healing.",
    image: hospital,
    intro:
      "A healing space must itself be in balance. Vaastu in a hospital project supports a healthy environment, draws in positive energy and builds the institution's reputation. Aligning architecture and interiors with shastra turns the hospital into a space that genuinely supports recovery.",
    intro2:
      "From operation theatres and ICUs to consultation rooms, pharmacies and patient wards, every department is positioned to reduce stress and support the work of doctors, staff and families.",
    offerHeading: "What we cover",
    covers: [
      "Entrance, reception and waiting areas",
      "Operation theatre, ICU and emergency block direction",
      "Patient rooms and recovery wards",
      "Doctors' consultation rooms and staff areas",
      "Diagnostic and laboratory zones",
      "Pharmacy, administration and billing",
      "Mortuary, biomedical waste and utility zoning",
      "Support facilities — kitchen, dining, parking",
    ],
    process: [
      { title: "Master plan", text: "Vaastu-aligned block planning with the architect." },
      { title: "Department zoning", text: "Direction-wise placement of clinical departments." },
      { title: "Audit", text: "Audit of existing hospitals and corrective remedies." },
    ],
    faqs: [
      { q: "Does Vaastu apply to small clinics too?", a: "Absolutely. Even a single-room clinic benefits from correct seating, entrance and equipment direction." },
      { q: "Can you work alongside our architect?", a: "Yes. We collaborate with your design team to ensure clinical efficiency and Vaastu compliance work together." },
    ],
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
) as Record<string, ServiceData>;
