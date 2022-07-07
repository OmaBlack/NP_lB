import React from "react";
import style from "./Creditform.module.css";
import RequestHeader from "../../componets/requestheader/RequestHeader";
import CreditFormDetails from "../common/creditformdetails/CreditFormDetails";
import CreditFormDetails2 from "../common/CreditformDetails2/CreditformDetails2";

const Creditform = () => {
  return (
    <div className={style.formcontainer}>
      <RequestHeader />
      <div className={style.creditcontainer}>
        <CreditFormDetails />
        <CreditFormDetails2 />
      </div>
    </div>
  );
};

export default Creditform;
