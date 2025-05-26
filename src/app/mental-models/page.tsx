"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryTabs } from "@/components/CategoryTabs";
import { UXLawCard } from "@/components/UXLawCard";
import { getPageConfig, getFilteredCards, mapRouteToSection } from "@/data/configService";
import { Pagination } from "@/components/Pagination";

export default function MentalModelsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const sectionId = mapRouteToSection("mental-models");
  const pageConfig = getPageConfig(sectionId as keyof typeof import("@/config/appConfig.json").pages);
  
  // Map to get category ID from display text
  const getCategoryId = (categoryText: string): string => {
    if (categoryText === "ALL") return "all";
    const tab = pageConfig?.tabs?.find((tab: { id: string; text: string }) => tab.text === categoryText);
    return tab?.id || categoryText.toLowerCase();
  };
  
  const categoryId = getCategoryId(activeCategory);
  const filteredModels = getFilteredCards(sectionId as keyof typeof import("@/config/appConfig.json").pages, categoryId);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedModels = filteredModels.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <section className="pt-32 px-6 md:px-12 pb-20">
        <div className="max-w-3xl mx-auto mb-24">
          <h1 className="text-2xl md:text-4xl font-normal mb-6">
            <p className="leading-relaxed">{pageConfig.subtitle}</p>
          </h1>
        </div>

        <div className="mb-16">
          <CategoryTabs
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={pageConfig.tabs.map(tab => tab.text)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {paginatedModels.map((model) => (
            <UXLawCard
              key={model.id}
              id={model.id}
              title={model.title}
              description={model.description}
              bgColor={model.bgColor}
              icon={<model.icon />}
              category={model.category}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={filteredModels.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </section>

      <Footer />
    </main>
  );
}