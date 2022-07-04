import React from "react";
import style from "./requestSubmitted.module.css"
import successIcon from "../../images/Icon.png"
import backIcon from "../../images/Vector.png"

const RequestSubmitted = () => {
    return(
       
           
        <section className={style.pay_nav_main_container}>

        <div className={style.success}>
            <img src={successIcon} alt="" />
        </div>
        <div className={style.info}>
            <header>Request Submited</header>
            <p>Vendor will be credited with the requested sum!</p>
        </div>

        <div className={style.reference}>
            <header>REF: 87gid87w7dg7d</header>
        </div>

        <div className={style.btns}>
            <button className={style.btn1}>
                <img src={backIcon} alt="back icon" />
                Back to Dashboard
            </button> 
            <button className={style.btn2}>Make New Payment</button>
        </div>

    

    </section>
   
    );
};

export default RequestSubmitted