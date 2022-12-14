import {
  BgImg,
  ButtoContact,
  ButtoGit,
  Headlines,
  HomeButtons,
  HomeContainer,
  HomeContent,
  HomeImg,
  TitleName,
} from "./Home.styles";
import { NavBar } from "./NavBar/NavBar";

import HomeIcon from "../../assets/homeicon.png";

export function Home() {
  return (
    <>
      <NavBar />

      <HomeContainer id="Home" className="content">
        <HomeImg src={HomeIcon} alt="" />
        <HomeContent>
          <Headlines>
            <TitleName>Olá Sou João Vitor</TitleName>
            <TitleName>
              <span>Front end Developer</span>
            </TitleName>
          </Headlines>

          <HomeButtons>
            <ButtoGit href="https://github.com/JoaoSBrito" target="_blank">
              GitHub
            </ButtoGit>
            <ButtoContact
              href="https://www.linkedin.com/in/joao-vitor-brito/"
              target="_blank"
            >
              Contato
            </ButtoContact>
          </HomeButtons>
        </HomeContent>
        <BgImg />
      </HomeContainer>
    </>
  );
}
