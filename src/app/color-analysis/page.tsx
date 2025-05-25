"use client";

import { useEffect } from 'react';
import colorAnalysis from '@/utils/colorAnalysis';

export default function ColorAnalysisPage() {
  useEffect(() => {
    // Run color analysis when page loads
    console.log('Running color analysis...');
    const analysis = colorAnalysis.verifyCardColors();
    
    // Get color suggestions
    console.log('\n' + '='.repeat(50));
    const suggestions = colorAnalysis.getColorSuggestions();
    
    // Check palette usage
    console.log('\n' + '='.repeat(50));
    colorAnalysis.checkColorPaletteUsage();
      // Make available globally
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).colorAnalysis = colorAnalysis;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).runAnalysis = () => {
        colorAnalysis.verifyCardColors();
        colorAnalysis.getColorSuggestions(); 
        colorAnalysis.checkColorPaletteUsage();
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Color Analysis Dashboard</h1>
        
        <div className="bg-card rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <div className="space-y-2 text-sm">
            <p>1. Open your browser's Developer Console (F12)</p>
            <p>2. Look for the color analysis results that have been automatically logged</p>
            <p>3. You can also run these commands manually:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><code className="bg-muted px-2 py-1 rounded">window.runAnalysis()</code> - Full analysis</li>
              <li><code className="bg-muted px-2 py-1 rounded">window.verifyCardColors()</code> - Check missing colors</li>
              <li><code className="bg-muted px-2 py-1 rounded">window.getColorSuggestions()</code> - Get color suggestions</li>
              <li><code className="bg-muted px-2 py-1 rounded">window.checkColorPaletteUsage()</code> - Check palette usage</li>
            </ul>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Color Palette Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries({
              discovery: { primary: "bg-red-900", secondary: "bg-pink-900", tertiary: "bg-rose-900", accent: "bg-red-800" },
              operations: { primary: "bg-teal-900", secondary: "bg-cyan-900", tertiary: "bg-blue-900", accent: "bg-teal-800" },
              delivery: { primary: "bg-amber-900", secondary: "bg-yellow-900", tertiary: "bg-orange-900", accent: "bg-amber-800" },
              ux: { primary: "bg-purple-900", secondary: "bg-indigo-900", tertiary: "bg-violet-900", accent: "bg-purple-800" },
              strategy: { primary: "bg-green-900", secondary: "bg-emerald-900", tertiary: "bg-lime-900", accent: "bg-green-800" },
              stakeholder: { primary: "bg-blue-900", secondary: "bg-sky-900", tertiary: "bg-cyan-900", accent: "bg-blue-800" },
              prioritization: { primary: "bg-orange-900", secondary: "bg-red-900", tertiary: "bg-pink-900", accent: "bg-orange-800" },
              growth: { primary: "bg-emerald-900", secondary: "bg-green-900", tertiary: "bg-teal-900", accent: "bg-emerald-800" },
              thinking: { primary: "bg-blue-800", secondary: "bg-purple-800", tertiary: "bg-gray-800", accent: "bg-blue-700" },
              systems: { primary: "bg-green-800", secondary: "bg-teal-800", tertiary: "bg-cyan-800", accent: "bg-green-700" },
              numeracy: { primary: "bg-indigo-800", secondary: "bg-violet-800", tertiary: "bg-purple-800", accent: "bg-indigo-700" },
              microeconomics: { primary: "bg-yellow-800", secondary: "bg-orange-800", tertiary: "bg-red-800", accent: "bg-yellow-700" },
              "human nature": { primary: "bg-pink-800", secondary: "bg-rose-800", tertiary: "bg-fuchsia-800", accent: "bg-pink-700" }
            }).map(([category, colors]) => (
              <div key={category} className="border rounded-lg p-3">
                <h3 className="font-medium mb-2 capitalize">{category}</h3>
                <div className="space-y-1">
                  {Object.entries(colors).map(([variant, color]) => (
                    <div key={variant} className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded ${color}`}></div>
                      <span className="text-xs">{variant}: {color}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
