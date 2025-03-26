
"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
      <section className="pt-32 px-6 md:px-12 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-normal mb-12">
            Product Management Playbook for Better Decision Making
          </h1>
          
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-xl aspect-video flex items-center justify-between">
              <div className="flex flex-col items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <span className="text-sm">Discovery</span>
              </div>
              <div className="flex-1 h-[2px] bg-zinc-800 mx-4"></div>
              <div className="flex flex-col items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-sm">Operations</span>
              </div>
              <div className="flex-1 h-[2px] bg-zinc-800 mx-4"></div>
              <div className="flex flex-col items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20" />
                </svg>
                <span className="text-sm">Delivery</span>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-lg">
            <p>
              Product management is complex, requiring careful navigation through discovery, operations, and delivery. Laws, frameworks, and mental models serve as essential tools in this journey.
            </p>
            
            <p>
              <strong>Laws</strong> provide time-tested principles that help avoid common pitfalls and guide decision-making. They represent collective wisdom from decades of product development experience.
            </p>
            
            <p>
              <strong>Frameworks</strong> offer structured approaches to tackle specific challenges in product management. They help standardize processes and ensure consistent, quality outcomes across different scenarios.
            </p>
            
            <p>
              <strong>Mental Models</strong> enable better understanding of complex situations by providing conceptual frameworks. They help in pattern recognition and strategic thinking throughout the product lifecycle.
            </p>
            
            <p>
              Together, these tools create a robust foundation for product discovery, streamlined operations, and efficient delivery - the three pillars of successful product management.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
