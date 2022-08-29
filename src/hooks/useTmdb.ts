import { useState, useEffect } from "react";
import Tmdb from "../Tmdb";

interface Items {
  page: number;
  results: {
    poster_path: string;
    original_title: string;
  }[];
}

export interface MovieList {
  slug: string;
  title: string;
  items: Items;
}

export interface FeaturedData {
  original_name: string;
  backdrop_path: string;
  vote_average: number;
  number_of_seasons: number;
  overview: string
  first_air_date: number
  genres: {
    id: number
    name: string
  }[]
}

export function useTmdb() {
  const [movieList, setMovieList] = useState<MovieList[]>([]);
  const [featuredData, setFeaturedData] = useState<FeaturedData | any>(null);

  useEffect(() => {
    async function loadAll() {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, []);

  return { movieList, featuredData };
}
