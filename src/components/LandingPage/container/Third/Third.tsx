import React from 'react'
import ThirdStyles from './Third.module.css';
import { Images } from '../../../ComponentImages';


const Third = ()=> {
  return (
      <div className={ThirdStyles.container}>
          <div className={ThirdStyles.wrapper}>
            <div className={ThirdStyles.third_first}>
              <h1>Discover the true potential of your health facilities</h1>
              <p>Whether you need a new equipment or want to upgrade your patient facilities, a loan could help achieve your objectives. We can also provide fiancial and business advice and support to help you plan your future expansion.</p>
          </div>
          <div className={ThirdStyles.third_img}>
              <div className= {ThirdStyles.loan}>
                  <img src={Images.Loan} alt=''/>
                  <h3>Instant Loans</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
               </div>
               <div className= {ThirdStyles.project}>
                  <img src={Images.Project} alt=''/>
                  <h3>Project Financing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
             </div>
             <div className= {ThirdStyles.credit}>
                <img src={Images.credit} alt=''/>
                <h3>Credit Report</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          </div>
          <div className= {ThirdStyles.third_btn} >
             <button>Learn More</button>
           </div>
       </div>
   </div>
  )
}

export default Third;