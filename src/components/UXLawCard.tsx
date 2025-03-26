import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { usePostHog } from "posthog-js/react";
import { useEffect, useState } from "react";

interface UXLawCardProps {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode;
  category: string;
}

export function UXLawCard({ id, title, description, bgColor, icon, category }: UXLawCardProps) {
  const posthog = usePostHog();
  const [isDetailsEnabled, setIsDetailsEnabled] = useState(false);
  
  useEffect(() => {
    if (posthog) {
      posthog.onFeatureFlags(() => {
        setIsDetailsEnabled(posthog.isFeatureEnabled('CardDetails'));
      });
    }
  }, [posthog]);

  if (!isDetailsEnabled) {
    return (
      <div className="block h-full" onClick={() => {
        posthog.capture('card_click', {
          card_id: id,
          card_title: title,
          card_category: category
        });
      }}>
        <Card className="overflow-hidden h-full border-none transition-transform duration-300 hover:-translate-y-1 min-h-[240px] bg-zinc-800">
          <div className={`p-8 ${bgColor} aspect-square flex items-center justify-center`}>
            <div className="w-24 h-24 flex items-center justify-center">
              {icon}
            </div>
          </div>
          <CardContent className="p-6">
            <div className="mb-2">
              <span className="text-xs text-muted-foreground uppercase">{category}</span>
            </div>
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Link 
      href={`/${id}`} 
      className="block h-full"
      onClick={() => {
        posthog.capture('card_click', {
          card_id: id,
          card_title: title,
          card_category: category
        });
      }}
    >
      <Card className="overflow-hidden h-full border-none transition-transform duration-300 hover:-translate-y-1 min-h-[240px] bg-zinc-800"> {/* Added min-height */}
        <div className={`p-8 ${bgColor} aspect-square flex items-center justify-center`}>
          <div className="w-24 h-24 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <CardContent className="p-6">
          <div className="mb-2">
            <span className="text-xs text-muted-foreground uppercase">{category}</span>
          </div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}