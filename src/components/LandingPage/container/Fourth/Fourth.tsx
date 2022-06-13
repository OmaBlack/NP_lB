import React from 'react'
import FourthStyles from './Fourth.module.css';
import { Images } from '../../../ComponentImages';

const Fourth = ()=> {
  return (
    <div className= {FourthStyles.container}>

        <div className= {FourthStyles.fourth_one}>
            <div className= {FourthStyles.image}>
                <img src={Images.image3} alt=''/>
            </div>
            <div className= {FourthStyles.fourth_onetext} >
                <h1>Convenient Standard Health Loans with flexible payment options</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className= {FourthStyles.fourth_onebtn}>
                    <button>Get a loan today!</button>
                </div>
            </div>    
        </div>

        <div className= {FourthStyles.fourth_two}>
            <div className= {FourthStyles.fourth_twotext}>
                <h1>Access customized loans instantly to scale up your facility</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                 <div className= {FourthStyles.fourth_twobtn}>
                    <button>Get a loan today!</button>
                </div>
            </div>                    
            <div className={FourthStyles.fourth_img}>
                <img src={Images.image4i} alt=''/>
            </div>
        </div>

        <div className= {FourthStyles.fourth_three}>
            <div>
                <img src={Images.image5} alt=''/>
            </div>
            <div className= {FourthStyles.fourth_onetext} >
                <h1>Discover the true potential of your health facilities</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className= {FourthStyles.fourth_onebtn}>
                    <button>Get a loan today!</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fourth;