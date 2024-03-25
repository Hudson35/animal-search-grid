"use client";
import React from "react";
import CatSearch from "@/components/CatSearch";

export default function Navbar() {
  return (
    <nav className="bg-slate-600">
      <div className="container w-3/4 mx-auto py-2 flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">
          Meow Match
        </a>
        <div>
          <CatSearch />
        </div>
      </div>
    </nav>
  );
};
