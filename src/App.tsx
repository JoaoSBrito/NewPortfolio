import { About } from "./components/About"
import { ScrollButton } from "./components/BackToTopButton"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { GlobalStyle } from "./global"



function App() {
  return (
    <>
      <Home/>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ScrollButton/>
      <GlobalStyle/>
    </>
  )
}

export default App
