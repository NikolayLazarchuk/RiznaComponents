import styled from 'styled-components'
import { HeaderLink } from '../HeaderLink'

export const ContainerHeaderLinks = () => (
  <StyleDivContainerHeaderLinks>
    <HeaderLink text={'Work'} />
    <HeaderLink text={'Team'} />
    <HeaderLink text={'Contact Us'} />
  </StyleDivContainerHeaderLinks>
)

const StyleDivContainerHeaderLinks = styled.div`
  display: flex;
  gap: 1vw;
`
