import React from "react";
import style from "./logsin.module.css"
import nervLogo from "../../images/mainLogo.svg"




const LogSignComp =(props)=>{

    return(
    <div className={style.logo_flex}>
        <img src={nervLogo} alt = "Nerve Logo"/>
        <h1>{props.info}</h1>
    </div>
    );
}

export default LogSignComp;