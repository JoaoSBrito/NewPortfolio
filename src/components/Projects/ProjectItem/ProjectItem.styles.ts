import styled from "styled-components";

export const ProjectContainer = styled.a`
  background-color: var(--navbar);
  width: 240px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;
  border-radius: 32px;

  text-decoration: none;
  transition: ease .4s;

  :hover {
    transform: scale(1.1);
  }

  @media (min-width: 1024px) {
    width: 360px;
    height: auto;
  }
`

export const ProjectTitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  margin-top: 1rem;
  color: var(--text-color);
`

export const ProjectImg = styled.img`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 90%;
  border-radius:8px;
`