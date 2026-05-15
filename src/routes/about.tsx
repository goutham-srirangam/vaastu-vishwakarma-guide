import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Clock, Award, Users, Building2 } from "lucide-react";
import founder from "@/assets/about-founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Vishwakarma Telugu Vaastu" },
      { name: "description", content: "Meet the founder of Vishwakarma Telugu Vaastu and learn about our journey, philosophy and approach to authentic Vaastu Shastra." },
      { property: "og:title", content: "About — Vishwakarma Telugu Vaastu" },
      { property: "og:description", content: "Founder, philosophy and journey behind Vishwakarma Telugu Vaastu." },
      { property: "og:image", content: founder },
    ],
    links: [{ rel: "canonical", href: "https://vaastu-vishwakarma-guide.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      {/* Founder */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gold/30 shadow-xl">
            <img src={founder} alt="Founder of Vishwakarma Telugu Vaastu" width={1024} height={768} className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="About The Founder"
              title="Vastushastra Expert in Real Estate"
              align="left"
            />
            <h3 className="mt-2 font-display text-2xl text-secondary md:text-3xl">
              Sri <span className="text-gradient-saffron">Vishwakarma Poojari</span>
            </h3>
            <p className="mt-6 text-foreground/80">
              With more than three decades of immersion in the real estate, construction
              and Vaastu Shastra disciplines, our founder has guided hundreds of
              families and businesses across Andhra Pradesh, Telangana and beyond. His
              practice is rooted in classical Telugu Vaastu traditions and refined
              through years of on-site work with architects, builders and homeowners.
            </p>
            <p className="mt-4 text-foreground/80">
              Initially focused on optimal solutions for homes, he has since broadened
              his work to include Vaastu Education, Residential, Commercial,
              Industrial, Farmhouse, Plot, Restaurant and Hospital projects — helping
              clients create spaces that are peaceful, harmonious and visually
              appealing.
            </p>
            <p className="mt-4 text-foreground/80">
              He continues to teach in Telugu and English so that authentic Vaastu
              knowledge stays accessible to the next generation of consultants.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-gold/40 bg-cream px-5 py-4 shadow-sm">
              <Clock className="h-6 w-6 text-primary" />
              <span className="font-display text-xl text-secondary">30+ Years Of Legacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-cream/60 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our History" title="Vastushastra: Architectural Harmony for Prosperous Living" align="left" />
            <p className="mt-6 text-foreground/80">
              By incorporating a number of principles and practises into the
              conventional Hindu system of architecture known as Vastushastra, a
              harmonious and balanced living situation is meant to be achieved.
            </p>
            <p className="mt-4 text-foreground/80">
              The origins of Vastushastra can be traced back to ancient texts such as
              the Vedas, specifically Vishwakarma Prakash, Mayamatam, Rajavallabha,
              Samarangana Sutradhara and Manushyalaya Chandrika. It is believed that
              Vastushastra evolved as a discipline to promote well-being, prosperity
              and spiritual harmony by aligning architectural design with the cosmic
              forces and natural elements.
            </p>
            <p className="mt-4 text-foreground/80">
              It is an ancient Indian architectural science that aims to create
              balanced living spaces. It considers factors like layout, orientation
              and proportions, emphasizing harmony between the five elements.
              Vastushastra also considers cardinal directions and their energies,
              ensuring positive flow — a discipline practiced worldwide that guides
              the construction of spaces.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 self-center">
            <Stat icon={<Building2 className="h-6 w-6" />} value="200+" label="Projects Consulted" />
            <Stat icon={<Award className="h-6 w-6" />} value="30+" label="Years of Practice" />
            <Stat icon={<Users className="h-6 w-6" />} value="160+" label="Students Trained" />
            <Stat icon={<Clock className="h-6 w-6" />} value="200+" label="Pooja Ceremonies" />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Our Philosophy" title="Tradition. Science. Practical wisdom." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { t: "Authentic", d: "Every recommendation is rooted in classical Vaastu Shastra texts and the lived tradition of Telugu vaastu practice." },
            { t: "Practical", d: "We focus on remedies that work — often without demolition — so that change is achievable for every family and business." },
            { t: "Compassionate", d: "We listen first. Each home, factory or hospital is unique, and our guidance is tailored to your people and goals." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-gold/30 bg-card p-6 shadow-sm">
              <h4 className="font-display text-xl text-secondary">{c.t}</h4>
              <p className="mt-3 text-sm text-foreground/75">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-gold/30 bg-card p-6 text-center shadow-sm">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-temple-gradient text-primary-foreground">
        {icon}
      </div>
      <div className="mt-4 font-display text-3xl text-gradient-saffron">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}
