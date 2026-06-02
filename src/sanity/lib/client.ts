import { createClient, type QueryParams } from "next-sanity";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "qnaco2kw";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2026-02-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Public read-only client. CDN serves cached content fast.
  useCdn: true,
  perspective: "published",
});

/**
 * Time-based ISR wrapper for Sanity fetches.
 * Pages revalidate every 60 seconds — content changes appear within a minute
 * of publishing in Studio without needing webhooks.
 */
export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate,
      tags,
    },
  });
}
