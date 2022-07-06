import React from "react";
import style from "./CreditformDetails2.module.css";
import { Link }from 'react-router-dom';

const CreditformDetails2 = () => {

  return (

    <div>
      <div className={style.pending}>
        <p>Do you have pending insurance claim?</p>
        <div className={style.radios}>
          <label className={style.yes}>
            <input type="radio" name="pay" checked value="yes" />
            <span>Yes</span>
          </label>
          <label className={style.no}>
            <input type="radio" name="pay" value="no" />
            <span>No</span>
          </label>
        </div>
      </div>

      <div>
        <div className={style.fundbtn}>
          <button>
            <Link to="#" className={style.btntext}>
              Submit
            </Link>
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default CreditformDetails2;
