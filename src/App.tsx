import styled from 'styled-components'
import { BreackLine } from './components/BreackLine'
import { FirstComponent } from './components/FirstComponent'
import { HeaderLink } from './components/HeaderLink'

function App() {
  return (
    <Container>
      <FirstComponent />
      <BreackLine />
      <HeaderLink />
      <BreackLine />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default App
