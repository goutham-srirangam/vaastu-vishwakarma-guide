import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export type ServiceItem = {
  to: string;
  title: string;
  blurb: string;
  image: string;
};

export const SERVICES: ServiceItem[] = [];

export function ServiceCard({ s }: { s: ServiceItem }) {
  return (
    <Link
      to={s.to}
      className="group overflow-hidden rounded-xl border border-gold/30 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={s.image}
          alt={s.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl text-secondary">{s.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
          Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
