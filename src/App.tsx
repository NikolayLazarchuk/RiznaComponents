import styled from 'styled-components'
import { HeaderLink } from './components/HeaderLink'
import { Logo } from './components/Logo'
import { ProjectsCardLink } from './components/ProjectsCardLink'
import { Separator } from './components/Separator'
import { ContainerSocialLinks } from './components/ContainerSocialLinks'


function App() {
  return (
    <Container>
      <Separator />
      <Logo />
      <Separator />
      <ProjectsCardLink />
      <Separator />
      <ContainerForDiv>
        <HeaderLink text={'Work'} />
        <HeaderLink text={'Team'} />
        <HeaderLink text={'Contact Us'} />
      </ContainerForDiv>
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
const ContainerForDiv = styled.div`
  display: flex;
  gap: 1vw;
`

export default App
