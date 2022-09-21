import React, { useState } from "react";
import { Hamburguer, Logo, Menu, MenuButton, MenuLink, NavContainer } from "./NavBar.styles";

export interface NavProps {
  isOpen:boolean
}

export function NavBar() {

  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <NavContainer>
      <Logo href="">
        <p>João Vitor Brito</p>
      </Logo>

      <Hamburguer onClick={() => setIsOpen(!isOpen)}>
        <span/>
        <span/>
        <span/>
      </Hamburguer>

      <Menu isOpen={isOpen}>
        <MenuLink href="#Home">ínicio</MenuLink>
        <MenuLink href="#Skills">habilidades</MenuLink>
        <MenuLink href="#About">sobre</MenuLink>
        <MenuLink href="#Projects">projetos</MenuLink>
        <MenuLink href="#Contact"><MenuButton>Entre em contato</MenuButton></MenuLink>
      </Menu>
    </NavContainer>
  )
}
