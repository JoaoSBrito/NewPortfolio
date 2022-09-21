import styled from "styled-components";

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
  }
`