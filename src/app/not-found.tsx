"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <section className="pt-32 px-6 md:px-12 pb-20 flex-1 flex flex-col items-center justify-center">
        <div className="max-w-xl mx-auto text-center">
          <div className="mb-8 mx-auto w-24 h-24 border-2 border-primary-foreground rounded-full flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-primary-foreground rotate-45"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-normal mb-6">404</h1>
          <p className="text-xl text-muted-foreground mb-12">
            We couldn't find the page you were looking for.
          </p>

          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
