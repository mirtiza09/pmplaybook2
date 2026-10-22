import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";
import { ContentDetailTracker } from "@/components/ContentDetailTracker";
import { resolveContent, allContentIds, type ContentType } from "@/lib/analytics";

/**
 * Detail page for any of the three taxonomies.
 *
 * This route used to resolve against the 17 UX laws only, while the card grid
 * linked every one of the 71 items here — so 54 cards led straight to a 404.
 * It now resolves through the shared content index, which is the same source
 * the cards use to report whether their destination exists.
 */

export function generateStaticParams() {
  return allContentIds().map((contentId) => ({ contentId }));
}

const OVERVIEW_COPY: Record<ContentType, (title: string) => string[]> = {
  law: (title) => [
    `${title} is a principle that shapes how product teams read user behaviour and make decisions under constraint.`,
    "Applied deliberately, it makes the trade-offs in a decision explicit rather than implicit.",
  ],
  framework: (title) => [
    `${title} is a structured approach product managers use to turn an ambiguous problem into a sequence of decisions.`,
    "Frameworks are most useful as a shared vocabulary for a team, not as a process to follow literally.",
  ],
  mental_model: (title) => [
    `${title} is a thinking tool: a way of reframing a problem so that its important features become visible.`,
    "Mental models compound — the value comes from having several available and knowing which one a situation calls for.",
  ],
};

export default async function ContentDetailPage({
  params,
}: {
  params: Promise<{ contentId: string }>;
}) {
  const { contentId } = await params;
  const resolved = resolveContent(contentId);

  if (!resolved) {
    notFound();
  }

  const { contentType, item } = resolved;
  const overview = OVERVIEW_COPY[contentType](item.title);

  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <ContentDetailTracker
        contentType={contentType}
        contentId={item.id}
        contentTitle={item.title}
        contentCategory={item.category}
      />

      <section className="pt-32 px-6 md:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <BackButton />

          <div className={`${item.bgColor} p-16 mb-10 flex items-center justify-center`}>
            <div className="w-32 h-32">
              <item.icon />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <span className="text-sm text-muted-foreground uppercase">
                {item.category.replace("_", " ").toUpperCase()}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-normal mb-8">{item.title}</h1>

            <p className="text-xl mb-12">{item.description}</p>

            <div className="border-t border-zinc-800 pt-8">
              <h2 className="text-2xl mb-6">Overview</h2>
              {overview.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
