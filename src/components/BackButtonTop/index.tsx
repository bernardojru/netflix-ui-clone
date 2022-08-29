import { Container, Button } from "./styles";
import { AiOutlineArrowUp } from "react-icons/ai";

export function BackButtonTop() {
  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Container>
      <Button onClick={scrollUp}>
        <div>
          <AiOutlineArrowUp size={20} />
        </div>
      </Button>
    </Container>
  );
}
