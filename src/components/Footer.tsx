"use client";

import React, { useState } from "react";
import { FeedbackDialog } from "./FeedbackDialog";
import {
  track,
  markSubscriber,
  captureSurveyResponse,
  emailDomain,
} from "@/lib/analytics";

const AUTHOR_URL = "https://www.mirtiza.com/";

/**
 * Subscriber capture runs through a PostHog survey, not an API route.
 *
 * /api/subscribe is deprecated in this app: the survey's responses *are* the
 * subscriber list. That is why the raw address is sent as the survey response —
 * it is the payload, not telemetry — and why the PII scrubber in
 * @/lib/analytics/privacy.ts deliberately leaves survey fields alone.
 */
const NEWSLETTER_SURVEY_ID =
  process.env.NEXT_PUBLIC_POSTHOG_NEWSLETTER_SURVEY_ID ||
  "0195f226-683f-0000-b4b8-1ae42348f8fe";
const NEWSLETTER_SURVEY_QUESTION_ID = "0dde9169-8e2b-49f7-b309-3698bff0a3c2";

function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const domain = emailDomain(email);
    setPending(true);
    setMessage("Submitting...");

    // Intent. Note that capture is fire-and-forget, so this deployment cannot
    // distinguish an attempt from a confirmed write — the two events below are
    // effectively 1:1. They separate only once subscribing is server-confirmed.
    track("newsletter_form_submitted", { surface: "footer", email_domain: domain });

    try {
      captureSurveyResponse(NEWSLETTER_SURVEY_ID, email, {
        surveyName: "newsletter-subscription",
        questionId: NEWSLETTER_SURVEY_QUESTION_ID,
        questionType: "open",
        extra: { subscribed_at: new Date().toISOString(), location: "footer" },
      });

      track("newsletter_subscribed", { surface: "footer", email_domain: domain });

      // The address belongs on the person, not in the event stream. This is
      // what the Subscribers cohort (is_subscriber = true) matches on.
      markSubscriber(
        { email, email_domain: domain, is_subscriber: true },
        { first_subscribed_at: new Date().toISOString() },
      );

      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch {
      track("newsletter_subscribe_failed", {
        surface: "footer",
        error_code: "unknown",
        http_status: null,
      });
      setMessage("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-white font-medium mb-4 flex items-center gap-2">
        Stay updated with our latest releases
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h3>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          data-ph-mask
          className="px-4 py-2 bg-transparent text-white border border-white outline-none placeholder-gray-400 w-64"
          required
        />
        <button
          type="submit"
          disabled={pending}
          data-attr="newsletter-subscribe"
          className="px-6 py-2 bg-black text-white border border-white relative hover:before:content-['•'] hover:before:absolute hover:before:left-2 hover:before:top-1/2 hover:before:transform hover:before:-translate-y-1/2 hover:before:text-lg disabled:opacity-50 transition-all"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="text-gray-400 text-sm mt-2">{message}</p>}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        <NewsletterSubscription />
        <FeedbackDialog />
        <p>
          PM Playbook @{" "}
          <a
            href={AUTHOR_URL}
            className="hover:underline"
            data-attr="author-link"
            onClick={() => {
              track("outbound_link_clicked", {
                href: AUTHOR_URL,
                link_domain: "mirtiza.com",
                surface: "footer",
              });
            }}
          >
            Muhammad Irtiza
          </a>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
