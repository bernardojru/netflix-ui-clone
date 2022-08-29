import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;

  @media (max-width: 760px) {
    height: 80vh;
  }
`;

export const FeaturedVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const FeaturedHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 150px;
  padding-top: 70px;
`;

export const FeaturedName = styled.div`
  font-size: 60px;
  font-weight: bold;

  @media (max-width: 760px) {
    font-size: 40px;
  }
`;

export const FeaturedInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

export const FeaturedPoints = styled.div`
  display: inline-block;
  color: #46d369;
  margin-right: 15px;
`;

export const FeaturedYear = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const FeaturedSeasons = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const FeaturedDescription = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;

  @media (max-width: 760px) {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }
`;

export const FeaturedButtons = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all 0.2s ease;

    &:hover {
      opacity: 0.7;
    }

    :nth-child(1) {
      background-color: #fff;
      color: #000;

      @media (max-width: 760px) {
        font-size: 16px;
      }
    }
    :nth-child(2) {
      background-color: #333;
      color: #fff;

      @media (max-width: 760px) {
        font-size: 16px;
      }
    }
  }
`;

export const FeaturedGenres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;

  @media (max-width: 760px) {
    font-size: 14px;
  }
`;
