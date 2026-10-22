import { PostHog } from "posthog-node";

/**
 * Server-side PostHog.
 *
 * Narrow on purpose: the only thing this app needs server-side is feature-flag
 * evaluation, so that the flag-gated /cards route can return a real 404 instead
 * of rendering a loading state and then deciding.
 *
 * There is no server-side capture here because subscribing does not go through
 * a server — /api/subscribe is deprecated and the newsletter survey holds the
 * subscriber list. If subscribing ever moves back to an API route, that is when
 * a capture helper and cookie-based identity stitching belong here.
 *
 * Note the host: the browser may be configured to use a reverse proxy, but a
 * relative path is meaningless here, so the server addresses PostHog directly.
 */

const POSTHOG_HOST = "https://eu.i.posthog.com";

let client: PostHog | null = null;

function getClient(): PostHog | null {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return null;

  if (!client) {
    client = new PostHog(key, {
      host: POSTHOG_HOST,
      // Serverless invocations can be frozen as soon as a response is returned,
      // so there is no safe window for background batching.
      flushAt: 1,
      flushInterval: 0,
    });
  }
  return client;
}

/**
 * Flag values for server rendering.
 *
 * Returns an empty object when PostHog is not configured or the lookup fails,
 * so a caller treats "no flags" as "flag off" rather than erroring.
 */
export async function getBootstrapFlags(
  distinctId: string,
): Promise<Record<string, string | boolean>> {
  const ph = getClient();
  if (!ph) return {};
  try {
    const flags = await ph.getAllFlags(distinctId);
    return flags ?? {};
  } catch {
    return {};
  }
}
