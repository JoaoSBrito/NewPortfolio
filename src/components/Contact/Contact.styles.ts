import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  margin-top: 2rem;
`

export const ItemContainer = styled.a`
  background-color: var(--purple-600);
  border-radius: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  width: 80px;
  height: 80px;

  cursor: pointer;

  transition: all .2s;

  :hover {
    transform: scale(1.1);
  }
`
