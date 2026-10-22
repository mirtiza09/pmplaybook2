import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EarlyAccessCTA } from "@/components/EarlyAccessCTA";
import { getBootstrapFlags } from "@/lib/analytics/server";

/**
 * Flag-gated route, evaluated on the server.
 *
 * This page used to render "Loading..." on every request, then either the
 * content or a 404 once /decide answered in the browser. Evaluating the flag
 * here means the gate is decided before anything is sent — no flash, and a
 * real 404 for crawlers. Only this route pays the cost of dynamic rendering;
 * the rest of the site stays statically generated.
 */
export default async function CardsPage() {
  const cookieStore = await cookies();
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const phCookie = key ? cookieStore.get(`ph_${key}_posthog`)?.value : undefined;

  let distinctId = "anonymous-server";
  if (phCookie) {
    try {
      const parsed = JSON.parse(phCookie);
      if (typeof parsed?.distinct_id === "string") distinctId = parsed.distinct_id;
    } catch {
      // Malformed cookie: fall through to the anonymous id.
    }
  }

  const flags = await getBootstrapFlags(distinctId);
  if (flags["CardsPage"] !== true) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="pt-32 px-6 md:px-12 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-normal mb-12">Playbook Cards</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-zinc-900 p-8 rounded-lg relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-900 rounded-full opacity-50"></div>
              <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-purple-900 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-medium mb-4">Printed Deck</h2>
                <p className="text-muted-foreground mb-6">
                  The full set of playbook principles, printed on premium stock for
                  workshops and desk reference.
                </p>
                <EarlyAccessCTA
                  featureKey="printed-cards"
                  label="Join the waitlist"
                  surface="cards_page"
                  variant="outline"
                  size="sm"
                />
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-green-900 rounded-full opacity-50"></div>
              <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-yellow-800 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-medium mb-4">Digital Deck</h2>
                <p className="text-muted-foreground mb-6">
                  A downloadable version of the deck for use in presentations and
                  product reviews.
                </p>
                <EarlyAccessCTA
                  featureKey="digital-cards"
                  label="Notify me"
                  surface="cards_page"
                  variant="outline"
                  size="sm"
                />
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl mb-8">
              A companion for product managers who want these principles to hand
              during the conversation, not after it.
            </p>

            <h2 className="text-2xl mb-6 mt-12">What's planned</h2>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>All 71 principles, each illustrated</li>
              <li>Premium card stock with a smooth finish</li>
              <li>A short summary and an example use case per card</li>
              <li>Sized for workshops and planning sessions</li>
            </ul>

            <p className="text-muted-foreground mb-6">
              Each card carries a visual for its principle, which makes it easier to
              recall and to point at in a room.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
