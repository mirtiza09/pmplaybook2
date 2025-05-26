import config from "@/config/appConfig.json";

// Route mapping utilities
const ROUTE_TO_SECTION_MAP: Record<string, string> = {
  "protocols": "sectionAlpha",
  "yield-farming": "sectionBeta",
  "trading-tools": "sectionGamma", 
  "defi-concepts": "sectionDelta",
  "mental-models": "sectionDelta", // Temporary mapping to fix build error
  "frameworks": "sectionDelta", // Temporary mapping to fix build error
  "about": "about",
  // Direct section IDs (for backwards compatibility)
  "sectionAlpha": "sectionAlpha",
  "sectionBeta": "sectionBeta",
  "sectionGamma": "sectionGamma",
  "sectionDelta": "sectionDelta"
};

const SECTION_TO_ROUTE_MAP: Record<string, string> = {
  "sectionAlpha": "protocols",
  "sectionBeta": "yield-farming",
  "sectionGamma": "trading-tools",
  "sectionDelta": "defi-concepts",
  "about": "about"
};

// Helper functions for route mapping
export const mapRouteToSection = (routeSegment: string): string => {
  return ROUTE_TO_SECTION_MAP[routeSegment] || routeSegment;
};

export const mapSectionToRoute = (sectionId: string): string => {
  return SECTION_TO_ROUTE_MAP[sectionId] || sectionId;
};

// Icon mapping - generic icon system
import {
  AestheticUsabilityIcon,
  DohertyThresholdIcon,
  FittsLawIcon,
  HicksLawIcon,
  JakobsLawIcon,
  LawOfCommonRegionIcon,
  LawOfProximityIcon,
  ParkinsonLawIcon,
  PeakEndRuleIcon,
  ValidationIcon,
  DivergenceConvergenceIcon,
  TechnicalDebtIcon,
  CustomerRetentionIcon,
  FeedbackLoopsIcon,
  BrooksLawIcon,
  IronTriangleIcon,
  EarlyTestingIcon,
  // Framework icons
  StrategyIcon,
  PrioritizationIcon,
  DiscoveryIcon,
  DeliveryIcon,
  GrowthIcon,
  StakeholderIcon,
  // Mental model icons
  GeneralThinkingIcon,
  PhysicsIcon,
  SystemsIcon,
  NumeracyIcon,
  MicroeconomicsIcon,
  MilitaryIcon,
  HumanNatureIcon,
} from "@/components/icons";

// Generic icon mapping system
const iconMap: Record<string, React.ComponentType> = {
  // Generic icon identifiers mapped to existing icons
  icon1: PeakEndRuleIcon,
  icon2: ValidationIcon,
  icon3: DivergenceConvergenceIcon,
  icon4: TechnicalDebtIcon,
  icon5: CustomerRetentionIcon,
  icon6: FeedbackLoopsIcon,
  icon7: BrooksLawIcon,
  icon8: IronTriangleIcon,
  icon9: EarlyTestingIcon,
  icon10: AestheticUsabilityIcon,
  icon11: DohertyThresholdIcon,
  icon12: FittsLawIcon,
  icon13: HicksLawIcon,
  icon14: JakobsLawIcon,
  icon15: LawOfCommonRegionIcon,
  icon16: LawOfProximityIcon,
  icon17: ParkinsonLawIcon,
  icon18: StrategyIcon,
  icon19: StrategyIcon,
  icon20: StrategyIcon,
  icon21: StakeholderIcon,
  icon22: StakeholderIcon,
  icon23: PrioritizationIcon,
  icon24: PrioritizationIcon,
  icon25: PrioritizationIcon,
  icon26: DiscoveryIcon,
  icon27: DiscoveryIcon,
  icon28: DeliveryIcon,
  icon29: DeliveryIcon,
  icon30: GrowthIcon,
  icon31: GrowthIcon,
  icon32: MicroeconomicsIcon,
  icon33: MicroeconomicsIcon,
  icon34: MicroeconomicsIcon,
  icon35: GeneralThinkingIcon,
  icon36: GeneralThinkingIcon,
  icon37: SystemsIcon,
  icon38: SystemsIcon,
  icon39: SystemsIcon,
  icon40: NumeracyIcon,
  icon41: NumeracyIcon,
  icon42: GeneralThinkingIcon,
  icon43: HumanNatureIcon,
  icon44: HumanNatureIcon,  icon45: HumanNatureIcon,
  icon55: FeedbackLoopsIcon, // Added for Double-loop learning
  icon57: GrowthIcon, // Added for Growth Mindset
};

