"use client";

import { useEffect, useState, use } from "react";
import { getCardContent, mapRouteToSection, getPageConfig, getCategoryDisplayName } from "@/data/configService";
import { ArrowLeft, Lightbulb, Key, CheckCircle, AlertTriangle, Network, Target, BookOpen } from "lucide-react";
import Link from "next/link";
import { DirectoryItemCard } from "@/components/DirectoryItemCard";

interface ItemDetailPageProps {
  params: Promise<{
    sectionId: string;
    itemId: string;
  }>;
}

export default function ItemDetailPage({ params }: ItemDetailPageProps) {
  const { sectionId, itemId } = use(params);
  const [cardData, setCardData] = useState<any>(null);
  const [cardMetadata, setCardMetadata] = useState<any>(null);
  const [configKey, setConfigKey] = useState<string>("");
  useEffect(() => {
    try {
      const configKey = mapRouteToSection(sectionId);
      const content = getCardContent(configKey as keyof typeof import("@/data/configService").config.pages, itemId);
      
      // Get the card metadata (icon, bgColor, etc.) from the page config
      const pageConfig = getPageConfig(configKey as keyof typeof import("@/data/configService").config.pages);
      const card = pageConfig.cards.find(c => c.id === itemId);
      
      setCardData(content);
      setCardMetadata(card);
      setConfigKey(configKey);
    } catch (error) {
      console.error("Error loading card content:", error);
    }
  }, [sectionId, itemId]);
  if (!cardData || !cardMetadata) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <div>Loading content...</div>
        </div>
      </div>
    );
  }

  // Use actual card metadata instead of hardcoded category styles
  const IconComponent = cardMetadata.icon;
  const colorStyle = () => {
    const colorMap: { [key: string]: string } = {
      // RED SERIES
      'bg-red-700': '#b91c1c',
      'bg-red-800': '#991b1b', 
      'bg-red-900': '#7f1d1d',
      
      // BLUE SERIES
      'bg-blue-700': '#1d4ed8',
      'bg-blue-800': '#1e40af',
      'bg-blue-900': '#1e3a8a',
      
      // GREEN SERIES
      'bg-green-700': '#15803d',
      'bg-green-800': '#166534',
      'bg-green-900': '#14532d',
      
      // YELLOW SERIES
      'bg-yellow-700': '#a16207',
      'bg-yellow-800': '#92400e',
      'bg-yellow-900': '#713f12',
      
      // PURPLE SERIES
      'bg-purple-700': '#7e22ce',
      'bg-purple-800': '#6b21a8',
      'bg-purple-900': '#581c87',
      
      // INDIGO SERIES
      'bg-indigo-700': '#4338ca',
      'bg-indigo-800': '#3730a3',
      'bg-indigo-900': '#312e81',
      
      // PINK SERIES
      'bg-pink-700': '#be185d',
      'bg-pink-800': '#9d174d',
      'bg-pink-900': '#831843',
      
      // TEAL SERIES
      'bg-teal-700': '#0f766e',
      'bg-teal-800': '#115e59',
      'bg-teal-900': '#134e4a',
      
      // CYAN SERIES
      'bg-cyan-700': '#0e7490',
      'bg-cyan-800': '#155e75',
      'bg-cyan-900': '#164e63',
      
      // LIME SERIES
      'bg-lime-700': '#4d7c0f',
      'bg-lime-800': '#3f6212',
      'bg-lime-900': '#365314',
      
      // AMBER SERIES
      'bg-amber-700': '#b45309',
      'bg-amber-800': '#92400e',
      'bg-amber-900': '#78350f',
      
      // FUCHSIA SERIES
      'bg-fuchsia-700': '#a21caf',
      'bg-fuchsia-800': '#86198f',
      'bg-fuchsia-900': '#701a75',
      
      // EMERALD SERIES
      'bg-emerald-700': '#047857',
      'bg-emerald-800': '#065f46',
      'bg-emerald-900': '#064e3b',
      
      // VIOLET SERIES
      'bg-violet-700': '#7c3aed',
      'bg-violet-800': '#6d28d9',
      'bg-violet-900': '#4c1d95',
      
      // ROSE SERIES
      'bg-rose-700': '#be185d',
      'bg-rose-800': '#9f1239',
      'bg-rose-900': '#881337',
      
      // ORANGE SERIES
      'bg-orange-700': '#c2410c',
      'bg-orange-800': '#9a3412',
      'bg-orange-900': '#7c2d12',
      
      // SKY SERIES
      'bg-sky-700': '#0369a1',
      'bg-sky-800': '#075985',
      'bg-sky-900': '#0c4a6e',
      
      // GRAY SERIES
      'bg-gray-700': '#374151',
      'bg-gray-800': '#1f2937',
      'bg-gray-900': '#111827',
      
      // SLATE SERIES
      'bg-slate-700': '#334155',
      'bg-slate-800': '#1e293b',
      'bg-slate-900': '#0f172a'
    };

    return { backgroundColor: colorMap[cardMetadata.bgColor] || '#6b7280' };
  };
  const applicationsKey = cardData.applicationInPM ? 'applicationInPM' : 'applicationInDeFi';
  const applicationsTitle = cardData.applicationInPM ? 'Applications in Product Management' : 'Applications in DeFi';
  
  // Get section display name
  const getSectionDisplayName = (configKey: string) => {
    const sectionNames: { [key: string]: string } = {
      'sectionAlpha': 'Protocols',
      'sectionBeta': 'Yield Farming', 
      'sectionGamma': 'Trading Tools',
      'sectionDelta': 'DeFi Concepts'
    };
    return sectionNames[configKey] || configKey;
  };
  // Generate navigation sections based on available content
  const navSections = [
    cardData.overview && { id: 'overview', label: 'Overview' },
    cardData.keyPrinciples?.length > 0 && { id: 'keyPrinciples', label: 'Key Principles' },
    cardData[applicationsKey]?.length > 0 && { id: 'applications', label: 'Applications' },
    cardData.examples?.length > 0 && { id: 'examples', label: 'Examples' },
    cardData.commonMistakes?.length > 0 && { id: 'commonMistakes', label: 'Common Mistakes' },
    cardData.relatedConcepts?.length > 0 && { id: 'relatedConcepts', label: 'Related Concepts' }
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href={`/${sectionId}`}
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </div>      {/* 2x2 Grid Layout */}
      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* TOP LEFT: DirectoryItemCard */}          <div className="order-1 lg:col-span-1">
            {cardMetadata && cardData && (
              <DirectoryItemCard
                id={itemId}
                title={cardData.title}
                description={cardMetadata.shortDescription} // Use shortDescription from cardMetadata
                bgColor={cardMetadata.bgColor}
                icon={<IconComponent className="w-full h-full" />} // Pass as JSX element
                category={cardMetadata.category}
                sectionId={configKey} // Use configKey instead of sectionId for proper category mapping
              />
            )}
          </div>

          {/* TOP RIGHT: About Section */}
          <div className="order-2 lg:col-span-3 space-y-6">            {/* Category Tags */}
            {cardMetadata?.category && (
              <div className="flex flex-wrap gap-2">                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-300">
                  {getSectionDisplayName(configKey).toUpperCase()}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">
                  {getCategoryDisplayName(cardMetadata.category, configKey)}
                </span>
              </div>
            )}
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {cardData.title}
            </h1>
            
            {/* Overview */}
            {cardData.overview && (
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {cardData.overview}
                </p>
              </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-white">
                  {navSections.length}
                </div>
                <div className="text-sm text-gray-400">Sections</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-white">
                  {(cardData.keyPrinciples?.length || 0) + (cardData[applicationsKey]?.length || 0)}
                </div>
                <div className="text-sm text-gray-400">Key Points</div>
              </div>
            </div>
          </div>
        </div>        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* BOTTOM LEFT: Page Navigation */}
          <div className="order-4 lg:order-3 lg:col-span-1">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 sticky top-6">
              <h3 className="text-lg font-semibold mb-4 text-white">Page Navigation</h3>
              <nav className="space-y-2">
                {navSections.map((section: any) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
                  >
                    <span className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-white transition-colors mr-3"></span>
                      {section.label}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>          {/* BOTTOM RIGHT: Main Content */}
          <div className="order-3 lg:order-4 lg:col-span-3">
            <div className="space-y-12">              {/* Key Principles Section */}
              {cardData.keyPrinciples && cardData.keyPrinciples.length > 0 && (
                <section id="keyPrinciples" className="scroll-mt-6">
                  <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-800 pb-2 flex items-center">
                    <Key className="w-6 h-6 mr-2 text-blue-400" />
                    Key Principles
                  </h2>
                  <div className="space-y-4">
                    {cardData.keyPrinciples.map((principle: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-400 text-sm font-medium">{index + 1}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{principle}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}              {/* Applications Section */}
              {cardData[applicationsKey] && cardData[applicationsKey].length > 0 && (
                <section id="applications" className="scroll-mt-6">
                  <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-800 pb-2 flex items-center">
                    <Target className="w-6 h-6 mr-2 text-green-400" />
                    {applicationsTitle}
                  </h2>
                  <div className="space-y-4">
                    {cardData[applicationsKey].map((application: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-green-900/10 rounded-lg border border-green-800/30">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-400 text-sm font-medium">✓</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{application}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}              {/* Examples Section */}
              {cardData.examples && cardData.examples.length > 0 && (
                <section id="examples" className="scroll-mt-6">
                  <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-800 pb-2 flex items-center">
                    <Lightbulb className="w-6 h-6 mr-2 text-yellow-400" />
                    Examples
                  </h2>                  <div className="space-y-4">
                    {cardData.examples.map((example: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-yellow-900/10 rounded-lg border border-yellow-800/30">
                        <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-yellow-400 text-sm font-medium">•</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{example}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}              {/* Common Mistakes Section */}
              {cardData.commonMistakes && cardData.commonMistakes.length > 0 && (
                <section id="commonMistakes" className="scroll-mt-6">
                  <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-800 pb-2 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
                    Common Mistakes
                  </h2>
                  <div className="space-y-4">
                    {cardData.commonMistakes.map((mistake: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-red-900/10 rounded-lg border border-red-800/30">
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-400 text-sm font-medium">⚠</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{mistake}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}              {/* Related Concepts Section */}
              {cardData.relatedConcepts && cardData.relatedConcepts.length > 0 && (
                <section id="relatedConcepts" className="scroll-mt-6">
                  <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-800 pb-2 flex items-center">
                    <Network className="w-6 h-6 mr-2 text-blue-400" />
                    Related Concepts
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cardData.relatedConcepts.map((concept: string, index: number) => (
                      <div key={index} className="p-3 bg-blue-900/10 rounded-lg border border-blue-800/30 hover:border-blue-700/50 transition-colors cursor-pointer">
                        <p className="text-blue-300 hover:text-blue-200 transition-colors text-sm">{concept}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
