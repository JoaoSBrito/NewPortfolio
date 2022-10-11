import { Container, Title } from "../../global";
import { IconContainer, ItemContainer } from "./Contact.styles";

import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export function Contact() {
  return (
    <Container id="Contact">
      <Title>Contato</Title>

      <IconContainer>
        <ItemContainer href="https://github.com/JoaoSBrito" target="_blank">
          <AiFillGithub size={40} color="var(--bg-color)" />
        </ItemContainer>

        <ItemContainer
          href="https://www.linkedin.com/in/joao-vitor-brito/"
          target="_blank"
        >
          <AiFillLinkedin size={40} color="var(--bg-color)" />
        </ItemContainer>

        <ItemContainer href="mailto:joaovbrito123@gmail.com" target="_blank">
          <AiFillMail size={40} color="var(--bg-color)" />
        </ItemContainer>
      </IconContainer>
    </Container>
  );
}
