"use client"

import { useEffect, useRef, useState } from "react"
import { usePostHog } from "posthog-js/react"
import { cn } from "@/lib/utils"

interface CategoryTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories?: string[];
}

interface TabProps {
  label: string
  isSelected?: boolean
  onClick?: () => void
}

export function CategoryTabs({ 
  activeCategory, 
  setActiveCategory, 
  categories = ["ALL", "DISCOVERY", "OPERATIONS", "DELIVERY", "UX"] 
}: CategoryTabsProps) {
  const tabs = categories.map((category) => ({ label: category }));
  const initialIndex = categories.findIndex(cat => cat === activeCategory) || 0;
  
  const posthog = usePostHog();

  const handleTabChange = (index: number) => {
    const newCategory = categories[index];
    setActiveCategory(newCategory);
    posthog.capture('category_change', {
      from: activeCategory,
      to: newCategory
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <TabBar 
        tabs={tabs} 
        onTabChange={handleTabChange} 
        selectedIndex={initialIndex}
        className="border border-white text-center" 
      />
    </div>
  );
}

interface TabBarProps {
  tabs: TabProps[]
  onTabChange?: (index: number) => void
  selectedIndex?: number
  className?: string
}

function TabBar({ tabs, onTabChange, selectedIndex = 0, className }: TabBarProps) {
  const [selected, setSelected] = useState(selectedIndex)
  const [hovered, setHovered] = useState<number | null>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const tabsWrapperRef = useRef<HTMLDivElement>(null)
  const tabsListRef = useRef<HTMLDivElement>(null)

  const handleTabClick = (index: number) => {
    setSelected(index)
    if (onTabChange) {
      onTabChange(index)
    }
  }

  const handleMouseEnter = (index: number) => {
    setHovered(index)
  }

  const handleMouseLeave = () => {
    setHovered(null)
  }

  const scrollLeft = () => {
    if (tabsWrapperRef.current) {
      tabsWrapperRef.current.scrollBy({ left: -150, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (tabsWrapperRef.current) {
      tabsWrapperRef.current.scrollBy({ left: 150, behavior: "smooth" })
    }
  }

  const updateArrowsVisibility = () => {
    if (!tabsWrapperRef.current) return

    const { scrollLeft, clientWidth, scrollWidth } = tabsWrapperRef.current
    const maxScrollLeft = scrollWidth - clientWidth

    setShowLeftArrow(scrollLeft > 10)
    setShowRightArrow(scrollLeft < maxScrollLeft - 10)
  }

  useEffect(() => {
    const tabsWrapper = tabsWrapperRef.current
    if (!tabsWrapper) return

    const { clientWidth, scrollWidth } = tabsWrapper
    setShowRightArrow(scrollWidth > clientWidth)

    const handleScroll = () => {
      updateArrowsVisibility()
    }

    tabsWrapper.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", updateArrowsVisibility)

    return () => {
      tabsWrapper.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateArrowsVisibility)
    }
  }, [])

  useEffect(() => {
    updateArrowsVisibility()
  }, [tabs])
  
  useEffect(() => {
    setSelected(selectedIndex)
  }, [selectedIndex])

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {showLeftArrow && (
        <div
          onClick={scrollLeft}
          className="absolute left-0 z-10 flex h-full w-8 cursor-pointer items-center justify-center bg-black"
          aria-label="Scroll Left"
        >
          <div className="h-0 w-0 border-b-[6px] border-r-[10px] border-t-[6px] border-b-transparent border-r-white border-t-transparent" />
        </div>
      )}

      <div
        ref={tabsWrapperRef}
        className="w-full overflow-x-scroll scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div ref={tabsListRef} className="flex w-max justify-center mx-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="flex items-center justify-center whitespace-nowrap px-6 py-4 text-xs md:text-sm uppercase transition-colors"
              aria-selected={selected === index}
            >
              <span className="mr-2 flex h-1.5 w-1.5 items-center justify-center">
                {(selected === index || (hovered === index && selected !== null)) && (
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full bg-current",
                      selected === index ? "opacity-100" : "opacity-40",
                    )}
                  />
                )}
              </span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {showRightArrow && (
        <div
          onClick={scrollRight}
          className="absolute right-0 z-10 flex h-full w-8 cursor-pointer items-center justify-center bg-black"
          aria-label="Scroll Right"
        >
          <div className="h-0 w-0 border-b-[6px] border-l-[10px] border-t-[6px] border-b-transparent border-l-white border-t-transparent" />
        </div>
      )}
    </div>
  )
}