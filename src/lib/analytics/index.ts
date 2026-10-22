/**
 * Client-side analytics surface. Import from "@/lib/analytics" in components.
 *
 * Server-only helpers live in "./server" and are deliberately not re-exported
 * here — pulling node:crypto and posthog-node into a client bundle would fail
 * the build.
 */

export {
  track,
  markSubscriber,
  registerGlobalContext,
  setEarlyAccessEnrollment,
  captureSurveyResponse,
} from "./track";
export { scrubPII, emailDomain } from "./privacy";
export {
  resolveContent,
  isValidDetailRoute,
  contentTypeOf,
  contentTitleOf,
  allContentIds,
  TAXONOMY_BY_PATH,
} from "./content";
export type { ContentType, ContentItem, ResolvedContent } from "./content";
export type { EventMap, EventName, Surface, PersonProperties, PersonPropertiesOnce } from "./events";
