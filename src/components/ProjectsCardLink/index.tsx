import { FC } from 'react'
import styled from 'styled-components'

export const ProjectsCardLink: FC = () => (
  <StyleDivPCL>
    <StyleAPCL href={'https://example.com'}>
      <StylePPCL>{'UX/UI'}</StylePPCL>
    </StyleAPCL>
  </StyleDivPCL>
)

const StyleAPCL = styled.a`
  text-decoration: none;
  padding-top: 0.35vw;
  padding-right: 1.53vw;
  padding-bottom: 0.35vw;
  padding-left: 1.53vw;
`
const StyleDivPCL = styled.div`
  display: flex;
  /* padding-top: 0.35vw;
  padding-right: 1.53vw;
  padding-bottom: 0.35vw;
  padding-left: 1.53vw; */
  border-radius: 6.9vw;
  background-color: #defd7e;
`
const StylePPCL = styled.p`
  font-family: Neuehaasdisplay;
  color: #27252b;
  font-size: 1vw;
  line-height: 1.4vw;
  font-weight: 700;
  margin: 0; 
`
