import styled from 'styled-components'
import { Logo } from './components/Logo'
import { ProjectsCardLink } from './components/ProjectsCardLink'
import { Separator } from './components/Separator'
import { ContainerSocialLinks } from './components/ContainerSocialLinks'
import { ContainerHeaderLinks } from './components/ContainerHeaderLinks'


function App() {
  return (
    <Container>
      <Separator />
      <Logo />
      <Separator />
      <ProjectsCardLink />
      <Separator />
      <ContainerHeaderLinks />
      <Separator />
      <ContainerSocialLinks />
      <Separator />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`


export default App
