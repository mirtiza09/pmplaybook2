import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PostHogProvider } from "@/components/PostHogProvider";
import config from "@/config/appConfig.json";

export const metadata: Metadata = {
  title: config.site.metaTitle,
  description: config.site.metaDescription,
  metadataBase: new URL(config.site.baseUrl),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("font-['Consolas'] min-h-screen bg-[#121212]")}>
        {<PostHogProvider>{children}</PostHogProvider>}
      </body>
    </html>
  );
}
