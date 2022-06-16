import React from "react";
import style from './Creditform.module.css';
import RequestHeader from '../requestheader/RequestHeader';
import CreditFormDetails from "../creditformdetails/CreditFormDetails";

const Creditform=()=>{

    return (
       <div className={style.formcontainer}>
            <RequestHeader/>
            <CreditFormDetails/>
            
       </div>
    )
}

export default Creditform;