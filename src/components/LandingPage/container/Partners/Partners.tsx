import React from 'react'
import PartnersStyles from './Partners.module.css';
import { Images } from '../../../../Assets/ComponentImages';

function Partners() {
  return (
    <div className= {PartnersStyles.container}>
        <div className={PartnersStyles.pheader}>
          <h1>Our Partners</h1>
        </div>

        <div className={PartnersStyles.pimg}>
         <img src={Images.LifeBanklogo1} alt='lfebank logo'/>
         <img src={Images.image} alt='acessbank logo'/>
         <img src={Images.LifeBanklogo3} alt='branch logo'/>
         <img src={Images.LifeBanklogo4} alt='axa mansard logo'/>
        </div>
    </div>
  )
}

export default Partners