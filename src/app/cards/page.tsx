"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePostHog } from "posthog-js/react";
import { notFound } from "next/navigation";

export default function CardsPage() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const posthog = usePostHog();

  useEffect(() => {
    if (posthog) {
      posthog.onFeatureFlags(() => {
        setIsEnabled(posthog.isFeatureEnabled('CardsPage'));
        setIsLoading(false);
      });
    }
  }, [posthog]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isEnabled) {
    return notFound();
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="pt-32 px-6 md:px-12 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-normal mb-12">Laws of UX Cards</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-zinc-900 p-8 rounded-lg relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-900 rounded-full opacity-50"></div>
              <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-purple-900 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-medium mb-4">Card Deck</h2>
                <p className="text-muted-foreground mb-6">
                  The complete set of Laws of UX cards, beautifully designed and printed on premium stock.
                </p>
                <Button variant="outline" size="sm">
                  View Details <ArrowUpRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-green-900 rounded-full opacity-50"></div>
              <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-yellow-800 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-medium mb-4">Digital Cards</h2>
                <p className="text-muted-foreground mb-6">
                  Download the digital version of the Laws of UX cards for use in presentations and design work.
                </p>
                <Button variant="outline" size="sm">
                  Download <ArrowUpRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl mb-8">
              These cards are the perfect companion for designers looking to apply psychological principles to their work.
            </p>

            <h2 className="text-2xl mb-6 mt-12">Features</h2>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>All 20 Laws of UX beautifully illustrated</li>
              <li>Premium card stock with smooth finish</li>
              <li>Helpful summaries and example use cases</li>
              <li>Perfect for design workshops and reference</li>
            </ul>

            <p className="text-muted-foreground mb-6">
              Each card features a unique visual representation of the design principle, making it easy to remember and apply in your work.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}