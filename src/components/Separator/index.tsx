import styled from 'styled-components'
//import './style.css'
import { FC } from 'react'
//export const BreackLine = () => <div className={'breack-line'} />

/* export const Separator: FC = () => {
  const firstName: string = 'Mykola'
  console.info(firstName)
  return <Breakline />
} */

export const Separator: FC = () => <Breakline />

const Breakline = styled.div`
  background-color: #a3a1a1;
  height: 5px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`
