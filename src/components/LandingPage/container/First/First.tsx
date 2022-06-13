import React from 'react';
import FirstStyles from './First.module.css'
import { Images } from '../../../ComponentImages';

const First = () => {
  return (
     
    <div className={FirstStyles.first}>
        <img src={Images.image1} alt=''/>
    </div>
    
  )
}

export default First;