#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { 
  analyzeCardColors, 
  assignMissingColors, 
  generateColorReport,
  validateColorAssignments,
  optimizeColorDistribution 
} from '../utils/colorManager.js';

const CONFIG_PATH = path.join(process.cwd(), 'src/config/appConfig.json');

async function main() {
  console.log('🎨 Card Color Management Tool\n');

  try {
    // 1. Generate initial analysis report
    console.log('📊 Analyzing current color assignments...\n');
    const report = generateColorReport();
    console.log(report);

    // 2. Validate color assignments
    console.log('\n🔍 Validating color assignments...\n');
    const validation = validateColorAssignments();
    
    if (validation.isValid) {
      console.log('✅ All color assignments are valid!');
    } else {
      console.log('❌ Found color assignment issues:');
      validation.issues.forEach(issue => console.log(`  - ${issue}`));
    }

    // 3. Check for missing colors and fix them
    const analysis = analyzeCardColors();
    
    if (analysis.cardsMissingColors > 0) {
      console.log(`\n🔧 Found ${analysis.cardsMissingColors} cards missing colors. Attempting to fix...`);
      
      const { updated, errors } = assignMissingColors();
      
      if (errors.length > 0) {
        console.log('\n❌ Errors during color assignment:');
        errors.forEach(error => console.log(`  - ${error}`));
      }

      if (updated.length > 0) {
        console.log(`\n✅ Successfully assigned colors to ${updated.length} cards:`);
        updated.forEach(card => {
          console.log(`  - ${card.title} (${card.category}): ${card.bgColor}`);
        });

        // Update the config file
        console.log('\n💾 Updating configuration file...');
        await updateConfigFile(updated);
        console.log('✅ Configuration file updated successfully!');
      }
    } else {
      console.log('\n✅ All cards already have color assignments!');
    }

    // 4. Optimize color distribution
    console.log('\n🎯 Checking color distribution optimization...');
    const optimization = optimizeColorDistribution();
    
    if (optimization.suggestions.length > 0) {
      console.log('\n💡 Color optimization suggestions:');
      optimization.suggestions.forEach(suggestion => console.log(`  - ${suggestion}`));
    } else {
      console.log('✅ Color distribution is already optimized!');
    }

    console.log('\n🎉 Color management completed successfully!');

  } catch (error) {
    console.error('❌ Error during color management:', error);
    process.exit(1);
  }
}

async function updateConfigFile(updatedCards) {
  try {
    // Read current config
    const configContent = fs.readFileSync(CONFIG_PATH, 'utf8');
    const config = JSON.parse(configContent);    // Update cards with new colors
    updatedCards.forEach(updatedCard => {
      // Find and update the card in the config
      Object.keys(config.pages).forEach(pageKey => {
        const cardIndex = config.pages[pageKey].cards.findIndex(
          (card) => card.id === updatedCard.id
        );
        
        if (cardIndex !== -1) {
          config.pages[pageKey].cards[cardIndex].bgColor = updatedCard.bgColor;
        }
      });
    });

    // Write back to file with proper formatting
    const updatedContent = JSON.stringify(config, null, 2);
    fs.writeFileSync(CONFIG_PATH, updatedContent, 'utf8');

  } catch (error) {
    throw new Error(`Failed to update config file: ${error}`);
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('Script failed:', error);
    process.exit(1);
  });
}

export { main, updateConfigFile };
