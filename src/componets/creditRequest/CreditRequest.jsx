import React, { useState } from "react";
import style from "./credit.module.css"

const CreditRequest = () => {
    const [cashNeeded, setCashNeeded] = useState();

    return(
        <div className={style.container}>
            <div className={style.heading}>
                <h1 className={style.heading_}>New Credit Request</h1>
                <p>Whether you need a new equipment or want to upgrade your patient facilities, our credit fund could help achieve your objectives.</p>
            </div>

            <section className={style.main_section}>
                <div className={style.input_field_container}>
                    <label> HOW MUCH DO YOU NEED?</label>
                    <input  
                    value={cashNeeded} 
                    onChange={(e)=>setCashNeeded(e.target.value)}
                    type="text" 
                    placeholder="N1,500,000" />
                </div>
                
                <div className={style.extra_info}>
                    <div className={style.input_field_container}>
                    <label> PRODUCT TYPE</label>
                    <select>
                        <option>Equipment - Ventilators</option>
                    </select>
                    </div>

                    <div className={style.input_field_container}>
                    <label>PURPOSE</label>
                    <input  
                    value={cashNeeded} 
                    onChange={(e)=>setCashNeeded(e.target.value)}
                    type="text" 
                    placeholder="N1,500,000" />
                    </div>

                    <div className={style.input_field_container}>
                    <label>VENDOR</label>
                    <select>
                        <option>Equipment - Ventilators</option>
                    </select>
                    </div>
                </div>
            </section>


        </div>

    );
}
export default CreditRequest