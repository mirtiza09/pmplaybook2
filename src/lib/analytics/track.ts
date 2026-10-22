import posthog from "posthog-js";
import type { EventMap, EventName, PersonProperties, PersonPropertiesOnce } from "./events";

/**
 * The only way this app sends anything to PostHog.
 *
 * No component calls posthog.capture() directly any more. Going through a
 * typed wrapper means the contract in ./events.ts is enforced at compile time,
 * and it gives us one place to put the "is PostHog even loaded" guard that
 * every call site used to repeat.
 */

function isReady(): boolean {
  return typeof window !== "undefined" && posthog.__loaded === true;
}

/**
 * Capture a declared event.
 *
 * Silently no-ops when PostHog has not initialised — which is the normal case
 * in local development, where NEXT_PUBLIC_POSTHOG_KEY is intentionally empty.
 */
export function track<K extends EventName>(name: K, properties: EventMap[K]): void {
  if (!isReady()) return;
  posthog.capture(name, properties as Record<string, unknown>);
}

/**
 * Record that this person is a subscriber.
 *
 * Deliberately `setPersonProperties` rather than `identify`: there is no login
 * here, so there is no second identity to merge into. Person profiles are set
 * to `always`, so properties attach to the anonymous person just fine, and the
 * Subscribers cohort matches on `is_subscriber`.
 *
 * The address lands as a *person* property, which is its correct home — the
 * event stream is not.
 */
export function markSubscriber(
  set: PersonProperties,
  setOnce: PersonPropertiesOnce,
): void {
  if (!isReady()) return;
  posthog.setPersonProperties(set, setOnce);
}

interface SurveyResponseOptions {
  surveyName?: string;
  questionId?: string;
  questionType?: string;
  /** Extra non-reserved properties to send alongside the response. */
  extra?: Record<string, unknown>;
}

/**
 * Submit a response to a PostHog survey.
 *
 * `survey sent` is a reserved PostHog event name with reserved `$survey_*`
 * properties — it is what makes a response show up under Surveys. It therefore
 * sits outside the app's own event contract rather than being bent to fit it,
 * and privacy.ts exempts those properties from scrubbing because for the
 * newsletter survey the response *is* the subscriber record.
 *
 * Fire-and-forget: posthog.capture does not report delivery, so a caller
 * cannot treat a clean return as a confirmed write.
 */
export function captureSurveyResponse(
  surveyId: string,
  response: string,
  options: SurveyResponseOptions = {},
): void {
  if (!isReady()) return;
  posthog.capture("survey sent", {
    ...options.extra,
    $survey_id: surveyId,
    $survey_name: options.surveyName,
    $survey_response: response,
    $survey_question_id: options.questionId,
    $survey_question_type: options.questionType,
  });
}

/** Register properties that should ride along on every subsequent event. */
export function registerGlobalContext(): void {
  if (!isReady()) return;
  posthog.register({
    app_version: process.env.NEXT_PUBLIC_APP_VERSION ?? "unknown",
    build_sha: process.env.NEXT_PUBLIC_BUILD_SHA ?? "local",
  });
}

/**
 * Opt a person in or out of an Early Access feature.
 *
 * Returns the enrolment state actually applied, so the caller can report it.
 */
export function setEarlyAccessEnrollment(featureKey: string, enrolled: boolean): boolean {
  if (!isReady()) return false;
  posthog.updateEarlyAccessFeatureEnrollment(featureKey, enrolled);
  return enrolled;
}
