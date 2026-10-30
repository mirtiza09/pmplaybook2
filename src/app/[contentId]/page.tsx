import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";
import { ContentDetailTracker } from "@/components/ContentDetailTracker";
import { getContentDetail } from "@/data/details";
import { resolveContent, allContentIds } from "@/lib/analytics";

/**
 * Detail page for any of the three taxonomies.
 *
 * This route used to resolve against the 17 UX laws only, while the card grid
 * linked every one of the 71 items here, so 54 cards led straight to a 404.
 * It now resolves through the shared content index, which is the same source
 * the cards use to report whether their destination exists.
 */

export function generateStaticParams() {
  return allContentIds().map((contentId) => ({ contentId }));
}

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
  const detail = getContentDetail(item.id);

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

            <div className="border-t border-zinc-800 pt-8 mb-12">
              <h2 className="text-2xl mb-6">Key Points</h2>
              <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
                {detail.keyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="border-t border-zinc-800 pt-8 mb-12">
              <h2 className="text-2xl mb-6">Details</h2>
              {detail.details.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground leading-relaxed mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="border-t border-zinc-800 pt-8">
              <h2 className="text-2xl mb-6">Applications</h2>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                {detail.applications.map((application) => (
                  <div key={application.title}>
                    <h3 className="font-medium mb-2">
                      {application.title}
                      {application.realWorld && (
                        <span className="ml-2 text-xs font-normal uppercase text-muted-foreground">
                          Real world
                        </span>
                      )}
                    </h3>
                    <p className="text-muted-foreground">{application.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
