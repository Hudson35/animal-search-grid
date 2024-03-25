
import CatCard from "@/components/CatCard";
import { Cat } from "@/types/Cat";

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_GET_BREEDS_URL;

export default async function Home() {
  const res = await fetch(`${apiUrl}`, {
    headers: {
      "x-api-key": `${apiKey}`,
    },
  });

  // cat breeds
  const breeds: Cat[] = await res.json();
  console.log("Returned data from API_GET_BREEDS_URL:", breeds);

  return (
    <div className="w-full h-screen">
      <div className="w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 justify-center py-16 max-w-screen-2xl">
        {breeds.map((cat: Cat) => (
          <CatCard 
            key={cat.id}
            id={cat.id}
            name={cat.name}
            temperament={cat.temperament} 
            origin={cat.origin} 
            life_span={cat.life_span} 
            description={cat.description}
            image={cat.image} 
            weight={cat.weight}   
            wikipedia_url={cat.wikipedia_url}       
          />
        ))}
      </div>
    </div>
  );
}
