"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { track, setEarlyAccessEnrollment, type Surface } from "@/lib/analytics";

interface EarlyAccessCTAProps {
  /** PostHog Early Access feature key. */
  featureKey: string;
  label: string;
  confirmation?: string;
  surface: Surface;
  variant?: "default" | "outline";
  size?: "default" | "sm";
}

/**
 * A waitlist button backed by a PostHog Early Access feature.
 *
 * Replaces the buttons on /book and /cards that rendered but did nothing. A
 * dead CTA is a measurement blind spot: people clicking it is exactly the
 * demand signal needed to decide whether the feature is worth building, and
 * enrolment records who to tell when it ships.
 */
export function EarlyAccessCTA({
  featureKey,
  label,
  confirmation = "You're on the list",
  surface,
  variant = "default",
  size = "default",
}: EarlyAccessCTAProps) {
  const [enrolled, setEnrolled] = useState(false);

  if (enrolled) {
    return (
      <Button variant={variant} size={size} disabled>
        {confirmation} <Check className="ml-2 h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      data-attr={`early-access-${featureKey}`}
      onClick={() => {
        const applied = setEarlyAccessEnrollment(featureKey, true);
        track("cta_clicked", {
          cta_id: `early-access-${featureKey}`,
          cta_label: label,
          surface,
          is_functional: true,
        });
        track("early_access_requested", {
          feature_key: featureKey,
          surface,
          enrolled: applied,
        });
        setEnrolled(true);
      }}
    >
      {label} <ArrowUpRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
