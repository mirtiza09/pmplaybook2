
"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import config from "@/config/appConfig.json";

export default function AboutPage() {
  const aboutConfig = config.pages.about;
  const diagramSection = aboutConfig.sections.find(section => section.type === "diagram");
  const contentSection = aboutConfig.sections.find(section => section.type === "content");

  const getIconSvg = (iconName: string) => {
    switch (iconName) {
      case "search":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        );
      case "layers":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        );
      case "plus":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M2 12h20" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
      <section className="pt-32 px-6 md:px-12 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-normal mb-12">
            {aboutConfig.title}
          </h1>
          
          {diagramSection && diagramSection.items && (
            <div className="flex justify-center mb-16">
              <div className="w-full max-w-xl aspect-video flex items-center justify-between">
                {diagramSection.items.map((item, index) => (
                  <React.Fragment key={item.title}>
                    <div className="flex flex-col items-center gap-4">
                      {getIconSvg(item.icon)}
                      <span className="text-sm">{item.title}</span>
                    </div>
                    {index < diagramSection.items.length - 1 && (
                      <div className="flex-1 h-[2px] bg-zinc-800 mx-4"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {contentSection && contentSection.paragraphs && (
            <div className="space-y-8 text-lg">
              {contentSection.paragraphs.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
