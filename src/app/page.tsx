"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryTabs } from "@/components/CategoryTabs";
import { DirectoryItemCard } from "@/components/DirectoryItemCard";
import { getPageConfig, getFilteredCards } from "@/data/configService";
import { Pagination } from "@/components/Pagination";


export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const pageConfig = getPageConfig("sectionAlpha");
  
  // Map to get category ID from display text
  const getCategoryId = (categoryText: string): string => {
    if (categoryText === "ALL") return "all";
    const tab = pageConfig?.tabs?.find((tab: { id: string; text: string }) => tab.text === categoryText);
    return tab?.id || categoryText.toLowerCase();
  };
  
  const categoryId = getCategoryId(activeCategory);
  const filteredItems = getFilteredCards("sectionAlpha", categoryId);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

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
          {paginatedItems.map((item) => (
            <DirectoryItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              bgColor={item.bgColor}
              category={item.category}
              icon={<item.icon />}
              sectionId="sectionAlpha"
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={filteredItems.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </section>

      <Footer />
    </main>
  );
}