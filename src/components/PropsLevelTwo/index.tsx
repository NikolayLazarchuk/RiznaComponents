import { FC } from 'react'
import { PropsLevelOne } from '../PropsLevelOne'
import { PropsLevelTwoPropsTypes } from './types'

export const PropsLevelTwo: FC<PropsLevelTwoPropsTypes> = ({justParagraph}) => (
  <div>
    <PropsLevelOne justParagraph={justParagraph}/>
  </div>
);