export interface Card {
  id: string;
  title: string;
  category: string;
  bgColor: string;
  icon: React.ComponentType;
  description: string;
  featureFlag?: string | null;
  // Helper methods for color access
  getCategoryColor?: (variant?: 'primary' | 'secondary' | 'tertiary' | 'accent') => string;
  getCategoryGradient?: () => string;
}

export interface PageConfig {
  title: string;
  subtitle: string;
  tabs: { id: string; text: string }[];
  cards: Card[];
}

// Color utilities
export const getColorByCategory = (category: string, variant: 'primary' | 'secondary' | 'tertiary' | 'accent' = 'primary'): string => {
  const categoryColors = config.colorPalette.categories[category as keyof typeof config.colorPalette.categories];
  return categoryColors?.[variant] || config.colorPalette.presets.governance[0];
};

export const getCategoryGradient = (category: string): string => {
  return config.colorPalette.gradients[category as keyof typeof config.colorPalette.gradients] || "from-gray-900 to-gray-800";
};

export const getColorPreset = (presetName: 'defi' | 'trading' | 'staking' | 'governance'): string[] => {
  return config.colorPalette.presets[presetName];
};

// Category mapping utility
export const getCategoryDisplayName = (categoryId: string, sectionId: string = "sectionAlpha"): string => {
  const pageData = config.pages[sectionId as keyof typeof config.pages];
  if (!pageData?.tabs) return categoryId.toUpperCase();
  
  const tab = pageData.tabs.find(tab => tab.id === categoryId);
  return tab?.text || categoryId.toUpperCase();
};

// Get all category mappings for a section
export const getCategoryMappings = (sectionId: string = "sectionAlpha"): Record<string, string> => {
  const pageData = config.pages[sectionId as keyof typeof config.pages];
  if (!pageData?.tabs) return {};
  
  return pageData.tabs.reduce((acc, tab) => {
    acc[tab.id] = tab.text;
    return acc;
  }, {} as Record<string, string>);
};

// Transform config data to include icon components and color utilities
export const getPageConfig = (pageKey: keyof typeof config.pages): PageConfig => {
  const pageData = config.pages[pageKey];
  
  const transformedCards: Card[] = pageData.cards.map(card => ({
    ...card,
    description: card.shortDescription,
    icon: iconMap[card.icon] || GeneralThinkingIcon, // Use GeneralThinkingIcon as fallback
    // Add color utility methods
    getCategoryColor: (variant = 'primary') => getColorByCategory(card.category, variant),
    getCategoryGradient: () => getCategoryGradient(card.category),
  }));

  return {
    ...pageData,
    cards: transformedCards,
  };
};

// Get filtered cards based on category
export const getFilteredCards = (pageKey: keyof typeof config.pages, category: string): Card[] => {
  const pageConfig = getPageConfig(pageKey);
  
  if (category === "all") {
    return pageConfig.cards;
  }
  
  return pageConfig.cards.filter((card) => card.category === category);
};

// Get card detail content
export const getCardContent = (pageKey: keyof typeof config.pages, cardId: string) => {
  const contentSection = config.contentDetails[pageKey as keyof typeof config.contentDetails];
  return contentSection?.[cardId as keyof typeof contentSection] || null;
};

// Export config for direct access
export { config };

