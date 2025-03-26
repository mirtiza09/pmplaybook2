"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function BookPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <section className="pt-32 px-6 md:px-12 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-normal mb-12">Laws of UX: The Book</h1>

          <div className="bg-zinc-900 p-12 rounded-lg mb-16">
            <div className="aspect-[2/3] bg-zinc-800 w-64 mx-auto mb-8 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto border border-zinc-600 w-20 h-20 flex items-center justify-center rounded-full mb-4">
                  <div className="w-12 h-12 border border-zinc-600 rotate-45"></div>
                </div>
                <p className="text-xl font-medium mt-4">Laws of UX</p>
                <p className="text-sm text-muted-foreground mt-2">by Jon Yablonski</p>
              </div>
            </div>
            <div className="text-center">
              <Button className="mt-4">
                Get the Book <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl mb-8">
              An essential guide for anyone who designs, develops, or builds digital products and experiences.
            </p>

            <h2 className="text-2xl mb-6 mt-12">About the Book</h2>
            <p className="text-muted-foreground mb-6">
              This book explores key insights from cognitive psychology, social psychology, and human-computer interaction research to provide practical guidance for creating more intuitive and usable digital products.
            </p>
            <p className="text-muted-foreground mb-6">
              The book expands on the concepts presented on this website, offering deeper insights, practical examples, and design strategies for applying these psychological principles to your work.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
