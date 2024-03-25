"use client";
import { useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CatContext } from "@/context/AppContext";
import { CatImage } from "@/types/Cat";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [catData, setCatData] = useState<CatImage | null>(null);

  return (
    <html lang="en">
      <body className={inter.className}>
        <CatContext.Provider value={{ catData, setCatData }}>
          <Navbar />
          {children}
        </CatContext.Provider>
      </body>
    </html>
  );
}
