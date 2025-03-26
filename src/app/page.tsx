"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryTabs } from "@/components/CategoryTabs";
import { UXLawCard } from "@/components/UXLawCard";
import { getFilteredLaws } from "@/data/ux-laws";
import { Pagination } from "@/components/Pagination";


export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredLaws = getFilteredLaws(activeCategory);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLaws = filteredLaws.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <section className="pt-32 px-6 md:px-12 pb-20">
        <div className="max-w-3xl mx-auto mb-24">
          <h1 className="text-2xl md:text-4xl font-normal mb-6">
            <p className="leading-relaxed">A collection of best practices that product managers can consider to <span className="underline">manage products better</span>.</p>
          </h1>
        </div>

        <div className="mb-16">
          <CategoryTabs
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={["all", "discovery", "operations", "delivery", "ux"]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {paginatedLaws.map((law) => (
            <UXLawCard
              key={law.id}
              id={law.id}
              title={law.title}
              description={law.description}
              bgColor={law.bgColor}
              category={law.category.replace("_", " ").toUpperCase()}
              icon={<law.icon />}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={filteredLaws.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </section>

      <Footer />
    </main>
  );
}