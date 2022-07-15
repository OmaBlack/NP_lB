import React from 'react';
import style from './Eclipse.module.css';
import groupeclipse from '../../../images/groupeclipse.png';

function Eclipse() {
  return (
    <div className={style.eclipseimg}>
        <img src={groupeclipse} alt="eclipse" />
    </div>
  )
}

export default Eclipse