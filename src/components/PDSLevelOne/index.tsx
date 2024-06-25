import { FC } from 'react'
import { PDSLevelOnePropsTypes } from './types'

export const PDSLevelOne: FC<PDSLevelOnePropsTypes> = ({content}) => (
  <p>{content}</p>
);
