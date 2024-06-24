import { FC } from 'react'
import { PropsLevelOnePropsType } from './props'

export const PropsLevelOne: FC<PropsLevelOnePropsType> = ({justParagraph}) => (
  <p>{justParagraph}</p>
);

