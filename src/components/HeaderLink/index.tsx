import { FC } from 'react'
import styled from 'styled-components'

interface HeaderLinkProps {
  text: string
}

export const HeaderLink: FC<HeaderLinkProps> = ({ text }) => (
  <StyleAHeaderLink href={'https://example.com'}>
      <StylePHeaderLink>{text}</StylePHeaderLink>
  </StyleAHeaderLink>
)

const StyleAHeaderLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.15vw solid #000;
  border-radius: 6.25vw;
`


const StylePHeaderLink = styled.p`
  font-family: DM Sans;
  color: black;
  font-size: 1.1vw;
  line-height: 1.1vw;
  font-weight: 700;
  text-align: center;
  margin: 1.1vw 1.67vw;
`
