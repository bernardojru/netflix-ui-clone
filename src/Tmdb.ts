const apiBase = "https://api.themoviedb.org/3";
const apiKey = "38c007f28d5b66f36b9c3cf8d8452a4b";


async function basicFetch(endpoint: string) {
  const req = await fetch(`${apiBase}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        slug: "topRated",
        title: "Em Alta",
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentário",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${apiKey}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId: string, type: string) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${apiKey}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${apiKey}`
          );
          break;
        default:
          info = !null;
          break;
      }
    }

    return info;
  },
};
