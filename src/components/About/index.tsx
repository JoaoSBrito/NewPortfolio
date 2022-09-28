import { Container, Title } from "../../global";
import { AboutContainer, ProfileContainer, ProfileDescription } from "./About.styles";

import Perfil from '../../assets/perfil.jpeg'

export function About() {
  return (

    <Container id="About">
      <Title>Sobre mim</Title>


      <AboutContainer>
      <ProfileContainer> 
        <div className="image">
          <img src={Perfil} alt="" />
        </div>
      </ProfileContainer>

      <ProfileDescription>Olá meu nome é Joao Vitor, atualmente estudante de Engenharia de Controle e Automação, 10º periodo, na faculdade do sul da Bahia (FASB) e estudante no curso de formação Desenvolve 2022 pelo grupo Boticario; Sou apaixonado pela área de TI e principalmente com a área de programação. <br/>
      Tenho conhecimentos nas seguintes tecnologias: HTML, CSS, React, Javascript, Typescript, Tailwind, Styled-components, NodeJs.
      <br/>
      Atuando principalmente como Desenvolvedor Front-End, pretendo em alguns anos alcançar o cargo de pleno tbm como Front e desejo aprimorar minhas habilidade com outras áreas, mais especificamente com banco de dados, Back-end e Mobile
      </ProfileDescription>

      </AboutContainer>
    </Container>
  )
}
