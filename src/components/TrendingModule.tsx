"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { track, type ContentType } from "@/lib/analytics";

interface TrendingItem {
  content_id: string;
  content_type: ContentType;
  title: string;
  views: number;
  rank: number;
}

/**
 * "Most read this week", fed by the trending_content PostHog SQL endpoint.
 *
 * Renders nothing until there is something to show — no data, no key, or a
 * failed request all collapse to an empty module rather than an error or a
 * placeholder, so the page is never worse off for this being here.
 */
export function TrendingModule() {
  const [items, setItems] = useState<TrendingItem[]>([]);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/trending")
      .then((r) => (r.ok ? r.json() : { items: [] }))
      .then((data) => {
        if (!cancelled && Array.isArray(data?.items)) setItems(data.items);
      })
      .catch(() => {
        // Trending is decoration; a failure here should be invisible.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto mb-16">
      <h2 className="text-xs uppercase text-muted-foreground mb-4 tracking-wide">
        Most read this week
      </h2>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {items.map((item) => (
          <li key={item.content_id}>
            <Link
              href={`/${item.content_id}`}
              className="text-sm hover:underline"
              data-attr="trending-item"
              onClick={() => {
                track("trending_module_clicked", {
                  content_id: item.content_id,
                  content_type: item.content_type,
                  rank: item.rank,
                });
              }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
