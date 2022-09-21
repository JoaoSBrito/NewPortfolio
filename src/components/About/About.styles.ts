import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (min-width: 1024px) {
    flex-direction:row;
  }
`

export const ProfileContainer = styled.div`
  width: 260px;
  height: 260px;

  border-radius: 64px;

  margin-top: 2rem;

  background-color: rgba(108, 0, 222, .9);
  transform: rotate(5grad);

  >.image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 1rem;
    /* transform: rotate(1grad); */
  }

  >.image > img {
    width: 160px;
    
    border-radius: 8px;
  }

  

  @media (min-width: 1024px) {
    width: 360px;
    height: 360px;

    >.image > img {
    width: 240px;
    
    border-radius: 8px;
  }
  }
`

export const ProfileDescription = styled.p`
  text-align: center;
  font-weight: normal;
  font-size:1.25rem;

  margin-top: 2rem;
  color: var(--text-color);

  @media (min-width: 1024px) {
    width: 40%;
  }
`