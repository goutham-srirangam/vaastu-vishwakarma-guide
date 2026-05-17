import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Youtube, Quote, Calendar } from "lucide-react";
import founder from "@/assets/vastu-purusha.png";
import about from "@/assets/about.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import { SERVICES } from "@/data/services";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQList } from "@/components/FAQList";
import { safeFetch, imgUrl } from "@/lib/sanity";

type HomeDoc = {
  heroEyebrow?: string; heroTitle?: string; heroSubtitle?: string; heroImage?: unknown;
  aboutEyebrow?: string; aboutTitle?: string; aboutHighlight?: string;
  aboutBody1?: string; aboutBody2?: string; aboutImage?: unknown; aboutBadgeYears?: string;
  servicesTitle?: string;
  historyTitle?: string; historyBody1?: string; historyBody2?: string;
  stats?: { _key: string; k: string; v: string }[];
  processItems?: { _key: string; title: string; description: string }[];
  testimonials?: { _key: string; name: string; role: string; text: string }[];
  faqs?: { _key: string; q: string; a: string }[];
};

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
  loader: async () => {
    const doc = await safeFetch<HomeDoc>(`*[_id == "homePage"][0]`);
    return { home: doc };
  },
  staleTime: 30_000,
  component: Index,
});

const HOME_FAQS = [
  { q: "How do I apply Vaastu to a home that is already built?", a: "Most existing homes are corrected through layout adjustments, colour and element placement, mirrors, yantras and shastra-based remedies — without any major demolition. A Shailyodhar at the Brahmasthan is often the most powerful starting point." },
  { q: "Can Vaastu be applied to an apartment or flat?", a: "Yes. We focus on energising the entrance and Brahmasthan, fixing seating and bedroom directions, and using non-structural remedies. We do not recommend altering the kitchen or toilet plumbing in a flat — the building's pipelines remain shared, so the effort is rarely worthwhile." },
  { q: "How do I know my home has Vaastu dosha?", a: "Common signs include disturbed sleep, frequent arguments between family members, recurring health issues, financial blocks and unusual incidents concentrated in one zone of the home." },
  { q: "Where should the main door be placed?", a: "Auspicious pads on the east wall are Jayant and Indra; on the south wall, Gruhakshat; on the west, Pushpadant and Varun; and on the north, Mukhya Bhallat and Soma. We confirm the right one based on your plot." },
  { q: "Where should the kitchen and toilet be placed?", a: "The kitchen sits best in the Agneya (south-east) corner. Toilets should avoid Agneya (south-east) and Ishanya (north-east); other corners can be used with proper care." },
  { q: "Where should the locker or wealth zone go?", a: "Lockers do well placed against the north wall, west wall, south-west or south-east — facing north for the door so it opens towards the wealth direction." },
  { q: "Which direction should I face while sitting or working?", a: "North and east are most beneficial — for study, work and even while using the washroom. Facing south is generally avoided for long working sessions." },
  { q: "What are the top three things to check before buying a home?", a: "Sufficient natural sunlight, proper cross-ventilation and a clear, unobstructed Brahmasthan. Also confirm there is no toilet on the south-east (Agneya) corner." },
  { q: "Do you offer remote / online consultation?", a: "Yes. Share your floor plan, directional photographs and a compass reading and we can guide you anywhere in the world." },
  { q: "Will Vaastu conflict with my architect's design?", a: "Not at all. We collaborate with your architect — most modern designs can be made fully Vaastu-compliant with thoughtful adjustments." },
];

const STATS = [
  { k: "1500+", v: "Cases Completed" },
  { k: "20+", v: "Years in Vaastu Shastra" },
  { k: "500+", v: "Students Trained" },
  { k: "2000+", v: "Site Visits" },
];

const PROCESS = [
  { n: "1", t: "Consultation", d: "Initial discussion to understand your space, goals and concerns." },
  { n: "2", t: "Site Visit", d: "On-site or remote evaluation of directions, layout and surroundings." },
  { n: "3", t: "Plan Analysis", d: "Detailed review of your floor plan against the Vaastu Purusha Mandala." },
  { n: "4", t: "Remedial Solution", d: "Practical, shastra-based remedies tailored to your home or business." },
];

