"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { uxLaws } from "@/data/ux-laws";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";

interface LawDetailPageProps {
  params: {
    lawId: string;
  };
}

export default function LawDetailPage({ params }: LawDetailPageProps) {
  const router = useRouter();
  const law = uxLaws.find(law => law.id === params.lawId);

  if (!law) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <section className="pt-32 px-6 md:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            className="mb-8 text-muted-foreground hover:text-primary-foreground"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className={`${law.bgColor} p-16 mb-10 flex items-center justify-center`}>
            <div className="w-32 h-32">
              <law.icon />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <span className="text-sm text-muted-foreground uppercase">
                {law.category.replace("_", " ").toUpperCase()}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-normal mb-8">{law.title}</h1>

            <p className="text-xl mb-12">{law.description}</p>

            <div className="border-t border-zinc-800 pt-8">
              <h2 className="text-2xl mb-6">Overview</h2>
              <p className="text-muted-foreground mb-6">
                The {law.title} is an important principle in UX design that helps create more intuitive and user-friendly interfaces.
              </p>
              <p className="text-muted-foreground mb-6">
                When implemented correctly, it can significantly improve user experience by making interfaces more predictable and easier to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
