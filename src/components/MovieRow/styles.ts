import styled from "styled-components";


export const Container = styled.div`
  margin-bottom: 30px;

  h2 {
    margin: 0px 0px 0px 30px;
  }
`;

export const MovieRowListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;

export const MovieRowList = styled.div`
transition: all ease .5s;
`;

export const MovieRowItem = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;

  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(1);
    }
  }
`;

export const MovieRowLeft = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  left: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const MovieRowRight = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  right: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  cursor: pointer;

  background-color: rgba(0, 0, 0, 0.6);
`;
