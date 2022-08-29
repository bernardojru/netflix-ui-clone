import {
  Container,
  MovieRowListArea,
  MovieRowList,
  MovieRowItem,
  MovieRowLeft,
  MovieRowRight,
} from "./styles";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import { MovieList } from "../../hooks/useTmdb";
import { useState } from "react";

interface MovieRowProps {
  item: MovieList;
  key: number;
}

export function MovieRow({ item }: MovieRowProps) {
  const [scrollX, setScrollX] = useState(-400);

  function handleLeftArrow() {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  }

  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerHeight / 2);
    let listW = item.items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }

    setScrollX(x);
  }
  return (
    <Container>
      <h2>{item.title}</h2>

      <MovieRowLeft onClick={handleLeftArrow}>
        <BsArrowLeftShort size={30} />
      </MovieRowLeft>
      <MovieRowRight onClick={handleRightArrow}>
        <BsArrowRightShort size={30} />
      </MovieRowRight>

      <MovieRowListArea>
        <MovieRowList
          style={{
            marginLeft: scrollX,
            width: item.items.results.length * 150,
          }}
        >
          {item.items.results.length > 0 &&
            item.items.results.map((i, key) => (
              <MovieRowItem key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${i.poster_path}`}
                  alt={i.original_title}
                />
              </MovieRowItem>
            ))}
        </MovieRowList>
      </MovieRowListArea>
    </Container>
  );
}
