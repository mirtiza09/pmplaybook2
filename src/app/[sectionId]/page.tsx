"use client";

import { useEffect, useState, useMemo, use } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryTabs } from "@/components/CategoryTabs";
import { DirectoryItemCard } from "@/components/DirectoryItemCard";
import { Pagination } from "@/components/Pagination";
import { getPageConfig, getFilteredCards, mapRouteToSection } from "@/data/configService";
import { Card } from "@/data/configService";

interface SectionPageProps {
  params: Promise<{
    sectionId: string;
  }>;
}

export default function SectionPage({ params }: SectionPageProps) {
  const { sectionId } = use(params);
  
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pageConfig, setPageConfig] = useState<any>(null);
  // Extract categories from tabs - memoized to prevent recreating array
  const categories = useMemo(() => {
    if (!pageConfig?.tabs) return [];
    return pageConfig.tabs.map((tab: { id: string; text: string }) => tab.text);
  }, [pageConfig?.tabs]);
  // Map to get category ID from display text
  const getCategoryId = (categoryText: string, config: any): string => {
    if (categoryText === "ALL") return "all";
    const tab = config?.tabs?.find((tab: { id: string; text: string }) => tab.text === categoryText);
    return tab?.id || categoryText.toLowerCase();
  };  useEffect(() => {
    try {
      // Map URL segments to config keys using the helper function
      const configKey = mapRouteToSection(sectionId);
      
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const config = getPageConfig(configKey as any);
      setPageConfig(config);      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const categoryId = getCategoryId(activeCategory, config);
      const cards = getFilteredCards(configKey as any, categoryId);
      setFilteredCards(cards);
    } catch (error) {
      console.error("Error loading page config:", error);
    }
  }, [sectionId, activeCategory]);

  // Get the mapped config key for this route
  const configKey = mapRouteToSection(sectionId);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredCards.slice(startIndex, startIndex + itemsPerPage);

  if (!pageConfig) {
    return <div>Loading...</div>;
  }
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
            categories={categories}
          />
        </div>        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {paginatedItems.map((card) => (
            <DirectoryItemCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
              icon={<card.icon />}
              category={card.category}
              sectionId={configKey}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalItems={filteredCards.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </section>

      <Footer />
    </main>
  );
}
