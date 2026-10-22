import { uxLaws } from "@/data/ux-laws";
import { frameworks } from "@/data/frameworks";
import { mentalModels } from "@/data/mental-models";

/**
 * The three content taxonomies, as one addressable namespace.
 *
 * Every content id is a URL slug served by /[contentId], so this module is the
 * single place that knows which slugs exist and what kind of thing each one is.
 * Both the router and the analytics layer read from it, which is what keeps
 * "does this link work" and "did we report that this link works" from drifting
 * apart.
 */

export type ContentType = "law" | "framework" | "mental_model";

/** The shape every entry in src/data/* shares. */
export interface ContentItem {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  category: string;
  icon: () => JSX.Element;
}

export interface ResolvedContent {
  contentType: ContentType;
  item: ContentItem;
}

/** Surfaces a content card can be clicked from, keyed by the route that lists it. */
export const TAXONOMY_BY_PATH: Record<string, ContentType> = {
  "/": "law",
  "/frameworks": "framework",
  "/mental-models": "mental_model",
};

const COLLECTIONS: ReadonlyArray<[ContentType, ReadonlyArray<ContentItem>]> = [
  ["law", uxLaws as ReadonlyArray<ContentItem>],
  ["framework", frameworks as ReadonlyArray<ContentItem>],
  ["mental_model", mentalModels as ReadonlyArray<ContentItem>],
];

const index: Map<string, ResolvedContent> = (() => {
  const map = new Map<string, ResolvedContent>();
  for (const [contentType, items] of COLLECTIONS) {
    for (const item of items) {
      // First collection wins. Laws are registered first because their URLs
      // predate the other two taxonomies and may already be indexed.
      if (!map.has(item.id)) {
        map.set(item.id, { contentType, item });
      }
    }
  }
  return map;
})();

/** Resolve a slug to its content, or null if no taxonomy claims it. */
export function resolveContent(id: string | undefined): ResolvedContent | null {
  if (!id) return null;
  return index.get(id) ?? null;
}

/**
 * Whether /{id} will render a detail page rather than a 404.
 *
 * Used by UXLawCard to report `destination_valid`, so the broken-link rate is
 * measurable from the event stream rather than inferred from 404 pageviews.
 */
export function isValidDetailRoute(id: string | undefined): boolean {
  return resolveContent(id) !== null;
}

export function contentTypeOf(id: string | undefined): ContentType | null {
  return resolveContent(id)?.contentType ?? null;
}

/** All slugs, for generateStaticParams and for sanity checks. */
export function allContentIds(): string[] {
  return Array.from(index.keys());
}

export function contentTitleOf(id: string): string | null {
  return resolveContent(id)?.item.title ?? null;
}
