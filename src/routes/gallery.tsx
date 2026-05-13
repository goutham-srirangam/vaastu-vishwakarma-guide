import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import residential from "@/assets/residential.jpg";
import farmhouse from "@/assets/farmhouse.jpg";
import restaurant from "@/assets/restaurant.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Vishwakarma Telugu Vaastu" },
      { name: "description", content: "Moments from our Vaastu consultations, poojas and projects across South India." },
      { property: "og:title", content: "Gallery — Vishwakarma Telugu Vaastu" },
      { property: "og:description", content: "Vaastu consultations, poojas and projects." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const ITEMS = [
  { src: g1, label: "Pooja room blessings" },
  { src: g4, label: "Vaastu Shanti pooja" },
  { src: residential, label: "Residential project" },
  { src: g2, label: "Mandala on stone" },
  { src: g5, label: "Floor plan analysis" },
  { src: farmhouse, label: "Farmhouse Vaastu" },
  { src: g3, label: "Temple architecture" },
  { src: restaurant, label: "Restaurant interior" },
  { src: g6, label: "Diya and marigolds" },
];

function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Gallery"
        title="Moments of devotion and design"
        description="A glimpse into the rituals, projects and craft that define our Vaastu practice."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((it, i) => (
          <figure
            key={i}
            className="group relative overflow-hidden rounded-xl border border-gold/30 bg-card shadow-sm"
          >
            <img
              src={it.src}
              alt={it.label}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-secondary/90 to-transparent p-4 text-sm text-secondary-foreground opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              {it.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
