import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Cat, CatImage } from "@/types/Cat";
import { CatContext } from "@/context/AppContext";

const apiKey = process.env.API_KEY;
const API_GET_BREEDS_SEARCH_URL =
  "https://api.thecatapi.com/v1/breeds/search?q=";
const API_GET_IMAGE_BY_ID_URL = "https://api.thecatapi.com/v1/images/";

export default function CatSearch() {
  const router = useRouter();

  const { setCatData } = useContext(CatContext);

  const [search, setSearch] = useState("");
  const [breeds, setBreeds] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | unknown | string>(null);

  const fetchBreeds = async () => {
    if (!search) return; // Don't fetch if search term is empty

    setIsLoading(true);
    setError(null);

    // Get specific cat breed fetch based on search term - REVIEW, I DON'T NEED TO SAVE THIS DATA IN CONTEXT OR STATE I BELIVE
    try {
      const response = await fetch(`${API_GET_BREEDS_SEARCH_URL}${search}`);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data: Cat[] = await response.json();
      setBreeds(data);
      console.log(
        "Returned data from API_GET_BREEDS_SEARCH_URL endpoint:",
        data
      );

      // Get specific cat breed image based on reference_image_id field from above endpoint
      try {
        const res = await fetch(
          `${API_GET_IMAGE_BY_ID_URL}${data[0].reference_image_id}`,
          {
            headers: {
              "x-api-key": `${apiKey}`,
            },
          }
        );
        // Specific cat breed image
        const image: CatImage = await res.json();

        // Update context with fetched data
        setCatData(image);

        // set it in local storage
        localStorage.setItem("catData", JSON.stringify(image));

        console.log(
          "Returned data from API_GET_IMAGE_BY_ID_URL endpoint:",
          image
        );
      } catch (err: any) {
        console.error(
          "Error fetching image (API_GET_IMAGE_BY_ID_URL) endpoint:",
          err
        );
        setError(err.message);
      }
    } catch (err: any) {
      console.error(
        "Error fetching breeds (API_GET_BREEDS_SEARCH_URL) endpoint:",
        err
      );
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  function handleSearchTerm(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  async function handleSearchTermSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    fetchBreeds();

    // push to the specific searched cat breed page
    router.push(`/${search}`);
  }

  return (
    <div className="relative flex items-center">
      <button
        onClick={handleSearchTermSubmit}
        className="absolute left-0 p-3"
      >
        <svg
          className="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Search cats..."
        onChange={handleSearchTerm}
        value={search}
        className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
      />
    </div>
  );
}
