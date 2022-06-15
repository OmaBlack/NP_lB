import React from "react";
import style from "./header.module.css"
// import angle from "../../images/Vector.png"
import {IoIosArrowForward} from "react-icons/io"


export default function Header(){
    return(<div className={style.page_header}>
        <div className={style.page_header_wrapper}>

        <p>Dashboard <span><IoIosArrowForward className="icon" /></span> Funding  <span><IoIosArrowForward className="icon"/></span> Pay with Nerve</p>
        </div>
       
    </div>)
}