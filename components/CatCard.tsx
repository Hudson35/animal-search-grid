"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Cat } from "@/types/Cat";
import CatDetails from "@/components/CatDetails";

export default function CatCard({
  id,
  name,
  temperament,
  origin,
  life_span,
  description,
  image,
  weight,
  wikipedia_url,
}: Cat) {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(!showPopup);
  const closePopup = () => setShowPopup(false);

  return (
    <div className="flex flex-col rounded-xl">
      <div className="">
        <Image
          src={image?.url}
          alt="cat"
          width={200}
          height={200}
          className="w-full h-52 object-cover rounded-t-lg"
        />
      </div>
      <div className="text-lg text-gray-800 font-bold text-center py-4">
        {name}
      </div>
      <div>
        {showPopup && (
          <CatDetails
            temperament={temperament}
            origin={origin}
            life_span={life_span}
            description={description}
            weight={weight}
            wikipedia_url={wikipedia_url}
          />
        )}
        <button
          onClick={openPopup}
          className="bg-slate-600 text-white w-full py-2 rounded-b-lg cursor-pointer"
        >
          {!showPopup ? "Details" : "Close"}
        </button>
      </div>
    </div>
  );
}
