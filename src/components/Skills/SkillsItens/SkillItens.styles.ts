import styled from "styled-components";

export const SkillContainer = styled.div`
  width: 220px;
  height: 170px;
  margin-top: 2rem;
  border-radius: 12px;

  background-color: var(--navbar);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all .4s;

  :hover {
    transform: scale(1.1);
    border: 1px solid var(--purple-600);
  }
`

export const SkillTitle = styled.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: bolder;
`

export const SkillImg = styled.img`
  width: 100px;
  height: 100px;

  margin-bottom: 1rem;
`
