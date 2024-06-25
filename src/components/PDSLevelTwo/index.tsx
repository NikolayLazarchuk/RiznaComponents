import { FC } from 'react'

import { PDSLevelTwoPropsTypes } from './types'

import { PDSLevelOne } from '../PDSLevelOne';

export const PDSLevelTwo: FC<PDSLevelTwoPropsTypes> = ({content}) => (
  <div>
    <PDSLevelOne content={content}/>
  </div>
);