const TESTIMONIALS = [
  { name: "Ramesh K.", role: "Homeowner, Hyderabad", text: "After the consultation our home felt different within weeks. The pooja room placement made a real change in family peace." },
  { name: "Lakshmi P.", role: "Restaurant Owner, Vijayawada", text: "Footfall improved noticeably after we corrected the cash counter and kitchen direction. Practical, clear guidance throughout." },
  { name: "Suresh M.", role: "Builder, Vizag", text: "Honest, traditional and respectful of the architect's vision. Our residential project sold faster than we expected." },
];

const BLOG = [
  { tag: "Residence", date: "May 02, 2026", title: "What is Vaastu Shastra? A beginner's guide to Indian sacred architecture." },
  { tag: "Apartment", date: "Apr 18, 2026", title: "How to correct Vaastu dosha in a flat without breaking any walls." },
  { tag: "Workplace", date: "Mar 27, 2026", title: "Vaastu for your home office: simple changes that improve focus and income." },
];

const PARTNERS = ["Saanvi Builders", "Sri Krishna Estates", "Annapurna Foods", "Vasudha Realty", "Aravind Hospitals", "Padmaja Constructions", "Kamala Hotels", "Ganga Industries"];

function Index() {
  const { home } = Route.useLoaderData();
  const h = home ?? {};
  const stats = h.stats?.length ? h.stats : STATS.map((s, i) => ({ _key: `s${i}`, ...s }));
  const processItems = h.processItems?.length
    ? h.processItems
    : PROCESS.map((p, i) => ({ _key: `p${i}`, title: p.t, description: p.d }));
  const testimonials = h.testimonials?.length ? h.testimonials : TESTIMONIALS.map((t, i) => ({ _key: `t${i}`, ...t }));
  const faqs = h.faqs?.length ? h.faqs : HOME_FAQS.map((f, i) => ({ _key: `f${i}`, ...f }));
  const heroImageUrl = imgUrl(h.heroImage, founder, 1200);
  const aboutImageUrl = imgUrl(h.aboutImage, about, 1200);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" /> {h.heroEyebrow ?? "ॐ Vaastu Shastra"}
            </p>
            <h1 className="font-script text-5xl leading-[1.05] text-secondary md:text-7xl">
              {h.heroTitle ?? "Providing Harmony And Balance In Life Through Vaastushastra…"}
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              {h.heroSubtitle ?? "We help families and businesses create spaces that nurture well-being, prosperity and peace — guided by the timeless principles of Vaastu Shastra."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
              >
                Get Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.youtube.com/@vishwakarmateluguvastu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-cream px-6 py-3 text-sm font-semibold text-secondary transition hover:bg-secondary hover:text-secondary-foreground"
              >
                <Youtube className="h-4 w-4" /> Watch on YouTube
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-temple-gradient opacity-10 blur-3xl" />
            <img
              src={heroImageUrl}
              alt="Vishwakarma Telugu Vaastu — portrait of the poojari"
              className="mx-auto h-auto w-full max-w-md object-contain md:max-w-lg"
              width={1024}
              height={1280}
            />
          </div>
        </div>
      </section>

      {/* ABOUT THE FOUNDER */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 z-0 hidden h-2/3 w-2/3 rounded-2xl bg-temple-gradient opacity-20 md:block" />
            <img
              src={aboutImageUrl}
              alt="Vaastu workshop and consultation"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative z-10 rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute -right-3 top-6 z-20 hidden rounded-xl bg-primary px-5 py-3 text-primary-foreground shadow-xl md:block">
              <div className="font-display text-2xl">{h.aboutBadgeYears ?? "20+ Years"}</div>
              <div className="text-xs uppercase tracking-widest opacity-90">Of Devotion</div>
            </div>
          </div>
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" /> {h.aboutEyebrow ?? "About The Founder"}
            </p>
            <h2 className="font-display text-3xl leading-tight text-secondary md:text-4xl">
              {h.aboutTitle ?? "Vaastu Shastra Acharya —"} <br />
              <span className="text-primary">{h.aboutHighlight ?? "Vishwakarma Telugu Vaastu"}</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground whitespace-pre-line">
              {h.aboutBody1 ?? "For over two decades, our practice has been devoted to keeping authentic Vaastu Shastra alive in everyday Telugu households and businesses."}
            </p>
            <p className="mt-4 text-base text-muted-foreground whitespace-pre-line">
              {h.aboutBody2 ?? "Our work spans Vaastu education, residential, commercial, industrial, farmhouse, restaurant and hospital projects across the Telugu states and beyond."}
            </p>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:opacity-90"
            >
              Discover More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" /> Our Services
            </p>
            <h2 className="font-display text-3xl text-secondary md:text-4xl">
              Vaastu Shastra Is A Finger <br /> Pointing At Reality
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} s={{ to: s.to, title: s.title, blurb: s.blurb, image: s.image }} />
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY + STATS */}
      <section className="relative overflow-hidden bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" /> Our History
            </p>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              Vaastushastra: Architectural Harmony for Prosperous Living
            </h2>
            <p className="mt-5 text-secondary-foreground/85">
              Vaastu Shastra is the ancient Hindu science of architecture. It blends
              the five elements, eight directions and the cosmic order into the design
              of a building so that the people who live and work inside it experience
              health, wealth and peace.
            </p>
            <p className="mt-4 text-secondary-foreground/85">
              Its origins trace back to the Atharvaveda and Sthapatya Veda, refined by
              sages over millennia. Our work is to bring those time-tested principles
              into the homes, offices and projects of today.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {STATS.map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-accent/30 bg-secondary-foreground/5 p-6 text-center backdrop-blur"
              >
                <div className="font-display text-4xl text-accent md:text-5xl">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-secondary-foreground/80">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="text-center">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" /> Our Work Process
          </p>
          <h2 className="font-display text-3xl text-secondary md:text-4xl">
            A Simple And Effective <br /> Four Step Process
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {PROCESS.map((p) => (
            <div
              key={p.n}
              className="relative rounded-2xl border border-gold/40 bg-card p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute -top-5 left-1/2 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-temple-gradient font-display text-lg text-primary-foreground shadow-lg">
                {p.n}
              </div>
              <h3 className="mt-3 font-display text-xl text-secondary">{p.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <SectionHeading
            center
            eyebrow="Frequently Asked Questions"
            title="FAQ"
            description="Quick answers to the questions families and business owners ask us most often. For anything specific to your home or project, please reach out directly."
          />
          <div className="mt-10">
            <FAQList items={HOME_FAQS} />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="text-center">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" /> Testimonials
          </p>
          <h2 className="font-display text-3xl text-secondary md:text-4xl">
            What People Are Saying <br /> About Our Services
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="relative flex h-full flex-col rounded-2xl border border-gold/40 bg-card p-7 shadow-sm"
            >
              <Quote className="h-8 w-8 text-primary/70" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 border-t border-gold/30 pt-4">
                <div className="font-display text-lg text-secondary">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-8">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              YouTube Channel
            </p>
            <h2 className="font-display text-3xl md:text-4xl">
              Watch Vaastu lessons in Telugu
            </h2>
            <p className="mt-4 text-secondary-foreground/85">
              Hundreds of free videos covering home Vaastu, business Vaastu, plot
              selection, remedies and live Q&amp;A — directly from our YouTube channel.
            </p>
            <a
              href="https://www.youtube.com/@vishwakarmateluguvastu"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <Youtube className="h-4 w-4" /> Visit @vishwakarmateluguvastu
            </a>
          </div>
          <div className="aspect-video overflow-hidden rounded-2xl border border-accent/30 shadow-2xl">
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

      {/* BLOG TEASER */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="text-center">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" /> Latest Blog
          </p>
          <h2 className="font-display text-3xl text-secondary md:text-4xl">
            Stories And Insights From <br /> Our Vaastu Practice
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[g1, g2, g3].map((img, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-2xl border border-gold/40 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-primary">
                  <span>{BLOG[i].tag}</span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-3 w-3" /> {BLOG[i].date}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg leading-snug text-secondary">
                  {BLOG[i].title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="border-y border-gold/30 bg-cream py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" /> Our Trusted Partners
            </p>
            <h2 className="font-display text-2xl text-secondary md:text-3xl">
              Families, builders and brands we have served
            </h2>
          </div>
          <div className="relative mt-10 overflow-hidden">
            <div className="flex animate-[marquee_30s_linear_infinite] gap-12 whitespace-nowrap">
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <span
                  key={i}
                  className="font-display text-xl text-muted-foreground/70"
                >
                  ❖ {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="overflow-hidden rounded-3xl bg-temple-gradient p-10 text-center text-primary-foreground shadow-xl md:p-16">
          <h2 className="font-script text-4xl md:text-5xl">
            Begin your Vaastu journey today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
            Whether it's a new home, a growing business, or a plot you're considering —
            let us guide you with authentic Vaastu Shastra rooted in tradition.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3 text-sm font-semibold text-secondary-foreground hover:opacity-90"
          >
            Contact the Poojari <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
