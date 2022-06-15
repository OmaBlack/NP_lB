import React from 'react';
import BackgroundStyles from './Background.module.css'
import { Images } from '../../../ComponentImages';

const Background = () => {
  return (
     
    <div className={BackgroundStyles.backgroundfirst}>
        <img src={Images.image1} alt=''/>
    </div>
    
  )
}

export default Background;