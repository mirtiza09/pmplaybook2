"use client";

import { useEffect, useRef } from "react";
import { track, type ContentType } from "@/lib/analytics";

interface ContentDetailTrackerProps {
  contentType: ContentType;
  contentId: string;
  contentTitle: string;
  contentCategory: string;
}

/**
 * Engagement tracking for a content detail page.
 *
 * Split out from the page itself so the page can stay a server component and
 * be prerendered for all 71 slugs. Renders nothing.
 */
export function ContentDetailTracker({
  contentType,
  contentId,
  contentTitle,
  contentCategory,
}: ContentDetailTrackerProps) {
  useEffect(() => {
    track("content_detail_viewed", {
      content_type: contentType,
      content_id: contentId,
      content_title: contentTitle,
      content_category: contentCategory,
    });
  }, [contentType, contentId, contentTitle, contentCategory]);

  // Dwell time, reported when the reader leaves. A pageview says they arrived;
  // this is the part that says whether they read anything.
  const openedAt = useRef(Date.now());
  useEffect(() => {
    const startedAt = openedAt.current;
    return () => {
      track("content_read_completed", {
        content_type: contentType,
        content_id: contentId,
        dwell_ms: Date.now() - startedAt,
      });
    };
  }, [contentType, contentId]);

  return null;
}
