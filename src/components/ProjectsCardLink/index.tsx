import { FC } from 'react'
import styled from 'styled-components'

export const ProjectsCardLink: FC = () => (
  <StylePCL>
    <a href={'https://example.com'} className={'projects-card-link'}>
      <div className={'projects-card-link-text'}>{'UX/UI'}</div>
    </a>
  </StylePCL>
)

const StylePCL = styled.div`
  .projects-card-link {
    display: flex;
    padding-top: 0.35vw;
    padding-right: 1.53vw;
    padding-bottom: 0.35vw;
    padding-left: 1.53vw;
    border-top-left-radius: 6.9vw;
    border-top-right-radius: 6.9vw;
    border-bottom-left-radius: 6.9vw;
    border-bottom-right-radius: 6.9vw;
    background-color: #defd7e;
    text-decoration: none;
  }
  .projects-card-link-text {
    font-family: Neuehaasdisplay;
    color: #27252b;
    font-size: 1vw;
    line-height: 1.4vw;
    font-weight: 700;
  }
`
