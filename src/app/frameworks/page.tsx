"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryTabs } from "@/components/CategoryTabs";
import { UXLawCard } from "@/components/UXLawCard";
import { getFilteredFrameworks } from "@/data/frameworks";
import { Pagination } from "@/components/Pagination";

export default function FrameworksPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredFrameworks = getFilteredFrameworks(activeCategory);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedFrameworks = filteredFrameworks.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <section className="pt-32 px-6 md:px-12 pb-20">
        <div className="max-w-3xl mx-auto mb-24">
          <h1 className="text-2xl md:text-4xl font-normal mb-6">
            <p className="leading-relaxed">A collection of structured frameworks that product managers can apply to <span className="underline">deliver better outcomes</span>.</p>
          </h1>
        </div>

        <div className="mb-16">
          <CategoryTabs
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={["all", "strategy", "stakeholder", "prioritization", "discovery", "delivery", "growth"]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {paginatedFrameworks.map((framework) => (
            <UXLawCard
              key={framework.id}
              id={framework.id}
              title={framework.title}
              description={framework.description}
              bgColor={framework.bgColor}
              category={framework.category.replace("_", " ").toUpperCase()}
              icon={<framework.icon />}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={filteredFrameworks.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </section>

      <Footer />
    </main>
  );
}