import { FC } from 'react'
import styled from 'styled-components'

export const ProjectsCardLink: FC = () => (
  <StyleDivPCL>
    <StyleAPCL href={'https://example.com'}>
      <StylePPCL>{'UX/UI'}</StylePPCL>
    </StyleAPCL>
  </StyleDivPCL>
)

const StyleDivPCL = styled.div`
  display: flex;
  border-radius: 6.9vw;
  background-color: #defd7e;
`

const StyleAPCL = styled.a`
  text-decoration: none;
  padding: 0.35vw 1.53vw
`

const StylePPCL = styled.p`
  font-family: Neuehaasdisplay;
  color: #27252b;
  font-size: 1vw;
  line-height: 1.4vw;
  font-weight: 700;
  margin: 0; 
`
