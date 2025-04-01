import { useState } from "react";
import { usePostHog } from "posthog-js/react";

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const posthog = usePostHog();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      posthog.capture("survey sent", {
        $survey_id: 'newsletter-subscription',
        $survey_response: email,
        subscribed_at: new Date().toISOString()
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-black text-white flex flex-col items-center p-6">
      <h3 className="font-bold text-xl mb-4 text-center">
        Stay updated with our latest releases
      </h3>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
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
          disabled={status === "loading"}
          className="px-6 py-2 bg-black text-white border border-white hover:bg-gray-800 disabled:opacity-50 transition-all cursor-pointer"
        >
          Subscribe
        </button>
      </form>
      {status === "success" && <p className="mt-4">Thanks for subscribing!</p>}
      {status === "error" && (
        <p className="mt-4">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
