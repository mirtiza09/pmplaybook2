"use client";

import { useEffect, useState, use } from "react";
import { getCardContent, mapRouteToSection } from "@/data/configService";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ItemDetailPageProps {
  params: Promise<{
    sectionId: string;
    itemId: string;
  }>;
}

export default function ItemDetailPage({ params }: ItemDetailPageProps) {
  const { sectionId, itemId } = use(params);
  const [cardData, setCardData] = useState<unknown>(null);  useEffect(() => {
    try {
      // Map URL segments to config keys using the helper function
      const configKey = mapRouteToSection(sectionId);
      
      const content = getCardContent(configKey as keyof typeof import("@/data/configService").config.pages, itemId);
      setCardData(content);
    } catch (error) {
      console.error("Error loading card content:", error);
    }
  }, [sectionId, itemId]);

  if (!cardData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link 
            href={`/${sectionId}`}
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {sectionId}
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              {cardData.title}
            </h1>
            <div className="inline-block">
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm uppercase">
                {cardData.category}
              </span>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                {cardData.overview}
              </p>
            </div>

            {cardData.keyPrinciples && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Key Principles</h2>                <ul className="space-y-2">
                  {cardData.keyPrinciples.map((principle: string, index: number) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {cardData.applicationInPM && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Practical Applications</h2>                <ul className="space-y-2">
                  {cardData.applicationInPM.map((application: string, index: number) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {cardData.examples && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Examples</h2>                <ul className="space-y-2">
                  {cardData.examples.map((example: string, index: number) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {cardData.commonMistakes && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Common Mistakes</h2>                <ul className="space-y-2">
                  {cardData.commonMistakes.map((mistake: string, index: number) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      {mistake}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {cardData.relatedConcepts && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Related Concepts</h2>                <div className="flex flex-wrap gap-2">
                  {cardData.relatedConcepts.map((concept: string, index: number) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}
