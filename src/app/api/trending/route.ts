import { NextResponse } from "next/server";
import { resolveContent, type ContentType } from "@/lib/analytics/content";

/**
 * Feeds the "Most read this week" module from PostHog.
 *
 * Reads the `trending_content` PostHog SQL endpoint and joins the returned
 * slugs against the local content index to get titles. This is the loop
 * closing: reading behaviour measured by analytics becomes a feature of the
 * site itself.
 *
 * The personal API key stays on the server, which is the reason this is a route
 * rather than a client-side fetch.
 */

const POSTHOG_API_HOST = "https://eu.posthog.com";
const PROJECT_ID = process.env.POSTHOG_PROJECT_ID ?? "57977";

// Matches the endpoint's own 6-hour data_freshness_seconds, so we are not
// asking PostHog for numbers it is still serving from cache.
export const revalidate = 21600;

export interface TrendingItem {
  content_id: string;
  content_type: ContentType;
  title: string;
  views: number;
  rank: number;
}

/** PostHog returns rows as arrays plus a column list; map them by name. */
function rowsToObjects(
  columns: unknown,
  results: unknown,
): Array<Record<string, unknown>> {
  if (!Array.isArray(results)) return [];
  if (!Array.isArray(columns)) {
    return results.filter((r): r is Record<string, unknown> => typeof r === "object" && r !== null);
  }
  const names = columns.map(String);
  return results.map((row) => {
    if (!Array.isArray(row)) return (row ?? {}) as Record<string, unknown>;
    const out: Record<string, unknown> = {};
    names.forEach((name, i) => {
      out[name] = row[i];
    });
    return out;
  });
}

export async function GET() {
  const key = process.env.POSTHOG_PERSONAL_API_KEY;

  // No key configured is a normal state, not an error: the module simply does
  // not render. Keeps local development and previews working untouched.
  if (!key) {
    return NextResponse.json({ items: [] as TrendingItem[] });
  }

  try {
    const response = await fetch(
      `${POSTHOG_API_HOST}/api/projects/${PROJECT_ID}/endpoints/trending_content/run`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
        next: { revalidate },
      },
    );

    if (!response.ok) {
      return NextResponse.json({ items: [] as TrendingItem[] });
    }

    const payload = await response.json();
    const rows = rowsToObjects(payload?.columns, payload?.results);

    const items: TrendingItem[] = [];
    for (const row of rows) {
      const contentId = typeof row.content_id === "string" ? row.content_id : null;
      const resolved = resolveContent(contentId ?? undefined);
      // Drop anything that is no longer in the content index — a slug that was
      // renamed or removed should not render as a dead link.
      if (!contentId || !resolved) continue;

      items.push({
        content_id: contentId,
        content_type: resolved.contentType,
        title: resolved.item.title,
        views: Number(row.views ?? 0),
        rank: items.length + 1,
      });
    }

    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ items: [] as TrendingItem[] });
  }
}
