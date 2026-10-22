"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useFeatureFlagEnabled } from "posthog-js/react";
import { track, isValidDetailRoute, type ContentType } from "@/lib/analytics";

interface UXLawCardProps {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode;
  category: string;
  /**
   * Which taxonomy this card belongs to. The component is shared by /,
   * /frameworks and /mental-models, so without this the three are
   * indistinguishable in the event stream.
   */
  contentType: ContentType;
  /** 0-based index within the current page of results. */
  position: number;
  pageNumber: number;
  resultsTotal: number;
}

export function UXLawCard({
  id,
  title,
  description,
  bgColor,
  icon,
  category,
  contentType,
  position,
  pageNumber,
  resultsTotal,
}: UXLawCardProps) {
  const isDetailsEnabled = useFeatureFlagEnabled("CardDetails") === true;

  const reportClick = () => {
    track("content_card_clicked", {
      content_type: contentType,
      content_id: id,
      content_title: title,
      content_category: category,
      position,
      page_number: pageNumber,
      results_total: resultsTotal,
      destination_valid: isValidDetailRoute(id),
    });
  };

  const body = (
    <Card className="overflow-hidden h-full border-none transition-transform duration-300 hover:-translate-y-1 min-h-[240px] bg-zinc-800">
      <div className={`p-8 ${bgColor} aspect-square flex items-center justify-center`}>
        <div className="w-24 h-24 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="mb-2">
          <span className="text-xs text-muted-foreground uppercase">{category}</span>
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );

  if (!isDetailsEnabled) {
    return (
      <div className="block h-full" data-attr="content-card" onClick={reportClick}>
        {body}
      </div>
    );
  }

  return (
    <Link href={`/${id}`} className="block h-full" data-attr="content-card" onClick={reportClick}>
      {body}
    </Link>
  );
}
