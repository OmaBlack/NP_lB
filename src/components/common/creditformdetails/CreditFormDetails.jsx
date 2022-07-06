import React from "react";
import style from './CreditformDetails.module.css';
// import {Link}from 'react-router-dom';

const CreditFormDetails =()=>{

   return (

    <div className={style.creditRequestForm}>
           <div className={style.form_group}>
            <label htmlFor="description">HOW MUCH DO YOU NEED?</label>
            <input type="text" placeholder="N1,500.00"/>
           </div>

           <div className={style.form_group}>
            <div className={style.moreDescription}>
                <div className={style.form_group_inner}>
                <label htmlFor="description">PRODUCT TYPE</label>
                <select name="" id="">
                    <option value="" >Equipment-Ventilators</option>
                    <option value="" >Equipment-Ventilators</option>
                    <option value="" >Equipment-Ventilators</option>
                </select>
                </div>
           <div className={style.form_group_inner}>
            <label htmlFor="description">PURPOSE</label>
            <input type="text" placeholder="N1,500.00"/>
           </div>
           <div className={style.form_group_inner}>
            <label htmlFor="description">VENDOR</label>
            <select name="" id="">
                <option value="" >Equipment-Ventilators</option>
                <option value="" >Equipment-Ventilators</option>
                <option value="" >Equipment-Ventilators</option>
            </select>
           </div>
            </div>
           </div>
           
           <div className={style.file_upload}>
            <p>Upload purchase order, reciept or invoice</p>
            <header>ATTACHMENTS</header>
            <div className={style.fileUploadBorder}>
                <input type="file" className={style.custum_file_input}/>
            </div>
           </div>
           <hr />

           {/* <div className={style.pending}>
        <p>Do you have pending insurance claim?</p>
        <div className={style.radios}>
          <label className={style.yes}>
            <input type="radio" name="pay" checked value="yes" />
            <span>Yes</span>
          </label>
          <label className={style.no}>
            <input type="radio" name="pay" value="no" />
            <span>No</span>
          </label>
        </div>
      </div>
      <div>
        <div className={style.fundbtn}>
          <button>
            <Link to="#" className={style.btntext}>
              Submit
            </Link>
          </button>
        </div>
      </div> */}
           
    </div>
   )
}
export default CreditFormDetails;