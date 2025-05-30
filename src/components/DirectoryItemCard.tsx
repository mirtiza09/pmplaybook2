import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { usePostHog } from "posthog-js/react";
import { useEffect, useState, useRef } from "react";
import { getCategoryDisplayName, mapSectionToRoute } from "@/data/configService";
import { useRouter } from "next/navigation";
import "../styles/card-transition.css";
import "../styles/card-transition.css";

interface DirectoryItemCardProps {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode; // Changed back to React.ReactNode
  category: string;
  sectionId?: string; // For dynamic routing
}

export function DirectoryItemCard({ 
  id, 
  title, 
  description, 
  bgColor, 
  icon, // Changed back to icon
  category,
  sectionId = "sectionAlpha"
}: DirectoryItemCardProps) {
  const posthog = usePostHog();
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Get the display name for the category
  const categoryDisplayName = getCategoryDisplayName(category, sectionId);// BULLETPROOF COLOR SYSTEM - Complete mapping of ALL Tailwind bg colors to inline styles
  // This bypasses Tailwind's purging entirely and ensures 100% reliability
  const getColorStyle = () => {
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
      'bg-orange-900': '#7c2d12'
    };

    return { backgroundColor: colorMap[bgColor] || '#6b7280' }; // Fallback to gray-500 if color not found
  };  const handleCardClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    posthog?.capture('directory_item_click', {
      item_id: id,
      item_title: title,
      item_category: category,
      section_id: sectionId
    });

    if (!cardRef.current) return;

    // Store transition data in sessionStorage for the destination page
    const cardRect = cardRef.current.getBoundingClientRect();
    const transitionData = {
      startX: cardRect.left,
      startY: cardRect.top,
      startWidth: cardRect.width,
      startHeight: cardRect.height,
      itemId: id,
      timestamp: Date.now()
    };
    
    sessionStorage.setItem('cardTransition', JSON.stringify(transitionData));
      // Add immediate smooth fade and scale effect
    setIsTransitioning(true);
    if (cardRef.current) {
      cardRef.current.style.transition = 'all 150ms cubic-bezier(0.4, 0.0, 0.2, 1)';
      cardRef.current.style.transform = 'scale(0.97) translateZ(0)';
      cardRef.current.style.opacity = '0.9';
    }
    
    // Navigate immediately without delay for seamless transition
    router.push(`/${mapSectionToRoute(sectionId)}/${id}`);
  };

  // Default to clickable (enabled)
  const [isDetailsEnabled, setIsDetailsEnabled] = useState(true);

  useEffect(() => {
    if (posthog) {
      posthog.onFeatureFlags(() => {
        const flag = posthog.isFeatureEnabled('CardDetails');
        setIsDetailsEnabled(flag === undefined ? true : flag);
      });
    }
  }, [posthog]);  if (!isDetailsEnabled) {    return (      <div 
        ref={cardRef}
        className={`block h-full cursor-pointer shared-element-transition ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} 
        onClick={handleCardClick}
      >
        <Card className="overflow-hidden h-full border-none transition-transform duration-300 hover:-translate-y-1 min-h-[240px] bg-zinc-800">
          <div className="p-8 aspect-square flex items-center justify-center" style={getColorStyle()}>
            <div className="w-24 h-24 flex items-center justify-center">
              {icon}
            </div>
          </div>
          <CardContent className="p-6">
            <div className="mb-2">
              <span className="text-xs text-muted-foreground uppercase">{categoryDisplayName}</span>
            </div>
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </div>
    );
  }  return (    <div 
      ref={cardRef}
      className={`block h-full cursor-pointer shared-element-transition ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      onClick={handleCardClick}
    >
      <Card className="overflow-hidden h-full border-none transition-transform duration-300 hover:-translate-y-1 min-h-[240px] bg-zinc-800">
        <div className="p-8 aspect-square flex items-center justify-center" style={getColorStyle()}>
          <div className="w-24 h-24 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <CardContent className="p-6">
          <div className="mb-2">
            <span className="text-xs text-muted-foreground uppercase">{categoryDisplayName}</span>
          </div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
