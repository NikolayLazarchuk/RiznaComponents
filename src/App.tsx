import styled from 'styled-components'
import { FirstComponent } from './components/FirstComponent'
import { HeaderLink } from './components/HeaderLink'
import { Logo } from './components/Logo'
import { ProjectsCardLink } from './components/ProjectsCardLink'
import { Separator } from './components/Separator'
import { SocialLink } from './components/SocialLink'

function App() {
  return (
    <Container>
      <FirstComponent />
      <Separator />
      <ContainerForDiv>
        <HeaderLink text={'Work'} />
        <HeaderLink text={'Team'} />
        <HeaderLink text={'Contact Us'} />
      </ContainerForDiv>
      <Separator />
      <ProjectsCardLink />
      <Separator />
      <Logo />
      <Separator />
      <SocialLink />
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
