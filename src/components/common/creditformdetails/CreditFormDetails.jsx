import React from "react";
import style from './CreditformDetails.module.css';

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
           
    </div>
   )
}
export default CreditFormDetails;