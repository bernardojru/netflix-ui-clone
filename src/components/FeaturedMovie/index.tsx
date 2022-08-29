import {
  Container,
  FeaturedVertical,
  FeaturedHorizontal,
  FeaturedName,
  FeaturedInfo,
  FeaturedPoints,
  FeaturedYear,
  FeaturedSeasons,
  FeaturedDescription,
  FeaturedButtons,
  FeaturedGenres,
} from "./styles";

import { BsPlayFill, BsPlus } from "react-icons/bs";

import { FeaturedData } from "../../hooks/useTmdb";

interface FeaturedMovieProps {
  item: FeaturedData;
}

export function FeaturedMovie({ item }: FeaturedMovieProps) {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }
  return (
    <Container
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${item.backdrop_path}`,
      }}
    >
      <FeaturedVertical>
        <FeaturedHorizontal>
          <FeaturedName>{item.original_name}</FeaturedName>
          <FeaturedInfo>
            <FeaturedPoints>{item.vote_average} pontos</FeaturedPoints>
            <FeaturedYear>{firstDate.getFullYear()}</FeaturedYear>
            <FeaturedSeasons>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </FeaturedSeasons>
          </FeaturedInfo>
          <FeaturedDescription>{description}</FeaturedDescription>
          <FeaturedButtons>
            <a href="#">
              <BsPlayFill /> Assistir{" "}
            </a>
            <a href="#">
              <BsPlus /> Minha Lista{" "}
            </a>
          </FeaturedButtons>
          <FeaturedGenres>
            <strong>Gêneros:</strong> {genres.join(", ")}
          </FeaturedGenres>
        </FeaturedHorizontal>
      </FeaturedVertical>
    </Container>
  );
}
