import { Container, Title } from "../../global";

import TodoList from "../../assets/Todolist.png";
import Login from "../../assets/login.png";
import Creation from "../../assets/creation.png";
import NlwReturn from "../../assets/nlw-return.png";
import NlwBeauty from "../../assets/nlw-beautysalon.png";
import CoffeeDelivery from "../../assets/CoffeeDelivery.png";
// import pomodoTimer from 'src/assets/Pomodoro-Timer.png'

import { ProjectList } from "./Project.styles";
import { ProjectItem } from "./ProjectItem";

export function Projects() {
  return (
    <Container id="Projects">
      <Title>Projetos</Title>

      <ProjectList>
        <ProjectItem
          href="https://todo-list-ten-chi.vercel.app/"
          src={TodoList}
          title="TodoList"
        />

        <ProjectItem
          href="https://tela-login-woad.vercel.app/"
          src={Login}
          title="Tela de Login"
        />

        <ProjectItem
          href="https://criacaoconta-com-validacao.vercel.app/"
          src={Creation}
          title="Tela de Criação"
        />
      </ProjectList>

      <ProjectList>
        <ProjectItem
          href="https://nlw-return-seven-fawn.vercel.app/"
          src={NlwReturn}
          title="NLW Return"
        />

        <ProjectItem
          href="https://nlw-beautysalon-eta.vercel.app/"
          src={NlwBeauty}
          title="NLW BeautySalon"
        />

        <ProjectItem
          href="https://nlw-beautysalon-eta.vercel.app/"
          src={CoffeeDelivery}
          title="Coffee Delivery"
        />
      </ProjectList>
    </Container>
  );
}
