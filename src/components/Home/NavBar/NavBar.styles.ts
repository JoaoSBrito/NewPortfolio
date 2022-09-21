import styled from "styled-components"
import { NavProps } from "./NavBar"

export const NavContainer = styled.div`
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  background-color: var(--navbar);
`

export const Logo = styled.a`
  color: var(--text-color);
  padding: 1rem 0;

  text-decoration: none;
  font-weight: bold;
  font-size: 1.25rem;
`

export const Hamburguer = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 24px;
    background-color: var(--text-color);
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media(max-width: 1024px) {
    display: flex;
  }
`

export const Menu = styled.div<NavProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media(max-width: 1024px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    transition: max-height .6s ease-in;

    max-height: ${({isOpen}) => (isOpen ? "300px" : "0" )};
  }

  
`

export const MenuLink = styled.a`
  color: var(--text-color);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  padding: 1rem 2rem;

  cursor: pointer;
  transform: all .3s ease-in;
  transition: all .2s ease-in;

  &:hover{
    color: var(--purple-600)
  }

`



export const MenuButton = styled.button`
  width: 200px;
  height: 48px;
  
  border-radius: 8px;
  border: 2px solid var(--bg-color);
  background-color: var(--purple-600);
  color: var(--text-color);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: ease-in .3s;
  }
`