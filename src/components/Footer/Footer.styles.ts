import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--purple-600);
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const FooterText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: var(--text-color);

 >a{
  text-decoration: none;
  cursor: pointer;
  color: var(--bg-color);
 }
`