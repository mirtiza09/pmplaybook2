import config from "@/config/appConfig.json";
import fs from 'fs';
import path from 'path';

// Types
interface CardData {
  id: string;
  title: string;
  category: string;
  bgColor?: string;
  icon: string;
  shortDescription: string;
  featureFlag?: string | null;
}

interface ColorAnalysisResult {
  totalCards: number;
  cardsWithColors: number;
  cardsMissingColors: number;
  missingColorCards: CardData[];
  colorDistribution: Record<string, number>;
  categoryDistribution: Record<string, number>;
}

// Color management utilities
export class ColorManager {
  private static instance: ColorManager;
  private configPath: string;

  constructor(configPath?: string) {
    this.configPath = configPath || path.join(process.cwd(), 'src/config/appConfig.json');
  }

  static getInstance(configPath?: string): ColorManager {
    if (!ColorManager.instance) {
      ColorManager.instance = new ColorManager(configPath);
    }
    return ColorManager.instance;
  }

  /**
   * Analyze all cards across all pages for color assignment
   */
  analyzeCardColors(): ColorAnalysisResult {
    const pages = config.pages;
    let totalCards = 0;
    let cardsWithColors = 0;
    let cardsMissingColors = 0;
    const missingColorCards: CardData[] = [];
    const colorDistribution: Record<string, number> = {};
    const categoryDistribution: Record<string, number> = {};

    Object.entries(pages).forEach(([pageKey, pageData]) => {
      pageData.cards.forEach((card: CardData) => {
        totalCards++;
        
        // Track category distribution
        categoryDistribution[card.category] = (categoryDistribution[card.category] || 0) + 1;

        if (card.bgColor && card.bgColor.trim() !== '') {
          cardsWithColors++;
          // Track color distribution
          colorDistribution[card.bgColor] = (colorDistribution[card.bgColor] || 0) + 1;
        } else {
          cardsMissingColors++;
          missingColorCards.push({
            ...card,
            pageKey: pageKey as string
          } as CardData & { pageKey: string });
        }
      });
    });

    return {
      totalCards,
      cardsWithColors,
      cardsMissingColors,
      missingColorCards,
      colorDistribution,
      categoryDistribution
    };
  }

  /**
   * Get optimal color for a category based on the color palette
   */
  getOptimalCategoryColor(category: string, variant: 'primary' | 'secondary' | 'tertiary' | 'accent' = 'primary'): string {
    const categoryColors = config.colorPalette.categories[category as keyof typeof config.colorPalette.categories];
    
    if (categoryColors && categoryColors[variant]) {
      return categoryColors[variant];
    }

    // Fallback to neutral colors if category not found
    return config.colorPalette.presets.neutral[0];
  }

  /**
   * Get alternative colors for a category to avoid duplicates
   */
  getCategoryColorAlternatives(category: string): string[] {
    const categoryColors = config.colorPalette.categories[category as keyof typeof config.colorPalette.categories];
    
    if (categoryColors) {
      return [
        categoryColors.primary,
        categoryColors.secondary,
        categoryColors.tertiary,
        categoryColors.accent
      ];
    }

    return config.colorPalette.presets.neutral;
  }

  /**
   * Assign colors to cards missing bgColor using intelligent assignment
   */
  assignMissingColors(): { updated: CardData[], errors: string[] } {
    const analysis = this.analyzeCardColors();
    const updated: CardData[] = [];
    const errors: string[] = [];

    // Track used colors per category to avoid duplicates
    const usedColorsByCategory: Record<string, Set<string>> = {};

    // Initialize used colors tracking
    Object.entries(config.pages).forEach(([pageKey, pageData]) => {
      pageData.cards.forEach((card: CardData) => {
        if (card.bgColor) {
          if (!usedColorsByCategory[card.category]) {
            usedColorsByCategory[card.category] = new Set();
          }
          usedColorsByCategory[card.category].add(card.bgColor);
        }
      });
    });

    // Assign colors to missing cards
    analysis.missingColorCards.forEach((missingCard) => {
      try {
        const alternatives = this.getCategoryColorAlternatives(missingCard.category);
        const usedInCategory = usedColorsByCategory[missingCard.category] || new Set();
        
        // Find first unused color for this category
        let assignedColor = alternatives.find(color => !usedInCategory.has(color));
        
        // If all category colors are used, use primary color
        if (!assignedColor) {
          assignedColor = this.getOptimalCategoryColor(missingCard.category, 'primary');
        }

        // Update the card
        const updatedCard = {
          ...missingCard,
          bgColor: assignedColor
        };

        updated.push(updatedCard);
        
        // Track the assigned color
        if (!usedColorsByCategory[missingCard.category]) {
          usedColorsByCategory[missingCard.category] = new Set();
        }
        usedColorsByCategory[missingCard.category].add(assignedColor);

      } catch (error) {
        errors.push(`Failed to assign color to card ${missingCard.id}: ${error}`);
      }
    });

    return { updated, errors };
  }

