import styled from "styled-components";

export const Container = styled.div<{ black: boolean }>`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  transition: all ease .5s;
  background: ${(prop) => (prop.black ? "#141414" : "transparent")};
`;

export const Logo = styled.div`
  height: 25px;

  > a {
    text-decoration: none;
    color: red;
    font-weight: bold;
    font-size: 2rem;
  }
`;

export const User = styled.div`
  height: 35px;
`;
