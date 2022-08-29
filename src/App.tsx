import { Container, List, Loading } from "./styles/styles";

import { useTmdb } from "./hooks/useTmdb";
import { MovieRow } from "./components/MovieRow";
import { FeaturedMovie } from "./components/FeaturedMovie";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import { BackButtonTop } from "./components/BackButtonTop";

export function App() {
  const { movieList, featuredData } = useTmdb();

  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    function scrollListener() {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener("scroll", scrollListener);
  }, []);
  return (
    <Container>
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}

      <List>
        {movieList.map((item, key) => (
          <MovieRow key={key} item={item} />
        ))}
      </List>

      {movieList.length <= 0 && (
        <Loading>
          <img
            src="https://www.rchandru.com/images/portfolio/modals/m-loading.gif"
            alt=""
          />
        </Loading>
      )}
      <BackButtonTop />

    </Container>
  );
}
