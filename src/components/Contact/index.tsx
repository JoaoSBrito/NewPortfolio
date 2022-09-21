import { Container, Title } from '../../global'
import { IconContainer, ItemContainer } from './Contact.styles'

import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'

export function Contact() {
  return (
    <Container id="Contact">
      <Title>Contato</Title>

        <IconContainer>
          <ItemContainer href="" target="_blank">
            <AiFillGithub  size={40} color="var(--bg-color)"/>
          </ItemContainer>

          <ItemContainer href="" target="_blank">
            <AiFillLinkedin  size={40} color="var(--bg-color)"/>

          </ItemContainer>

          <ItemContainer href="" target="_blank">
            <AiFillMail  size={40} color="var(--bg-color)"/>
          </ItemContainer>
        </IconContainer>
    </Container>
  )
}