// Color management utilities
export const colorUtils = {
  getColorByCategory,
  getCategoryGradient,
  getColorPreset,
  palette: config.colorPalette,
    // New color management functions
  assignMissingCardColors: (cards: Card[]): Card[] => {
    return cards.map(card => {
      if (!card.bgColor || card.bgColor.trim() === '') {
        const categoryColor = getColorByCategory(card.category, 'primary');
        return {
          ...card,
          bgColor: categoryColor
        };
      }
      return card;
    });
  },

  validateCardColors: (cards: Card[]): { isValid: boolean; issues: string[] } => {
    const issues: string[] = [];
    
    cards.forEach((card, index) => {
      if (!card.bgColor || card.bgColor.trim() === '') {
        issues.push(`Card "${card.title}" at index ${index} is missing bgColor`);
      }
      
      if (card.bgColor && !card.bgColor.startsWith('bg-')) {
        issues.push(`Card "${card.title}" has invalid bgColor format: ${card.bgColor}`);
      }
      
      const categoryExists = config.colorPalette.categories[card.category as keyof typeof config.colorPalette.categories];
      if (!categoryExists) {
        issues.push(`Card "${card.title}" has unknown category: ${card.category}`);
      }
    });

    return {
      isValid: issues.length === 0,
      issues
    };
  },
  getSmartColorForCard: (card: Pick<Card, 'category'>, existingCards: Pick<Card, 'category' | 'bgColor'>[] = []): string => {
    // Get colors already used in the same category
    const usedColorsInCategory = existingCards
      .filter(c => c.category === card.category && c.bgColor)
      .map(c => c.bgColor);

    // Get available colors for this category
    const categoryColors = config.colorPalette.categories[card.category as keyof typeof config.colorPalette.categories];
    
    if (categoryColors) {
      const availableColors = [
        categoryColors.primary,
        categoryColors.secondary,
        categoryColors.tertiary,
        categoryColors.accent
      ];

      // Find first unused color
      const unusedColor = availableColors.find(color => !usedColorsInCategory.includes(color));
      if (unusedColor) {
        return unusedColor;
      }      // If all are used, return primary
      return categoryColors.primary;
    }

    // Fallback to governance color
    return config.colorPalette.presets.governance[0];
  }
};

// Enhanced page config with automatic color assignment
export const getPageConfigWithColorAssignment = (pageKey: keyof typeof config.pages): PageConfig => {
  const pageData = config.pages[pageKey];
  
  const transformedCards: Card[] = pageData.cards.map((card, index, allCards) => {
    let finalBgColor = card.bgColor;
    
    // Auto-assign color if missing
    if (!finalBgColor || finalBgColor.trim() === '') {
      finalBgColor = colorUtils.getSmartColorForCard(card, allCards);
      console.warn(`Auto-assigned color ${finalBgColor} to card "${card.title}"`);
    }

    return {
      ...card,
      description: card.shortDescription,
      bgColor: finalBgColor,
      icon: iconMap[card.icon] || (() => null),
      // Add color utility methods
      getCategoryColor: (variant = 'primary') => getColorByCategory(card.category, variant),
      getCategoryGradient: () => getCategoryGradient(card.category),
    };
  });

  return {
    ...pageData,
    cards: transformedCards,
  };
};

// Check if all cards have proper color assignments
export const verifyAllCardsHaveColors = (): { isValid: boolean; report: string } => {
  const allPages = Object.keys(config.pages) as (keyof typeof config.pages)[];
  let totalCards = 0;
  let cardsWithColors = 0;
  const missingColorCards: string[] = [];

  allPages.forEach(pageKey => {
    const pageData = config.pages[pageKey];
    pageData.cards.forEach(card => {
      totalCards++;
      if (card.bgColor && card.bgColor.trim() !== '') {
        cardsWithColors++;
      } else {
        missingColorCards.push(`${card.title} (${pageKey})`);
      }
    });
  });

  const isValid = missingColorCards.length === 0;
  let report = `Color Assignment Status:\n`;
  report += `Total Cards: ${totalCards}\n`;
  report += `Cards with Colors: ${cardsWithColors}\n`;
  report += `Missing Colors: ${missingColorCards.length}\n`;
  report += `Coverage: ${((cardsWithColors / totalCards) * 100).toFixed(1)}%\n`;

  if (missingColorCards.length > 0) {
    report += `\nCards Missing Colors:\n`;
    missingColorCards.forEach(card => {
      report += `- ${card}\n`;
    });
  }

  return { isValid, report };
};
