import { PageFooter } from "@/components/page-footer";
import { PageHeader } from "@/components/page-header";
import PlausibleTracker from "@/lib/plausible-tracker";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Track and Customize Your New World Progress - Aeternum Tracker",
  description:
    "Level 60 in New World? Explore Aeternum's endgame with Aeternum Tracker. Discover expeditions, Outpost Rush, territory defense, gear expertise, Gypsum, and Umbral Shards. Enhance your New World journey today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark select-none">
      <head />
      <body className={inter.className}>
        <PageHeader />
        <div className="min-h-screen pt-20 flex flex-col">
          {children}
          <PageFooter />
        </div>
        <PlausibleTracker
          domain="aeternum-tracker.th.gl"
          apiHost="https://metrics.th.gl"
        />
        <Toaster />
      </body>
    </html>
  );
}
