import { Container, Title } from '../../global'

// import projectTodoImg from 'src/assets/Todolist.png'
// import pomodoTimer from 'src/assets/Pomodoro-Timer.png'

import { ProjectList } from './Project.styles'
import { ProjectItem } from './ProjectItem'

export function Projects() {
  return (
    <Container id="Projects">
      <Title>Projetos</Title>

      <ProjectList>
        <ProjectItem 
          href="https://todo-list-ten-chi.vercel.app/"
          src="src/assets/Todolist.png"
          title="TodoList"
          />

        <ProjectItem 
          href="https://tela-login-woad.vercel.app/"
          src="src/assets/login.png"
          title="Tela de Login"
          />

        <ProjectItem 
          href="https://criacaoconta-com-validacao.vercel.app/"
          src="src/assets/creation.png"
          title="Tela de Criação"
          />
      </ProjectList>

      <ProjectList>
        <ProjectItem 
          href="https://nlw-return-seven-fawn.vercel.app/"
          src="src/assets/nlw-return.png"
          title="NLW Return"
          />

        <ProjectItem 
          href="https://nlw-beautysalon-eta.vercel.app/"
          src="src/assets/nlw-beautysalon.png"
          title="NLW BeautySalon"
          />
      </ProjectList>
    </Container>
  )
}