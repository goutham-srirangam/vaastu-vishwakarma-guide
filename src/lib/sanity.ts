import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

export const sanityClient = createClient({
  projectId: "4qfk9tqu",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource | undefined | null) {
  if (!source) return null;
  try {
    return builder.image(source);
  } catch {
    return null;
  }
}

/** Resolve a Sanity image to a plain URL, or return the static fallback. */
export function imgUrl(source: unknown, fallback: string, width = 1200): string {
  const b = urlFor(source as SanityImageSource | null | undefined);
  if (!b) return fallback;
  try {
    return b.width(width).auto("format").url();
  } catch {
    return fallback;
  }
}

/** Safe fetch that returns null on failure so the UI falls back to static content. */
export async function safeFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (e) {
    console.warn("[sanity] fetch failed, using fallback", e);
    return null;
  }
}
