import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Youtube, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vishwakarma Telugu Vaastu" },
      { name: "description", content: "Reach out to Vishwakarma Telugu Vaastu for authentic Vaastu Shastra consultation across South India." },
      { property: "og:title", content: "Contact — Vishwakarma Telugu Vaastu" },
      { property: "og:description", content: "Get in touch for a Vaastu consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const CARDS = [
  { icon: Phone, title: "Phone", value: "+91 73309 61291", note: "Mon–Sat, 9am – 7pm" },
  { icon: MessageCircle, title: "WhatsApp", value: "+91 73309 61291", note: "Quick replies" },
  { icon: Mail, title: "Email", value: "vishvakarmavastu12@gmail.com", note: "We respond within 24 hours" },
  { icon: MapPin, title: "Service Area", value: "Andhra Pradesh & Telangana", note: "On-site and remote consultations" },
];

function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch with the Poojari"
        description="Share your project details and we'll guide you on the next steps. Replace the placeholder details below with your actual contact information."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map(({ icon: Icon, title, value, note }) => (
          <div key={title} className="rounded-xl border border-gold/30 bg-card p-6">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-temple-gradient text-primary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg text-secondary">{title}</h3>
            <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{note}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <Youtube className="h-8 w-8 text-accent" />
          <h3 className="mt-4 font-display text-2xl">Watch on YouTube</h3>
          <p className="mt-3 text-secondary-foreground/85">
            Hundreds of free videos in Telugu covering home Vaastu, business Vaastu, plot
            selection and remedies — direct from our channel.
          </p>
          <a
            href="https://www.youtube.com/@vishwakarmateluguvastu"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <Youtube className="h-4 w-4" /> @vishwakarmateluguvastu
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gold/30 bg-card">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed?listType=user_uploads&list=vishwakarmateluguvastu"
              title="YouTube channel"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-5">
            <p className="text-sm text-muted-foreground">
              Subscribe to stay updated with weekly Vaastu lessons and live Q&A sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
