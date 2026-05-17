import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Clock, Award, Users, Building2 } from "lucide-react";
import founderFallback from "@/assets/about-founder.jpg";
import { safeFetch, imgUrl } from "@/lib/sanity";

type AboutDoc = {
  heroEyebrow?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  founderName?: string;
  founderRole?: string;
  founderImage?: unknown;
  founderBio1?: string;
  founderBio2?: string;
  founderBio3?: string;
  values?: { _key: string; title: string; description: string }[];
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Vishwakarma Telugu Vaastu" },
      { name: "description", content: "Meet the founder of Vishwakarma Telugu Vaastu and learn about our journey, philosophy and approach to authentic Vaastu Shastra." },
      { property: "og:title", content: "About — Vishwakarma Telugu Vaastu" },
      { property: "og:description", content: "Founder, philosophy and journey behind Vishwakarma Telugu Vaastu." },
      { property: "og:image", content: founderFallback },
    ],
    links: [{ rel: "canonical", href: "https://vaastu-vishwakarma-guide.lovable.app/about" }],
  }),
  loader: async () => {
    const doc = await safeFetch<AboutDoc>(`*[_id == "aboutPage"][0]`);
    return { about: doc };
  },
  staleTime: 30_000,
  component: AboutPage,
});

const DEFAULT_VALUES = [
  { _key: "v1", title: "Authentic", description: "Every recommendation is rooted in classical Vaastu Shastra texts and the lived tradition of Telugu vaastu practice." },
  { _key: "v2", title: "Practical", description: "We focus on remedies that work — often without demolition — so that change is achievable for every family and business." },
  { _key: "v3", title: "Compassionate", description: "We listen first. Each home, factory or hospital is unique, and our guidance is tailored to your people and goals." },
];

function AboutPage() {
  const { about } = Route.useLoaderData();
  const a = about ?? {};
  const founderImg = imgUrl(a.founderImage, founderFallback, 1024);
  const values = a.values?.length ? a.values : DEFAULT_VALUES;

  return (
    <div>
      {/* Founder */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gold/30 shadow-xl">
            <img src={founderImg} alt={a.founderName ?? "Founder of Vishwakarma Telugu Vaastu"} width={1024} height={768} className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow={a.heroEyebrow ?? "About The Founder"}
              title={a.heroTitle ?? "Vastushastra Expert in Real Estate"}
              center={false}
            />
            <h3 className="mt-2 font-display text-2xl text-secondary md:text-3xl">
              {a.founderRole ? `${a.founderRole} — ` : "Sri "}
              <span className="text-gradient-saffron">{a.founderName ?? "Vishwakarma Poojari"}</span>
            </h3>
            <p className="mt-6 text-foreground/80 whitespace-pre-line">
              {a.founderBio1 ?? "With more than three decades of immersion in the real estate, construction and Vaastu Shastra disciplines, our founder has guided hundreds of families and businesses."}
            </p>
            {(a.founderBio2 || true) && (
              <p className="mt-4 text-foreground/80 whitespace-pre-line">
                {a.founderBio2 ?? "Initially focused on optimal solutions for homes, he has since broadened his work to include Vaastu Education, Residential, Commercial, Industrial, Farmhouse, Plot, Restaurant and Hospital projects."}
              </p>
            )}
            {(a.founderBio3 || true) && (
              <p className="mt-4 text-foreground/80 whitespace-pre-line">
                {a.founderBio3 ?? "He continues to teach in Telugu and English so that authentic Vaastu knowledge stays accessible to the next generation of consultants."}
              </p>
            )}

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
            <SectionHeading eyebrow="Our History" title="Vastushastra: Architectural Harmony for Prosperous Living" center={false} />
            <p className="mt-6 text-foreground/80 whitespace-pre-line">
              {a.heroSubtitle ?? "By incorporating a number of principles and practises into the conventional Hindu system of architecture known as Vastushastra, a harmonious and balanced living situation is meant to be achieved."}
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

      {/* Philosophy / Values */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Our Philosophy" title="Tradition. Science. Practical wisdom." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((c) => (
            <div key={c._key} className="rounded-2xl border border-gold/30 bg-card p-6 shadow-sm">
              <h4 className="font-display text-xl text-secondary">{c.title}</h4>
              <p className="mt-3 text-sm text-foreground/75 whitespace-pre-line">{c.description}</p>
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
