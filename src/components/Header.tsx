
"use client"

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePostHog } from "posthog-js/react";

export function Header() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<number | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isCardsEnabled, setIsCardsEnabled] = useState(false);
  const navWrapperRef = useRef<HTMLDivElement>(null);
  const posthog = usePostHog();

  useEffect(() => {
    if (posthog) {
      posthog.onFeatureFlags(() => {
        setIsCardsEnabled(posthog.isFeatureEnabled('CardsPage'));
      });
    }
  }, [posthog]);

  const links = [
    { href: "/", label: "LAWS" },
    { href: "/frameworks", label: "FRAMEWORKS" },
    { href: "/mental-models", label: "MENTAL MODELS" },
    ...(isCardsEnabled ? [{ href: "/cards", label: "CARDS" }] : []),
    { href: "/about", label: "ABOUT" }
  ];

  const updateArrowsVisibility = () => {
    if (!navWrapperRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = navWrapperRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < maxScrollLeft - 10);
  };

  useEffect(() => {
    const navWrapper = navWrapperRef.current;
    if (!navWrapper) return;

    const { clientWidth, scrollWidth } = navWrapper;
    setShowRightArrow(scrollWidth > clientWidth);

    const handleScroll = () => updateArrowsVisibility();
    navWrapper.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateArrowsVisibility);

    return () => {
      navWrapper.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateArrowsVisibility);
    };
  }, []);

  const scrollLeft = () => {
    if (navWrapperRef.current) {
      navWrapperRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (navWrapperRef.current) {
      navWrapperRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background w-full">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-3 py-1 md:px-12">
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto py-2 md:py-0">
          <Link href="/" className="flex-shrink-0 flex items-center mr-4">
            <div className="h-6 w-6 md:h-8 md:w-8 border border-primary-foreground rounded-full flex items-center justify-center">
              <div className="h-4 w-4 md:h-5 md:w-5 border border-primary-foreground rotate-45"></div>
            </div>
          </Link>
          <h1 className="text-sm md:text-base font-semibold">
            THE PRODUCT MANAGER'S PLAYBOOK
          </h1>
        </div>

        <div className="relative flex-1 md:mx-8 min-w-0">
          <div
            ref={navWrapperRef}
            className="w-full overflow-x-auto scrollbar-hide max-w-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch"
            }}
          >
            <nav className="flex justify-center mx-auto min-w-max">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    posthog.capture('navigation_click', {
                      section: link.label,
                      path: link.href
                    });
                  }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center justify-center whitespace-nowrap px-3 py-2 md:px-6 md:py-4 text-[11px] md:text-sm uppercase transition-colors"
                >
                  <span className="mr-2 flex h-1.5 w-1.5 items-center justify-center">
                    {(pathname === link.href || (hovered === index && pathname !== null)) && (
                      <span
                        className={`h-1.5 w-1.5 rounded-full bg-current ${
                          pathname === link.href ? "opacity-100" : "opacity-40"
                        }`}
                      />
                    )}
                  </span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
