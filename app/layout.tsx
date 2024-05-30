import type { Metadata } from "next";
import { Lato as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react";
import Loading from "./loading";

const fontSans = FontSans({weight: ['100', '300'], subsets: ["latin"], variable: '--font-sans'});

export const metadata: Metadata = {
  title: "Gabriel",
  description: "Gabriel's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Navbar />
        <Suspense fallback={<Loading/>}>
          <div className="md:px-48 px-12 py-8">
            {children}
            <Analytics/>
            <Toaster />
          </div>
        </Suspense>
      </body>
      
    </html>
  );
}
