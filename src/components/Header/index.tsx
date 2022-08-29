import { Container, Logo, User } from "./styles";
import { BsPersonCircle } from "react-icons/bs";

interface HeaderProp {
    black: boolean
}

export function Header({black}:HeaderProp) {
  return (
    <Container black={black}>
      <Logo>
        <a href="#">NETFLIX</a>
      </Logo>
      <User>
        <BsPersonCircle  size={30}/>
      </User>
    </Container>
  );
}
