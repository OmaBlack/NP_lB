import React from "react";
import CreditStyles from "./modalStep3.module.css";
import { Images } from "../../ComponentImages";


const ModalStep3 = () => {
  return (
<div className={CreditStyles.wrapper}>
      <div className={CreditStyles.container}>
        <div className={CreditStyles.content}>
          <div className={CreditStyles.Icon}>
            <img src={Images.Icon2} alt="Icon" />
          </div>
          <h1>Credit Score Found</h1>
          <p>
            We found your credit score based on your history with our affiliates such as LifeBank. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className={CreditStyles.step2_btn}>
            <button>Continue</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalStep3;