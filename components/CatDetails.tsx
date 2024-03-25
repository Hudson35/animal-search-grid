import { Cat } from "@/types/Cat";
import { useState } from "react";

type CatDetailsProps = Omit<Cat, "id" | "name" | "image">;

export default function CatDetails({
  temperament,
  origin,
  life_span,
  description,
  weight,
  wikipedia_url,
}: CatDetailsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`popup ${isOpen ? "active" : ""}`}>
      <div className="pb-4 px-2">
        <div className="flex justify-between items-center pb-2">
          <h2 className="text-xl font-bold">Details</h2>
        </div>
        <div className="text-left">
          <p>
            <span className="font-bold">Temperament:</span> {temperament}
          </p>
          <p>
            <span className="font-bold">Origin:</span> {origin}
          </p>
          <p>
            <span className="font-bold">Life Span:</span> {life_span}
          </p>
          <p>
            <span className="font-bold">Description:</span> {description}
          </p>
          <p>
            <span className="font-bold">Weight:</span> {weight.imperial} lbs /{" "}
            {weight.metric} kg
          </p>
          <p>
            <span className="font-bold">Wikipedia:</span>{" "}
            <a
              href={wikipedia_url}
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-500"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
