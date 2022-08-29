import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 100px;
`;

export const List = styled.div`
  margin-top: -150px;

  @media (max-width: 760px) {
    margin-top: 0px;
  }
`;

export const Loading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
