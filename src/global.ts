import styled, { createGlobalStyle } from "styled-components";    

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

:root {
  --navbar:#16212B;
  --bg-color:#141A20;

  --text-color:#E5E5E5;

  --purple-200:#8E22FF;
  --purple-600:#6C00DE;
}

html {
  scroll-behavior: smooth;
  width: 100%; 
  
  overflow-x: hidden;
}

html, button, body, main, footer {
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: var(--bg-color);
  -webkit-font-smoothing: antialiased;
}
`


/* ================= /// */

export const Title = styled.h2`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--text-color);
`

export const Container = styled.div`
  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`