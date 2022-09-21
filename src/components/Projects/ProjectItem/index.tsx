import { ProjectContainer, ProjectImg, ProjectTitle } from "./ProjectItem.styles";

interface itemProps {
  href:string,
  src:string,
  title:string
}

export function ProjectItem ({href, src, title}: itemProps) {
  return (
    <ProjectContainer href={href} target="_blank">
      <ProjectTitle>{title}</ProjectTitle>

      <ProjectImg src={src}/>
    </ProjectContainer>
  )
}