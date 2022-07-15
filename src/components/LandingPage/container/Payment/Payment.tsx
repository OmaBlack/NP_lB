import React from 'react'
import PaymentStyles from './Payment.module.css';
import { Link } from "react-router-dom";
import { Images } from '../../../../Assets/ComponentImages';

function Payment() {
  return (
    <div className={PaymentStyles.paycontainer}>
        <div className={PaymentStyles.paywrapper}>
            <div className={PaymentStyles.pay}>
                <h1>Never run out of funds for your facility</h1>
                <p>Get access to instant payment to vendors with tailored loans and financial support services to scale your medical facility</p>
                
                <div className={PaymentStyles.paybtn}>
                    <button><Link to="#" className={PaymentStyles.link_paybtn}>Get a loan today!</Link></button>
                </div>

                <img src={Images.Vector} alt='nerve image'className ={PaymentStyles.design}/>

            </div>
            <div className={PaymentStyles.paycube}>
             <img src={Images.cube} alt='cubes'/>   
            </div>
        </div>
    </div>
  )
}

export default Payment