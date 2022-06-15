import React from "react";
import AlertStyles from "./modalStep2.module.css";
import { Images } from "../../ComponentImages";


const ModalStep2 = () => {
  return (
    <div className={AlertStyles.wrapper}>
      <div className={AlertStyles.container}>
        <div className={AlertStyles.content}>
          <div className={AlertStyles.Icon}>
            <img src={Images.Icon} alt="Icon" />
          </div>
          <h1>Limited Credit Score</h1>
          <p>
            Apologies! We do not have enough information for a good credit
            score. You will be required to give more information about your
            hospital, facility or organisation.
          </p>
          <p className={AlertStyles.step2_btn}>
            <button>Continue</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalStep2;
