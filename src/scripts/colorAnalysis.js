import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple color analysis script
async function analyzeAndFixColors() {
  const configPath = path.join(__dirname, '../config/appConfig.json');
  
  try {
    console.log('🎨 Analyzing card colors...\n');
    
    // Read config file
    const configContent = fs.readFileSync(configPath, 'utf8');
    const config = JSON.parse(configContent);
    
    let totalCards = 0;
    let cardsWithColors = 0;
    let cardsMissingColors = 0;
    const missingColorCards = [];
    const colorDistribution = {};
    const categoryDistribution = {};
    
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
            ...card,
            pageKey,
            index
          });
        }
      });
    });
    
    // Print analysis
    console.log('📊 Analysis Results:');
    console.log(`Total Cards: ${totalCards}`);
    console.log(`Cards with Colors: ${cardsWithColors}`);
    console.log(`Cards Missing Colors: ${cardsMissingColors}`);
    console.log(`Coverage: ${((cardsWithColors / totalCards) * 100).toFixed(1)}%\n`);
    
    if (cardsMissingColors > 0) {
      console.log('❌ Cards Missing Colors:');
      missingColorCards.forEach(card => {
        console.log(`  - ${card.title} (${card.category}) in ${card.pageKey}`);
      });
      console.log('');
      
      // Auto-assign colors
      console.log('🔧 Auto-assigning colors based on categories...\n');
      
      let updatedCount = 0;
      missingColorCards.forEach(missingCard => {
        const categoryColors = config.colorPalette.categories[missingCard.category];
        
        if (categoryColors) {
          const assignedColor = categoryColors.primary;
          
          // Update the card in the config
          config.pages[missingCard.pageKey].cards[missingCard.index].bgColor = assignedColor;
          updatedCount++;
          
          console.log(`✅ Assigned ${assignedColor} to "${missingCard.title}" (${missingCard.category})`);
        } else {
          console.log(`⚠️  Unknown category "${missingCard.category}" for card "${missingCard.title}"`);
        }
      });
      
      if (updatedCount > 0) {
        // Write back to file
        const updatedContent = JSON.stringify(config, null, 2);
        fs.writeFileSync(configPath, updatedContent, 'utf8');
        console.log(`\n💾 Updated ${updatedCount} cards and saved to config file!`);
      }
    } else {
      console.log('✅ All cards already have color assignments!');
    }
    
    // Color distribution report
    console.log('\n🎨 Color Distribution:');
    Object.entries(colorDistribution)
      .sort(([,a], [,b]) => b - a)
      .forEach(([color, count]) => {
        console.log(`  ${color}: ${count} cards`);
      });
    
    console.log('\n📂 Category Distribution:');
    Object.entries(categoryDistribution)
      .sort(([,a], [,b]) => b - a)
      .forEach(([category, count]) => {
        console.log(`  ${category}: ${count} cards`);
      });
      
    console.log('\n🎉 Color analysis completed!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the analysis
analyzeAndFixColors();
