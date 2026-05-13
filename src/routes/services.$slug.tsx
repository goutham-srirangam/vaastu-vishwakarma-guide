import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SERVICE_BY_SLUG } from "@/data/services";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQList } from "@/components/FAQList";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICE_BY_SLUG[params.slug];
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return {};
    return {
      meta: [
        { title: `${s.title} — Vishwakarma Telugu Vaastu` },
        { name: "description", content: s.blurb },
        { property: "og:title", content: `${s.title} — Vaastu` },
        { property: "og:description", content: s.blurb },
        { property: "og:image", content: s.image },
        { property: "og:url", content: s.to },
      ],
      links: [{ rel: "canonical", href: s.to }],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl text-secondary">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-primary underline">
        Back to all services
      </Link>
    </div>
  ),
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">{s.short}</p>
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-secondary-foreground md:text-5xl">
            {s.title}
          </h1>
          <p className="mt-4 max-w-2xl text-secondary-foreground/85">{s.blurb}</p>
        </div>
      </section>

      {/* Intro + Covers */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Overview" title="What this service is" />
            <p className="mt-6 text-muted-foreground">{s.intro}</p>
          </div>
          <div>
            <SectionHeading eyebrow="What we cover" title="Areas of focus" />
            <ul className="mt-6 space-y-3">
              {s.covers.map((c) => (
                <li key={c} className="flex gap-3 text-foreground/90">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-temple-gradient text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading center eyebrow="Process" title="How we work with you" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {s.process.map((p, i) => (
              <div key={p.title} className="relative rounded-xl border border-gold/30 bg-card p-6">
                <div className="font-display text-3xl text-primary">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 font-display text-xl text-secondary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {s.faqs.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-20 md:px-8">
          <SectionHeading center eyebrow="Questions" title="Common questions" />
          <div className="mt-10">
            <FAQList items={s.faqs} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="overflow-hidden rounded-2xl bg-temple-gradient p-10 text-center text-primary-foreground shadow-xl md:p-14">
          <h2 className="font-display text-3xl">Ready to get started?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/90">
            Reach out for a personalised consultation tailored to your project and timeline.
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
