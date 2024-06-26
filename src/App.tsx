import styled from 'styled-components'
import { Logo } from './components/Logo'
import { ProjectsCardLink } from './components/ProjectsCardLink'
import { Separator } from './components/Separator'
import { ContainerSocialLinks } from './components/ContainerSocialLinks'
import { ContainerHeaderLinks } from './components/ContainerHeaderLinks'
import { PropsLevelTwo } from './components/PropsLevelTwo'
import { PDSLevelThree } from './components/PDSLevelThree'


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
      <PropsLevelTwo justParagraph={'Hello world!'}/>
      <Separator />
      <PDSLevelThree content={'This is content from: paragraph - div - section.'}/>
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
