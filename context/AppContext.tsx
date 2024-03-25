"use client";
import { Cat, CatImage } from "@/types/Cat";
import React, { createContext, useState } from "react";

export type CatContextValue = {
  catData: CatImage | null; // Data to store
  setCatData: (data: CatImage | null) => void; // Function to update the data
};

const CatContext = createContext<CatContextValue>({
  catData: null,
  setCatData: () => {},
});

export { CatContext };
