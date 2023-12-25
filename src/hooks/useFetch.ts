import { useState } from "react";
import { apiKeys } from "../helpers/apiKeys";
import { Movie } from "../helpers/typeApi";
export const useFetch = () => {
  const { url, API_KEY } = apiKeys();
  const [peliculas, setPeliculas] = useState<Movie[]>([]);
  const fetchPeliculas = async (busqueda: string) => {
    try {
      const response = await fetch(
        `${url}?query=${busqueda}&api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);

      setPeliculas(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  return { fetchPeliculas, peliculas };
};
