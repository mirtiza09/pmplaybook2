import config from '@/config/appConfig.json';

// Simple color verification for the browser console
export function verifyCardColors() {
  console.log('🎨 Card Color Analysis\n');
    let totalCards = 0;
  let cardsWithColors = 0;
  let cardsMissingColors = 0;
  const missingColorCards: Array<{
    title: string;
    category: string;
    pageKey: string;
    index: number;
  }> = [];
  const colorDistribution: Record<string, number> = {};
  const categoryDistribution: Record<string, number> = {};
  
  // Analyze all cards
  Object.entries(config.pages).forEach(([pageKey, pageData]) => {
    pageData.cards.forEach((card, index) => {
      totalCards++;
      
      // Track category distribution
      categoryDistribution[card.category] = (categoryDistribution[card.category] || 0) + 1;
      
      if (card.bgColor && card.bgColor.trim() !== '') {
        cardsWithColors++;
        colorDistribution[card.bgColor] = (colorDistribution[card.bgColor] || 0) + 1;
      } else {
        cardsMissingColors++;
        missingColorCards.push({
          title: card.title,
          category: card.category,
          pageKey,
          index
        });
      }
    });
  });
  
  // Print results
  console.log('📊 Analysis Results:');
  console.log(`Total Cards: ${totalCards}`);
  console.log(`Cards with Colors: ${cardsWithColors}`);
  console.log(`Cards Missing Colors: ${cardsMissingColors}`);
  console.log(`Coverage: ${((cardsWithColors / totalCards) * 100).toFixed(1)}%`);
  
  if (cardsMissingColors > 0) {
    console.log('\n❌ Cards Missing Colors:');
    missingColorCards.forEach(card => {
      console.log(`  - ${card.title} (${card.category}) in ${card.pageKey}`);
    });
  } else {
    console.log('\n✅ All cards have color assignments!');
  }
  
  console.log('\n🎨 Color Distribution:');
  Object.entries(colorDistribution)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10) // Show top 10
    .forEach(([color, count]) => {
      console.log(`  ${color}: ${count} cards`);
    });
  
  console.log('\n📂 Category Distribution:');
  Object.entries(categoryDistribution)
    .sort(([,a], [,b]) => b - a)
    .forEach(([category, count]) => {
      console.log(`  ${category}: ${count} cards`);
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

// Auto-assign missing colors based on category
export function getColorSuggestions() {
  const analysis = verifyCardColors();
  
  if (analysis.cardsMissingColors === 0) {
    console.log('\n✅ No missing colors to fix!');
    return [];
  }
  
  console.log('\n🔧 Color Assignment Suggestions:');
    const suggestions = analysis.missingColorCards.map(card => {
    const categoryColors = config.colorPalette.categories[card.category as keyof typeof config.colorPalette.categories];
    
    if (categoryColors) {
      const suggestedColor = categoryColors.primary;
      console.log(`  - ${card.title}: Use ${suggestedColor} (${card.category} primary)`);
      
      return {
        pageKey: card.pageKey,
        cardIndex: card.index,
        title: card.title,
        category: card.category,
        suggestedColor
      };
    } else {
      console.log(`  - ${card.title}: ⚠️ Unknown category "${card.category}"`);
      return null;
    }
  }).filter(Boolean);
  
  return suggestions;
}

// Check color palette coverage
export function checkColorPaletteUsage() {
  console.log('\n🎯 Color Palette Usage Analysis');
  
  const allCards: Array<{
    id: string;
    title: string;
    category: string;
    bgColor: string;
    pageKey: string;
  }> = [];
  Object.entries(config.pages).forEach(([pageKey, pageData]) => {
    pageData.cards.forEach(card => {
      if (card.bgColor) {
        allCards.push({ ...card, pageKey });
      }
    });
  });
  
  console.log('\n📋 Category Color Usage:');
  Object.entries(config.colorPalette.categories).forEach(([category, colors]) => {
    console.log(`\n${category}:`);
    
    const categoryCards = allCards.filter(card => card.category === category);
    console.log(`  Cards in category: ${categoryCards.length}`);
    
    Object.entries(colors).forEach(([variant, color]) => {
      const usage = categoryCards.filter(card => card.bgColor === color).length;
      console.log(`    ${variant} (${color}): ${usage} cards`);
    });
  });
  
  return { allCards, categoryUsage: config.colorPalette.categories };
}

// Make functions available globally for browser console
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).verifyCardColors = verifyCardColors;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).getColorSuggestions = getColorSuggestions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).checkColorPaletteUsage = checkColorPaletteUsage;
}

const colorAnalysisModule = {
  verifyCardColors,
  getColorSuggestions,
  checkColorPaletteUsage
};

export default colorAnalysisModule;
