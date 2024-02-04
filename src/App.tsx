import styled from 'styled-components'
import { FirstComponent } from './components/FirstComponent'
import { HeaderLink } from './components/HeaderLink'
import { Separator } from './components/Separator'

function App() {
  return (
    <Container>
      <FirstComponent />
      <Separator />
      <ContainerForDiv>
        <HeaderLink />
        <HeaderLink />
        <HeaderLink />
      </ContainerForDiv>
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
