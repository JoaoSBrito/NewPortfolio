import styled from "styled-components";


export const BgImg = styled.div`
  
background: url(src/assets/wave.png);
width: 100%;
height: 230px;
position: absolute;
bottom: 0;
left: 0;
z-index: -1;
visibility: hidden;

  @media (min-width: 1024px) {
    visibility: visible;
  }
`
export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 4rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  position: relative;
  z-index: 2;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    margin: auto;

  }
`

export const HomeContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`

export const HomeButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 4rem;
  }
`


export const HomeImg = styled.img`
  width: 220px;
  height: auto;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    width: 340px;
    height: auto;
    margin-bottom: 8rem;
  }
`

export const Headlines = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

export const TitleName = styled.h2`
  font-size: 1.5rem;
  color: var(--text-color);
  line-height: 1;
  
  span {
    font-size: 1rem;
    font-weight: normal;
    color: var(--purple-200);
  }

  @media (min-width:1024px) {
    font-size: 2.5rem;
    line-height: .8;
    margin-right: 4rem;
    

    span {
      font-size:1.5rem;
      margin-right: 8rem;
    }
  }
`

export const ButtoGit = styled.a`
  width: 200px;
  height: 52px;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: bolder;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 8px;

  color: var(--bg-color);
  background-color: var(--purple-600);
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    transition: ease .4s;

    color: var(--text-color);
    background-color: var(--bg-color);
    border: 1px solid var(--purple-600);
  }
`

export const ButtoContact = styled.a`
  width: 200px;
  height: 52px;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: bolder;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--purple-600);
  border-radius: 8px;

  color: var(--text-color);
  background-color: var(--bg-color);
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    transition: ease .4s;

    color: var(--bg-color);
  background-color: var(--purple-600);
    border: 1px solid var(--purple-600);
  }
`
