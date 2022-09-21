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
          href="https://todo-list-ten-chi.vercel.app/"
          src="src/assets/Pomodoro-Timer.png"
          title="Pomodoro Timer"
          />
      </ProjectList>
    </Container>
  )
}