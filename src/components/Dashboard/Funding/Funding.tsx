import React from "react";
import { Link } from "react-router-dom";
import style from "./Funding.module.css";

function Funding() {
  return (
    <div className={style.fund_container}>
      <div className={style.head_wrapper}>
        <div className={style.heading}>
          <h1 className={style.header}>Pay With Nerve</h1>
          <p>You are doing a great job saving lives today.</p>
        </div>
        <div className={style.heading2}>
          <div className={style.inner}>
            <div className={style.alphabet}>
              <h1>C</h1>
            </div>
            <div className={style.amount}>
              <h3>N180,000 MAXIMUM AMOUNT</h3>
            </div>
          </div>
          <p>
            Click here to learn <Link to="#">how to increase limit</Link>
          </p>
        </div>
      </div>

      <div className={style.creditRequestForm}>
        <div className={style.form_group}>
          <label htmlFor="description">HOW MUCH DO YOU NEED?</label>
          <input type="text" placeholder="N1,500.00" />
        </div>

        <div className={style.form_group}>
          <div className={style.moreDescription}>
            <div className={style.form_group_inner}>
              <label htmlFor="description">PRODUCT TYPE</label>
              <select name="" id="">
                <option value="">Equipment-Ventilators</option>
                <option value="">Consumables-Blood</option>
              </select>
            </div>
            <div className={style.form_group_inner}>
              <label htmlFor="description">PURPOSE</label>
              <input type="text" placeholder="N1,500.00" />
            </div>
            <div className={style.form_group_inner}>
              <label htmlFor="description">VENDOR</label>
              <select name="" id="">
                <option value="">Equipment-Ventilators</option>
                <option value="">LifeBank</option>
              </select>
            </div>
          </div>
        </div>
        <hr />

        <div>
          <p>Do you have pending insurance claim?</p>
          <label>
            <input type="radio" name="pay" checked value="yes" />
            Yes
          </label>
          <label>
            <input type="radio" name="pay" value="no" />
            No
          </label>

          <div>
            <div>
              <button>
                <Link to="#">Pay With Nerve</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funding;
