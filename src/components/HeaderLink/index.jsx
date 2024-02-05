import { FC } from 'react'
import styled from 'styled-components'

export const HeaderLink: FC = () => (
  <HeaderLinkContainer>
    <a href={'https://example.com'} className={'header-link'}>
      <div className={'header-link-text'}>{'Work'}</div>
    </a>
  </HeaderLinkContainer>
)

const HeaderLinkContainer = styled.div`
  .header-link-text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Neuehaasdisplay;
    color: black;
    font-size: 1.25vw;
    line-height: 1.25vw;
    font-weight: 700;
    text-align: center;
  }

  .header-link {
    border: 0.15vw solid #000;
    border-radius: 6.25vw;
    justify-content: center;
    align-items: center;
    padding: 0.5vw 1.7vw;
    text-decoration: none;
    display: flex;
  }
`
