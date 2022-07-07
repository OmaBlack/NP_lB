import React from "react";
import style from "./projectFinancing.module.css";
import successIcon from "../../images/Icon.png";
import backIcon from "../../images/Vector.png";
import eclipse from "../../images/eclipse.svg";

const ProjectFinancing = () => {
  return (
    <div className={style.financing}>
      <p className={style.heading}>Equipment Financing Request</p>

      <div className={style.details}>
        <div className={style.success}>
          <img src={successIcon} className={style.successimg} alt="" />
          <img src={eclipse} className={style.eclipseimg} alt="" />
        </div>

        <section className={style.section_flex}>
          <p className={style.first}>
            Your credit request has been submitted successfully!
          </p>
          <p className={style.second}>#82937090</p>
          <p className={style.third}>
            Your credit request will go through our review process. Once all the
            information provided has been validated, a nerve link will be sent
            to the vendor, and you will recieve an update on the status of your
            funds.
          </p>
          <div className={style.btns}>
            <button className={style.btn1}>
              <img src={backIcon} alt="back icon" />
              Back to Dashboard
            </button>
            <button className={style.btn2}>Make New Payment</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectFinancing;
