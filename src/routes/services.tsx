import { createFileRoute } from "@tanstack/react-router";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { fetchServiceCards, type ServiceCardData } from "@/lib/services-cms";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Vishwakarma Telugu Vaastu" },
      { name: "description", content: "Vaastu services across residential, commercial, industrial, farmhouse, restaurant, hospital projects and Vaastu education." },
      { property: "og:title", content: "Vaastu Services" },
      { property: "og:description", content: "Vaastu for homes, offices, factories, farmhouses, restaurants and hospitals." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  loader: async () => ({ services: await fetchServiceCards() }),
  staleTime: 30_000,
  component: ServicesIndex,
});

function ServicesIndex() {
  const { services } = Route.useLoaderData();
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Our Services"
        title="Vaastu Shastra for every kind of space"
        description="Each space — a home, an office, a hospital — has its own energy. Choose the service that fits your project."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s: ServiceCardData) => (
          <ServiceCard key={s.slug} s={{ to: s.to, title: s.title, blurb: s.blurb, image: s.image }} />
        ))}
      </div>
    </section>
  );
}
