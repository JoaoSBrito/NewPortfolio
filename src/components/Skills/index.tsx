

import { SkillItens } from "./SkillsItens/SkillItens";

export function Skills () {
  return (
    <Container id="Skills">
      <Title>habilidades</Title>

      <SkillsContainer >
        <SkillItens src="src/assets/html.png" title="HTML"/>
        <SkillItens src="src/assets/css.png" title="CSS"/>
        <SkillItens src="src/assets/Javascript.png" title="Javascript"/>
      </SkillsContainer>
      <SkillsContainer>
        <SkillItens src="src/assets/tailwind.png" title="Tailwind"/>
        <SkillItens src="src/assets/react.png" title="React"/>
        <SkillItens src="src/assets/Typescript.png" title="Typescript"/>
      </SkillsContainer>
    </Container>
    
  )
}

import styled from "styled-components"; 
import { Container, Title } from "../../global";



const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (min-width:1024px) {
    flex-direction: row;
    gap: 2rem;
  }
`