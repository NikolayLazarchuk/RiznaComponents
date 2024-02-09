import { FC } from 'react'
import styled from 'styled-components'

export const HeaderLink: FC = () => (
  <StyleAHeaderLink href={'https://example.com'} className={'header-link'}>
    <StyleDivHeaderLink>
      <StylePHeaderLink className={'header-link-text'}>
        {'Work'}
      </StylePHeaderLink>
    </StyleDivHeaderLink>
  </StyleAHeaderLink>
)

const StyleAHeaderLink = styled.a`
  text-decoration: none;
`
const StyleDivHeaderLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.15vw solid #000;
  border-radius: 6.25vw;
  padding: 0.5vw 1.7vw;
`

const StylePHeaderLink = styled.p`
  margin: 0;
  font-family: Neuehaasdisplay;
  color: black;
  font-size: 1.25vw;
  line-height: 1.25vw;
  font-weight: 700;
  text-align: center;
`
