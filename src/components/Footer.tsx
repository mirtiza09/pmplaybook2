"use client";

import React, { useState } from "react";
import { usePostHog } from "posthog-js/react";
import { FeedbackDialog } from "./FeedbackDialog"; // Added import for FeedbackDialog


function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const posthog = usePostHog();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (posthog) {
      posthog.capture("newsletter_subscribe_clicked", {
        email,
        timestamp: new Date().toISOString(),
      });
    }
    setMessage("Submitting...");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
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
          className="px-4 py-2 bg-transparent text-white border border-white outline-none placeholder-gray-400 w-64"
          required
        />
        <button
          type="submit"
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
  const posthog = usePostHog();

  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        <NewsletterSubscription />
        <FeedbackDialog />
        <p>
          PM Playbook @{" "}
          <a
            href="https://www.mirtiza.com/"
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              if (posthog) {
                posthog.capture("tracked_author", {
                  timestamp: new Date().toISOString(),
                  location: "footer",
                  href: window.location.href,
                });
                // Small delay to ensure event is sent before navigation
                setTimeout(() => {
                  window.location.href = "https://www.mirtiza.com/";
                }, 100);
              }
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

