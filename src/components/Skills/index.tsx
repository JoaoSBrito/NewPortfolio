import { SkillItens } from "./SkillsItens/SkillItens";

import Html from '../../assets/html.png'
import Css from '../../assets/css.png'
import Javascript from '../../assets/Javascript.png'
import Tailwind from '../../assets/tailwind.png'
import React from '../../assets/react.png'
import Typescript from '../../assets/Typescript.png'

export function Skills () {
  return (
    <Container id="Skills">
      <Title>habilidades</Title>

      <SkillsContainer >
        <SkillItens src={Html} title="HTML"/>
        <SkillItens src={Css} title="CSS"/>
        <SkillItens src={Javascript} title="Javascript"/>
      </SkillsContainer>
      <SkillsContainer>
        <SkillItens src={Tailwind} title="Tailwind"/>
        <SkillItens src={React} title="React"/>
        <SkillItens src={Typescript} title="Typescript"/>
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