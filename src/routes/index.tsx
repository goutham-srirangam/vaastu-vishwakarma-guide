import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Home as HomeIcon, Sparkles, ShieldCheck, Youtube, ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import { SERVICES } from "@/data/services";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQList } from "@/components/FAQList";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishwakarma Telugu Vaastu — Authentic Vaastu Shastra Consultancy" },
      { name: "description", content: "Traditional Vaastu Shastra guidance for homes, offices, factories, farmhouses, restaurants and hospitals." },
      { property: "og:title", content: "Vishwakarma Telugu Vaastu" },
      { property: "og:description", content: "Authentic Vaastu consultancy rooted in tradition." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Vishwakarma Telugu Vaastu",
          description: "Authentic Vaastu Shastra consultancy for homes and businesses.",
          areaServed: "India",
          sameAs: ["https://www.youtube.com/@vishwakarmateluguvastu"],
        }),
      },
    ],
  }),
  component: Index,
});

const HOME_FAQS = [
  { q: "What is Vaastu Shastra?", a: "Vaastu Shastra is an ancient Indian science of architecture that aligns buildings with the five elements and directional energies, supporting health, prosperity and peace." },
  { q: "Do I need to demolish my house to follow Vaastu?", a: "Almost never. The vast majority of Vaastu corrections are achieved through changes in usage, layout, colours, and shastra-based remedies — not demolition." },
  { q: "Does Vaastu apply to a rented home or flat?", a: "Yes. We provide non-structural remedies that work beautifully in rented homes, apartments and PG accommodations." },
  { q: "How long does a Vaastu consultation take?", a: "A standard residential consultation takes 1–2 hours on site, followed by a detailed report within a week." },
  { q: "Do you offer remote / online consultation?", a: "Yes. With your floor plan, photographs and a directional reading, we can guide you anywhere in the world." },
  { q: "What is your fee structure?", a: "Fees depend on the size and type of property. Please reach out via the contact page for a personalised quote." },
  { q: "Will Vaastu conflict with my architect's design?", a: "We work alongside your architect — most modern designs can be made fully Vaastu-compliant with thoughtful adjustments." },
  { q: "When is the best time to begin construction?", a: "We help identify auspicious muhurtams for bhumi pooja, foundation laying and griha pravesham based on your horoscope." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={hero}
            alt="Brass diya on rangoli — symbol of vaastu harmony"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/60 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
          <div className="max-w-2xl text-secondary-foreground">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-secondary/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-accent">
              <span>ॐ</span> Authentic Vaastu Shastra
            </p>
            <h1 className="font-display text-4xl leading-tight md:text-6xl">
              Ancient Vaastu wisdom <br /> for modern spaces.
            </h1>
            <p className="mt-5 max-w-xl text-base text-secondary-foreground/85 md:text-lg">
              Vishwakarma Telugu Vaastu helps families and businesses align their homes,
              offices and projects with the timeless principles of Vaastu Shastra — for
              prosperity, harmony and peace of mind.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg transition hover:opacity-90"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.youtube.com/@vishwakarmateluguvastu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-accent/60 bg-secondary/30 px-5 py-3 text-sm font-medium text-accent backdrop-blur transition hover:bg-secondary/60"
              >
                <Youtube className="h-4 w-4" /> Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border-2 border-accent/40" />
            <img
              src={about}
              alt="Vaastu poojari portrait"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="About the Poojari"
              title="A lifelong devotion to Vaastu Shastra"
              description="Decades of disciplined study and on-site practice — applying the timeless rules of the Vaastu Purusha Mandala to today's homes and businesses."
            />
            <p className="mt-6 text-base text-muted-foreground">
              Vishwakarma Telugu Vaastu is dedicated to keeping authentic Vaastu Shastra
              alive in everyday life. From plot selection to griha pravesham, every
              recommendation is rooted in classical scriptures and adapted with care for
              modern construction, urban plots and contemporary lifestyles.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                { k: "1000+", v: "Consultations" },
                { k: "20+", v: "Years experience" },
                { k: "All", v: "South India" },
              ].map((s) => (
                <div key={s.v} className="rounded-lg border border-gold/40 bg-card p-4">
                  <div className="font-display text-2xl text-secondary">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            center
            eyebrow="Our Services"
            title="Vaastu for every space you build"
            description="From a single-room home to a multi-acre factory, every space deserves to be aligned with the energies of nature."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} s={{ to: s.to, title: s.title, blurb: s.blurb, image: s.image }} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Vaastu */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <SectionHeading
          center
          eyebrow="Why Vaastu"
          title="Aligning the seen and the unseen"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            { icon: HomeIcon, t: "Family harmony", d: "Spaces that nurture relationships and well-being." },
            { icon: Sparkles, t: "Prosperity", d: "Direction-aligned spaces support growth and abundance." },
            { icon: ShieldCheck, t: "Peace of mind", d: "Confidence in every major decision about your space." },
            { icon: Compass, t: "Balanced energy", d: "All five elements working in harmony around you." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-xl border border-gold/30 bg-card p-6">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-temple-gradient text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl text-secondary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* YouTube */}
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-8">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">YouTube Channel</p>
            <h2 className="font-display text-3xl md:text-4xl">Watch Vaastu lessons in Telugu</h2>
            <p className="mt-4 text-secondary-foreground/85">
              Hundreds of free videos covering home Vaastu, business Vaastu, plot selection,
              remedies and live Q&A — directly from our YouTube channel.
            </p>
            <a
              href="https://www.youtube.com/@vishwakarmateluguvastu"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              <Youtube className="h-4 w-4" /> Visit @vishwakarmateluguvastu
            </a>
          </div>
          <div className="aspect-video overflow-hidden rounded-xl border border-accent/30 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed?listType=user_uploads&list=vishwakarmateluguvastu"
              title="Vishwakarma Telugu Vaastu YouTube"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 md:px-8">
        <SectionHeading
          center
          eyebrow="Questions"
          title="Frequently asked questions"
          description="Everything you wanted to ask about working with a Vaastu poojari."
        />
        <div className="mt-10">
          <FAQList items={HOME_FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="overflow-hidden rounded-2xl bg-temple-gradient p-10 text-center text-primary-foreground shadow-xl md:p-16">
          <h2 className="font-display text-3xl md:text-4xl">Begin your Vaastu journey today</h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/90">
            Whether it's a new home, a growing business or a plot you're considering — let us
            guide you with authentic Vaastu Shastra.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground hover:opacity-90"
          >
            Contact the Poojari <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
