"use client";
import React, { useState } from "react";
import CatSearch from "@/components/CatSearch";

const Navbar: React.FC = () => {
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

export default Navbar;
