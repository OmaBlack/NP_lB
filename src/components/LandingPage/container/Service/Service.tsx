import React from 'react'
import ServiceStyles from './Service.module.css';
import { Link } from "react-router-dom";
import { Images } from '../../../ComponentImages';

const Service = ()=> {
  return (
    <div className= {ServiceStyles.service_container}>

        <div className= {ServiceStyles.service}>          
                <img src={Images.image3} alt='a health personnel checking the blood pressure of a patient' className= {ServiceStyles.service_img}/>
            <div className= {ServiceStyles.service_text} >
                <h1>Convenient Standard Health Loans with flexible payment options</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className= {ServiceStyles.service_btn}>
                    <button><Link to="#" className={ServiceStyles.servbtn}>Get a loan today!</Link></button>
                </div>
            </div>    
        </div>

        <div className= {ServiceStyles.service}>
            <div className= {ServiceStyles.service_text} style={{textAlign:'end', padding:'1rem 8rem 0 1rem'}}>
                <h1>Access customized loans instantly to scale up your facility</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                 <div className= {ServiceStyles.service_btn}>
                    <button><Link to="#" className={ServiceStyles.servbtn}>Get a loan today!</Link></button>
                </div>
            </div>                    
            
                <img src={Images.image4i} alt='a laboratory scientist working' className= {ServiceStyles.service_img}/>
        
        </div>
        <div className= {ServiceStyles.service}>
        
          <img src={Images.image5} alt='four happy nurses' className= {ServiceStyles.service_img}/>
            
            <div className= {ServiceStyles.service_text} >
                <h1>Discover the true potential of your health facilities</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className= {ServiceStyles.service_btn}>
                    <button><Link to="#" className={ServiceStyles.servbtn}>Get a loan today!</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service;