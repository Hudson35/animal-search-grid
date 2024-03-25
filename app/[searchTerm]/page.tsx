"use client";
import React, { useContext } from "react";
import { CatContext } from "@/context/AppContext";
import Image from "next/image";

export default function SearchResultsPage() {
  const { catData } = useContext(CatContext);

  if (!catData) {
    return <p>Loading...</p>; // Handle loading state
  }

  return (
    <div className="w-1/2 mx-auto py-14">
      <div className="flex flex-col items-center gap-8 rounded-xl bg-slate-100">
        <div className="text-3xl text-gray-800 italic font-extrabold text-center">
          {catData.breeds[0].name}
        </div>
        <div className="mx-auto">
          <Image
            src={catData.url}
            alt="cat"
            width={400}
            height={400}
            className="w-full rounded-full"
          />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-xl text-gray-800 font-semibold text-center py-1">
            Temperament:{" "}
            <span className="text-lg font-medium">
              {catData.breeds[0].temperament}
            </span>
          </p>
          <p className="text-xl text-gray-800 font-semibold text-center py-1">
            Origin:{" "}
            <span className="text-lg font-medium">
              {catData.breeds[0].origin}
            </span>
          </p>
          <p className="text-xl text-gray-800 font-semibold text-center py-1">
            Life Span:{" "}
            <span className="text-lg font-medium">
              {catData.breeds[0].life_span}
            </span>
          </p>
          <p className="text-xl text-gray-800 font-semibold text-left py-1">
            Description:{" "}
            <span className="text-lg font-medium">
              {catData.breeds[0].description}
            </span>
          </p>
          <p className="text-xl text-gray-800 font-semibold text-center py-1">
            Weight:{" "}
            <span className="text-lg font-medium">
              {catData.breeds[0].weight.imperial} lbs /{" "}
              {catData.breeds[0].weight.metric} kg
            </span>
          </p>
          <p className="text-xl text-gray-800 font-semibold text-center py-1">
            Wiki:{" "}
            <span className="text-lg font-medium">
              <a
                href={catData.breeds[0].wikipedia_url}
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-500"
              >
                Learn more
              </a>
            </span>
          </p>
        </div>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-slate-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-1/2"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
