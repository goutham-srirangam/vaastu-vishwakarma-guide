// One-off seed: writes initial Home, About and Services content to Sanity.
// Run with: bun scripts/seed-sanity.mjs
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "4qfk9tqu",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

const home = {
  _id: "homePage",
  _type: "homePage",
  heroEyebrow: "ॐ Vaastu Shastra",
  heroTitle: "Providing Harmony And Balance In Life Through Vaastushastra…",
  heroSubtitle:
    "We help families and businesses create spaces that nurture well-being, prosperity and peace — guided by the timeless principles of Vaastu Shastra.",
  aboutEyebrow: "About The Founder",
  aboutTitle: "Vaastu Shastra Acharya —",
  aboutHighlight: "Vishwakarma Telugu Vaastu",
  aboutBody1:
    "For over two decades, our practice has been devoted to keeping authentic Vaastu Shastra alive in everyday Telugu households and businesses. From plot selection to griha pravesham, every recommendation is rooted in classical scriptures — adapted with care for modern construction and urban realities.",
  aboutBody2:
    "Our work spans Vaastu education, residential, commercial, industrial, farmhouse, restaurant and hospital projects across the Telugu states and beyond, helping each space become peaceful, harmonious and prosperous.",
  aboutBadgeYears: "20+ Years",
  servicesTitle: "Vaastu Shastra Is A Finger Pointing At Reality",
  historyTitle: "Vaastushastra: Architectural Harmony for Prosperous Living",
  historyBody1:
    "Vaastu Shastra is the ancient Hindu science of architecture. It blends the five elements, eight directions and the cosmic order into the design of a building so that the people who live and work inside it experience health, wealth and peace.",
  historyBody2:
    "Its origins trace back to the Atharvaveda and Sthapatya Veda, refined by sages over millennia. Our work is to bring those time-tested principles into the homes, offices and projects of today.",
  stats: [
    { _key: "s1", k: "1500+", v: "Cases Completed" },
    { _key: "s2", k: "20+", v: "Years in Vaastu Shastra" },
    { _key: "s3", k: "500+", v: "Students Trained" },
    { _key: "s4", k: "2000+", v: "Site Visits" },
  ],
  processItems: [
    { _key: "p1", title: "Consultation", description: "Initial discussion to understand your space, goals and concerns." },
    { _key: "p2", title: "Site Visit", description: "On-site or remote evaluation of directions, layout and surroundings." },
    { _key: "p3", title: "Plan Analysis", description: "Detailed review of your floor plan against the Vaastu Purusha Mandala." },
    { _key: "p4", title: "Remedial Solution", description: "Practical, shastra-based remedies tailored to your home or business." },
  ],
  testimonials: [
    { _key: "t1", name: "Ramesh K.", role: "Homeowner, Hyderabad", text: "After the consultation our home felt different within weeks. The pooja room placement made a real change in family peace." },
    { _key: "t2", name: "Lakshmi P.", role: "Restaurant Owner, Vijayawada", text: "Footfall improved noticeably after we corrected the cash counter and kitchen direction. Practical, clear guidance throughout." },
    { _key: "t3", name: "Suresh M.", role: "Builder, Vizag", text: "Honest, traditional and respectful of the architect's vision. Our residential project sold faster than we expected." },
  ],
  faqs: [
    { _key: "f1", q: "How do I apply Vaastu to a home that is already built?", a: "Most existing homes are corrected through layout adjustments, colour and element placement, mirrors, yantras and shastra-based remedies — without any major demolition. A Shailyodhar at the Brahmasthan is often the most powerful starting point." },
    { _key: "f2", q: "Can Vaastu be applied to an apartment or flat?", a: "Yes. We focus on energising the entrance and Brahmasthan, fixing seating and bedroom directions, and using non-structural remedies." },
    { _key: "f3", q: "How do I know my home has Vaastu dosha?", a: "Common signs include disturbed sleep, frequent arguments, recurring health issues, financial blocks and unusual incidents concentrated in one zone of the home." },
    { _key: "f4", q: "Where should the main door be placed?", a: "Auspicious pads on the east wall are Jayant and Indra; on the south wall, Gruhakshat; on the west, Pushpadant and Varun; and on the north, Mukhya Bhallat and Soma." },
    { _key: "f5", q: "Where should the kitchen and toilet be placed?", a: "The kitchen sits best in the Agneya (south-east) corner. Toilets should avoid Agneya (south-east) and Ishanya (north-east)." },
    { _key: "f6", q: "Do you offer remote / online consultation?", a: "Yes. Share your floor plan, directional photographs and a compass reading and we can guide you anywhere in the world." },
  ],
};

const about = {
  _id: "aboutPage",
  _type: "aboutPage",
  heroEyebrow: "About Us",
  heroTitle: "Carrying a sacred craft into modern homes",
  heroSubtitle:
    "Vishwakarma Telugu Vaastu is the practice of an Acharya who has spent over two decades guiding families and businesses to spaces of harmony, prosperity and peace.",
  founderName: "Vishwakarma Telugu Vaastu",
  founderRole: "Vaastu Shastra Acharya",
  founderBio1:
    "Trained in classical Sanskrit Vaastu texts and refined through thousands of on-site evaluations, the Acharya's practice blends scripture with the practical demands of modern Telugu homes — apartments, independent houses, factories and hospitals.",
  founderBio2:
    "Every recommendation begins with the Vaastu Purusha Mandala and the five elements. From there, layout, light, ventilation, colour and shastra-based remedies are tuned to your specific space.",
  founderBio3:
    "Beyond consultations, the Acharya teaches the next generation of Vaastu consultants through workshops and one-to-one mentorship.",
  values: [
    { _key: "v1", title: "Rooted in shastra", description: "Every recommendation traces back to classical Vaastu texts — never trends or guesswork." },
    { _key: "v2", title: "Respectful of design", description: "We collaborate with architects and homeowners; remedies rarely require demolition." },
    { _key: "v3", title: "Practical & kind", description: "Clear explanations in Telugu and English so the family understands every step." },
  ],
};

import { readFileSync } from "node:fs";
const servicesSrc = readFileSync("src/data/services.ts", "utf8");
// Minimal parse: import the runtime module via dynamic import after stripping image imports? Easier: redeclare here.

const services = [
  "vaastu-education", "residential", "commercial", "industrial",
  "farmhouse-plot", "restaurant", "hospital",
];

async function run() {
  console.log("Seeding home + about…");
  await client.createOrReplace(home);
  await client.createOrReplace(about);
  console.log("Done.");
  console.log("Services left for the client to create/edit in Studio (fallback content used until then).");
}

run().catch((e) => { console.error(e); process.exit(1); });
