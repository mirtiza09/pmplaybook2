/**
 * PII scrubbing for outbound events.
 *
 * The site has one field that ever holds personal data — the newsletter email —
 * and it used to be sent as an event property. The contract in ./events.ts now
 * forbids that, but a contract only covers the code we wrote. This hook is the
 * runtime backstop: it also catches autocaptured form values, URL query
 * strings, and anything a future call site gets wrong.
 */

const EMAIL_PATTERN = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;

/** Property keys that must never carry a value, whatever it looks like. */
const DENIED_KEYS = new Set(["email", "e_mail", "mail", "emailAddress", "email_address"]);

/**
 * Keys whose values are passed through untouched.
 *
 * `$set` / `$set_once` are person properties, which is where email legitimately
 * lives.
 *
 * The `$survey_*` keys matter just as much here: this app captures its
 * subscriber list as PostHog survey responses, so the address in
 * `$survey_response` is the payload rather than telemetry. Scrubbing it would
 * silently destroy the subscriber list — the exact failure this hook exists to
 * prevent, pointed at the one place the address has to survive.
 */
const PRESERVED_KEYS = new Set([
  "$set",
  "$set_once",
  "$survey_id",
  "$survey_name",
  "$survey_response",
  "$survey_question_id",
  "$survey_question_type",
]);

const REDACTED = "[redacted]";

function scrubValue(value: unknown): unknown {
  if (typeof value === "string") {
    return value.replace(EMAIL_PATTERN, REDACTED);
  }
  if (Array.isArray(value)) {
    return value.map(scrubValue);
  }
  if (value && typeof value === "object") {
    return scrubProperties(value as Record<string, unknown>);
  }
  return value;
}

function scrubProperties(properties: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(properties)) {
    if (PRESERVED_KEYS.has(key)) {
      out[key] = value;
    } else if (DENIED_KEYS.has(key)) {
      out[key] = REDACTED;
    } else {
      out[key] = scrubValue(value);
    }
  }
  return out;
}

/**
 * posthog-js `before_send` hook. Returning the event sends it; returning null
 * would drop it. We only ever sanitize — silently dropping events makes
 * ingestion gaps impossible to debug later.
 */
export function scrubPII<T extends { properties?: Record<string, unknown> } | null>(event: T): T {
  if (!event || !event.properties) return event;
  event.properties = scrubProperties(event.properties);
  return event;
}

/** The part of an address that is safe to segment on. */
export function emailDomain(email: string): string {
  const at = email.lastIndexOf("@");
  return at === -1 ? "unknown" : email.slice(at + 1).toLowerCase();
}
