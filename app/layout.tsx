import type { Metadata } from "next";
import { Lato as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

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
        <div className="px-48 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
