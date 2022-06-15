import React from 'react'
import PartnersStyles from './Partners.module.css';
import { Images } from '../../../ComponentImages';

function Partners() {
  return (
    <div className= {PartnersStyles.container}>
        <div className={PartnersStyles.pheader}>
          <h1>Our Partners</h1>
        </div>

        <div className={PartnersStyles.pimg}>
         <img src={Images.LifeBanklogo1} alt=''/>
         <img src={Images.image} alt=''/>
         <img src={Images.LifeBanklogo3} alt=''/>
         <img src={Images.LifeBanklogo4} alt=''/>
        </div>
    </div>
  )
}

export default Partners