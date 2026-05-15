import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const PROJECTS = [
  { img: p1, category: "Residential", title: "Independent Home, Hyderabad", desc: "Full Vaastu consultation from plot evaluation to griha pravesham for a three-storey family home." },
  { img: p2, category: "Commercial", title: "Corporate Office, Vijayawada", desc: "Floor-plate audit, MD cabin orientation and seating chart for a 120-member office." },
  { img: p3, category: "Industrial", title: "Manufacturing Unit, Visakhapatnam", desc: "Machinery placement, power-room zoning and Brahmasthan corrections for a mid-scale factory." },
  { img: p4, category: "Farmhouse", title: "Estate Farmhouse, Guntur", desc: "Plot evaluation, slope study, borewell direction and master layout for a private estate." },
  { img: p5, category: "Restaurant", title: "Fine-dine Restaurant, Hyderabad", desc: "Kitchen Agneya, cash counter and seating flow optimised before the opening." },
  { img: p6, category: "Hospital", title: "Multi-speciality Hospital, Warangal", desc: "Operation theatre, ICU and consultation-room zoning aligned with shastra." },
];

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Our Portfolio — Vishwakarma Telugu Vaastu" },
      { name: "description", content: "A selection of residential, commercial, industrial, farmhouse, restaurant and hospital Vaastu projects guided by Vishwakarma Telugu Vaastu." },
      { property: "og:title", content: "Our Portfolio" },
      { property: "og:description", content: "Selected Vaastu projects across homes, offices, factories, farmhouses, restaurants and hospitals." },
      { property: "og:image", content: p1 },
    ],
    links: [{ rel: "canonical", href: "https://vaastu-vishwakarma-guide.lovable.app/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Our Portfolio"
        title="Selected projects, real outcomes"
        description="A small window into the homes, offices and institutions we have had the privilege to guide. Every project carries a story of family, business and faith."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-sm transition hover:shadow-xl">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                {p.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl text-secondary">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/75">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-temple-gradient p-8 text-center text-primary-foreground md:p-12">
        <h3 className="font-display text-2xl md:text-3xl">Have a project in mind?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/90">
          From a single-room flat to a multi-speciality hospital — share your floor
          plan and we will guide you with shastra-rooted, practical recommendations.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-secondary shadow-md transition hover:opacity-90"
        >
          Get a Consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
