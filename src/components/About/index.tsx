import { Container, Title } from "../../global";
import { AboutContainer, ProfileContainer, ProfileDescription } from "./About.styles";

export function About() {
  return (

    <Container id="About">
      <Title>Sobre mim</Title>


      <AboutContainer>
      <ProfileContainer> 
        <div className="image">
          <img src="src/assets/perfil.jpeg" alt="" />
        </div>
      </ProfileContainer>

      <ProfileDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusantium cum, nulla saepe laudantium dolorem consectetur itaque, quas adipisci voluptas tenetur impedit ad? Vero corporis fuga voluptates magni, perspiciatis eligendi.</ProfileDescription>

      </AboutContainer>
    </Container>
  )
}
