"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function InfoPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <section className="pt-32 px-6 md:px-12 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-normal mb-12">About Laws of UX</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl mb-8">
              Laws of UX is a collection of best practices that designers can consider when building user interfaces.
            </p>

            <h2 className="text-2xl mb-6 mt-12">Background</h2>
            <p className="text-muted-foreground mb-6">
              This project started as a simple website created by Jon Yablonski as a way to learn about and share psychological principles that designers can use to build more intuitive, human-centered products and experiences.
            </p>
            <p className="text-muted-foreground mb-6">
              It was built as a resource for designers to understand key principles of user psychology and better apply them to their work.
            </p>

            <h2 className="text-2xl mb-6 mt-12">Acknowledgements</h2>
            <p className="text-muted-foreground mb-6">
              The site is inspired by the work of many researchers, designers, and authors who have contributed to the field of cognitive psychology and human-computer interaction.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
