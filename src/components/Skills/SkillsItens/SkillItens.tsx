import { SkillContainer, SkillImg, SkillTitle } from "./SkillItens.styles";

interface itemProps {
  src:string,
  title:string
}

export function SkillItens({src, title} : itemProps) {
  return (

    <SkillContainer>
      <SkillImg src={src} alt="" />
      <SkillTitle>{title}</SkillTitle>
    </SkillContainer>
  )
}