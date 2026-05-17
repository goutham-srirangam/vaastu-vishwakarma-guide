import { safeFetch, imgUrl } from "@/lib/sanity";
import { SERVICES, type ServiceData } from "@/data/services";

type SanityServiceCard = {
  slug?: string;
  title?: string;
  short?: string;
  blurb?: string;
  image?: unknown;
};

export type ServiceCardData = {
  slug: string;
  to: string;
  title: string;
  short: string;
  blurb: string;
  image: string;
};

/**
 * Fetch the services list from Sanity and merge over the local fallback list.
 * The local SERVICES array drives order and ensures every service shows even
 * before any Sanity document is created. Sanity fields override per-slug.
 */
export async function fetchServiceCards(): Promise<ServiceCardData[]> {
  const cms = await safeFetch<SanityServiceCard[]>(
    `*[_type == "service"]{ "slug": slug.current, title, short, blurb, image }`,
  );
  const bySlug = new Map<string, SanityServiceCard>();
  (cms ?? []).forEach((c) => {
    if (c?.slug) bySlug.set(c.slug, c);
  });
  return SERVICES.map((s: ServiceData): ServiceCardData => {
    const c = bySlug.get(s.slug);
    return {
      slug: s.slug,
      to: s.to,
      title: c?.title ?? s.title,
      short: c?.short ?? s.short,
      blurb: c?.blurb ?? s.blurb,
      image: imgUrl(c?.image, s.image, 1000),
    };
  });
}
