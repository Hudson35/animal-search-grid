export type Cat = {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  life_span: string;
  description: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
  weight: {
    imperial: string;
    metric: string;
  };
  wikipedia_url: string;
  reference_image_id?: string;
};

export type CatImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Cat[];
};