  /**
   * Generate color assignment report
   */
  generateColorReport(): string {
    const analysis = this.analyzeCardColors();
    
    let report = "=== Card Color Analysis Report ===\n\n";
    report += `Total Cards: ${analysis.totalCards}\n`;
    report += `Cards with Colors: ${analysis.cardsWithColors}\n`;
    report += `Cards Missing Colors: ${analysis.cardsMissingColors}\n`;
    report += `Coverage: ${((analysis.cardsWithColors / analysis.totalCards) * 100).toFixed(1)}%\n\n`;

    if (analysis.cardsMissingColors > 0) {
      report += "=== Cards Missing Colors ===\n";
      analysis.missingColorCards.forEach(card => {
        report += `- ${card.title} (${card.category}) - ID: ${card.id}\n`;
      });
      report += "\n";
    }

    report += "=== Color Distribution ===\n";
    Object.entries(analysis.colorDistribution)
      .sort(([,a], [,b]) => b - a)
      .forEach(([color, count]) => {
        report += `${color}: ${count} cards\n`;
      });

    report += "\n=== Category Distribution ===\n";
    Object.entries(analysis.categoryDistribution)
      .sort(([,a], [,b]) => b - a)
      .forEach(([category, count]) => {
        report += `${category}: ${count} cards\n`;
      });

    report += "\n=== Available Color Palette ===\n";
    Object.entries(config.colorPalette.categories).forEach(([category, colors]) => {
      report += `${category}:\n`;
      Object.entries(colors).forEach(([variant, color]) => {
        report += `  ${variant}: ${color}\n`;
      });
      report += "\n";
    });

    return report;
  }

  /**
   * Validate color assignments across all cards
   */
  validateColorAssignments(): { isValid: boolean, issues: string[] } {
    const issues: string[] = [];
    const pages = config.pages;

    Object.entries(pages).forEach(([pageKey, pageData]) => {
      pageData.cards.forEach((card: CardData, index: number) => {
        // Check if card has bgColor
        if (!card.bgColor || card.bgColor.trim() === '') {
          issues.push(`Card "${card.title}" (${pageKey}[${index}]) is missing bgColor`);
        }
        
        // Check if bgColor follows Tailwind format
        if (card.bgColor && !card.bgColor.startsWith('bg-')) {
          issues.push(`Card "${card.title}" has invalid bgColor format: ${card.bgColor}`);
        }

        // Check if category exists in color palette
        if (!config.colorPalette.categories[card.category as keyof typeof config.colorPalette.categories]) {
          issues.push(`Card "${card.title}" has unknown category: ${card.category}`);
        }
      });
    });

    return {
      isValid: issues.length === 0,
      issues
    };
  }

  /**
   * Optimize color distribution to use category-based colors
   */
  optimizeColorDistribution(): { optimized: CardData[], suggestions: string[] } {
    const analysis = this.analyzeCardColors();
    const optimized: CardData[] = [];
    const suggestions: string[] = [];

    Object.entries(config.pages).forEach(([pageKey, pageData]) => {
      pageData.cards.forEach((card: CardData) => {
        const categoryColors = config.colorPalette.categories[card.category as keyof typeof config.colorPalette.categories];
        
        if (categoryColors && card.bgColor) {
          const categoryColorValues = Object.values(categoryColors);
          
          // Check if current color belongs to the card's category palette
          if (!categoryColorValues.includes(card.bgColor)) {
            const suggestedColor = categoryColors.primary;
            suggestions.push(`Card "${card.title}" uses ${card.bgColor} but should use a ${card.category} category color like ${suggestedColor}`);
            
            optimized.push({
              ...card,
              bgColor: suggestedColor
            });
          }
        }
      });
    });

    return { optimized, suggestions };
  }
}

// Utility functions for easy access
export const analyzeCardColors = () => ColorManager.getInstance().analyzeCardColors();
export const assignMissingColors = () => ColorManager.getInstance().assignMissingColors();
export const generateColorReport = () => ColorManager.getInstance().generateColorReport();
export const validateColorAssignments = () => ColorManager.getInstance().validateColorAssignments();
export const optimizeColorDistribution = () => ColorManager.getInstance().optimizeColorDistribution();

// Default export
export default ColorManager;

