import React from 'react';
import style from "./Square.module.css";
import rec1 from "../../../images/Rectangle1.svg";
import rec2 from "../../../images/Rectangle2.svg";
import rec3 from "../../../images/Rectangle3.svg";
import rec4 from "../../../images/Rectangle4.svg";

function square() {
  return (
    <div className={style.squarecontainer}>
        <div className={style.squarepart1}>
        <img src = {rec1} alt="" />
        <img src = {rec2} alt="" />
        </div>
        <div className={style.squarepart2}>
        <img src = {rec3} alt="" />
        <img src = {rec4} alt="" />
        </div>
        
    </div>
  )
}

export default square;