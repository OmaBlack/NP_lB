import React from "react";
import style from "./Creditform.module.css";
import RequestHeader from "../../componets/requestheader/RequestHeader";
import CreditFormDetails from "../common/creditformdetails/CreditFormDetails";

const Creditform = () => {
  return (
    <div className = {style.creditcontainer}>
      <div className={style.formcontainer}>
        <RequestHeader />
        <CreditFormDetails />
      </div>
    </div>
  );
};

export default Creditform;