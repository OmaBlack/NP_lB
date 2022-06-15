import React from 'react'
import FacilityStyles from './Facility.module.css';
import { Images } from '../../../ComponentImages';


const Facility = ()=> {
  return (
      <div className={FacilityStyles.facilitycontainer}>
          <div className={FacilityStyles.facilitywrapper}>
            <div className={FacilityStyles.facility_first}>
              <h1>Discover the true potential of your health facilities</h1>
              <p>Whether you need a new equipment or want to upgrade your patient facilities, a loan could help achieve your objectives. We can also provide fiancial and business advice and support to help you plan your future expansion.</p>
          </div>
          <div className={FacilityStyles.facility_img}>
              <div className= {FacilityStyles.loan}>
                  <img src={Images.Loan} alt=''/>
                  <h3>Instant Loans</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
               </div>
               <div className= {FacilityStyles.project}>
                  <img src={Images.Project} alt=''/>
                  <h3>Project Financing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
             </div>
             <div className= {FacilityStyles.credit}>
                <img src={Images.credit} alt=''/>
                <h3>Credit Report</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          </div>
          <div className= {FacilityStyles.facility_btn} >
             <button>Learn More</button>
           </div>
       </div>
   </div>
  )
}

export default Facility;