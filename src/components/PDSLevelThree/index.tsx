import { FC } from 'react'

import { PDSLevelThreePropsTypes } from './types';
import { PDSLevelTwo } from '../PDSLevelTwo';




export const PDSLevelThree: FC<PDSLevelThreePropsTypes> = ({content}) => (
  <section>
    <PDSLevelTwo content={content}/>
  </section>
);