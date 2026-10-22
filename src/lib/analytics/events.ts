import type { ContentType } from "./content";

/**
 * The event contract.
 *
 * This map is the single source of truth for what may be sent to PostHog. The
 * track() helper is typed against it, so an event that is not declared here —
 * or one sent with the wrong properties — does not compile. That is the whole
 * point: taxonomies rot when any component can invent a name at the call site.
 *
 * Conventions:
 *   - event names are snake_case and read `object_action` (past tense)
 *   - property names are snake_case
 *   - no personally identifying values. Email belongs in *person* properties,
 *     never in an event property. See ./privacy.ts
 */

/** Where in the UI an interaction happened. Keep this list closed. */
export type Surface =
  | "header_nav"
  | "footer"
  | "card_grid"
  | "content_detail"
  | "trending_module"
  | "book_page"
  | "cards_page"
  | "not_found";

export interface EventMap {
  // ---------------------------------------------------------------- content
  content_card_clicked: {
    content_type: ContentType;
    content_id: string;
    content_title: string;
    content_category: string;
    /** 0-based index within the rendered page of results. */
    position: number;
    page_number: number;
    results_total: number;
    /**
     * Whether /{content_id} actually resolves. False means this click lands on
     * a 404 — the metric that makes the broken-link bug visible.
     */
    destination_valid: boolean;
  };

  content_detail_viewed: {
    content_type: ContentType;
    content_id: string;
    content_title: string;
    content_category: string;
  };

  content_not_found: {
    attempted_slug: string;
    /** Path the visitor came from, when the browser reports one. */
    referrer_path: string | null;
    likely_cause: "unknown_slug" | "flag_gated_route" | "external_link";
  };

  content_scroll_depth: {
    content_type: ContentType | null;
    content_id: string | null;
    depth_pct: 25 | 50 | 75 | 100;
  };

  content_read_completed: {
    content_type: ContentType;
    content_id: string;
    dwell_ms: number;
  };

  // ------------------------------------------------------------- navigation
  navigation_clicked: {
    nav_section: string;
    nav_path: string;
    /** True for nav items that only exist behind a feature flag. */
    is_flagged_item: boolean;
  };

  category_filter_changed: {
    taxonomy: ContentType;
    from_category: string;
    to_category: string;
    results_total: number;
  };

  pagination_navigated: {
    taxonomy: ContentType | null;
    direction: "next" | "previous";
    from_page: number;
    to_page: number;
    total_pages: number;
  };

  // ------------------------------------------------------------- newsletter
  newsletter_form_submitted: {
    surface: Surface;
    /** Domain only. The address itself never enters the event stream. */
    email_domain: string;
  };

  /**
   * Recorded once the subscriber's address has been handed to the newsletter
   * survey. Capture is fire-and-forget, so this means "submitted", not
   * "confirmed stored" — it will sit ~1:1 with newsletter_form_submitted until
   * subscribing goes through a server that can confirm the write.
   */
  newsletter_subscribed: {
    surface: Surface;
    email_domain: string;
  };

  newsletter_subscribe_failed: {
    surface: Surface;
    error_code: "validation" | "storage" | "network" | "http_error" | "unknown";
    http_status: number | null;
  };

  // --------------------------------------------------------------- feedback
  feedback_opened: { surface: Surface };
  feedback_submitted: { surface: Surface; response_length: number };
  feedback_dismissed: { surface: Surface; response_length: number };

  // ------------------------------------------------------------ CTAs and EA
  cta_clicked: {
    cta_id: string;
    cta_label: string;
    surface: Surface;
    /** False for buttons that currently do nothing — measures latent demand. */
    is_functional: boolean;
  };

  early_access_requested: {
    feature_key: string;
    surface: Surface;
    enrolled: boolean;
  };

  // ---------------------------------------------------------------- outbound
  outbound_link_clicked: {
    href: string;
    link_domain: string;
    surface: Surface;
  };

  // --------------------------------------------------------------- trending
  trending_module_clicked: {
    content_id: string;
    content_type: ContentType | null;
    rank: number;
  };
}

export type EventName = keyof EventMap;

/**
 * Person properties. Set via identifySubscriber(), not via capture().
 * `email` lives here deliberately — person properties are the right home for
 * PII, the event stream is not.
 */
export interface PersonProperties {
  email: string;
  email_domain: string;
  is_subscriber: boolean;
}

export interface PersonPropertiesOnce {
  first_subscribed_at: string;
}
