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

export function Home() {
  return (
    <>
      <NavBar />

      <HomeContainer id="Home" className="content">
        <HomeImg src="src/assets/homeicon.png" alt="" />
          <HomeContent>
            <Headlines>
              <TitleName>Olá Sou João Vitor</TitleName>
              <TitleName>
                <span>Front end Developer</span>
              </TitleName>
            </Headlines>

            <HomeButtons>
              <ButtoGit href="" target="_blank">GitHub</ButtoGit>
              <ButtoContact href="" target="_blank">Contato</ButtoContact>
            </HomeButtons>
          </HomeContent>
        <BgImg />
      </HomeContainer>
    </>
  );
}
