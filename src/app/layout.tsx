import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PostHogProvider } from "@/components/PostHogProvider";

export const metadata: Metadata = {
  title: "The Product Playbook | A Collection of Product Management Principles",
  description:
    "The Product Playbook is a collection of best practices that PMs can consider when building products.",
  metadataBase: new URL("https://lawsofproduct.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("font-mono min-h-screen bg-[#121212]")}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
