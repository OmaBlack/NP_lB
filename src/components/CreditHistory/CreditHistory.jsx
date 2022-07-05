import React from "react";
import HistoryStyle from "./CreditHistory.module.css";
import blockdown from "../../images/blockdown.svg";

const CreditHistory = () => {
  return (
    <div className={HistoryStyle.container}>
      <div className={HistoryStyle.title}>
        <h1>Credit History</h1>
        <div className={HistoryStyle.hisbtn}>
          <button>Make New Request</button>
        </div>
      </div>
      <div className={HistoryStyle.contentlist}>
        <div className={HistoryStyle.headrow}>
          <p>REQUEST</p>
          <p>PURPOSE</p>
          <p>AMOUNT REQUESTED<img src={blockdown} alt="icon" /></p>
          <p>DUE DATE <img src={blockdown} alt="icon" /></p>
          <p>PRIORITY <img src={blockdown} alt="icon" /></p>
          <p>STATUS <img src={blockdown} alt="icon" /></p>
        </div>

        <div className={HistoryStyle.firstrow}>
          <p>#75687980987</p>
          <p>Consumables</p>
          <p>37,000</p>
          <p>9/04/2021</p>
          <p>Low</p>
          <p>Approved</p>
        </div>

        <div className={HistoryStyle.secondrow}>
        <p>#78798097865</p>
        <p>Staffing</p>
        <p>19,334,000</p>
        <p>8/01/2021</p>
        <p>Low</p>
        <p>Rejected</p>
        </div>

        <div className={HistoryStyle.thirdrow}>
        <p>#56768798034</p>
        <p>Equipment Purchase</p>
        <p>874,350</p>
        <p>8/12/2020</p>
        <p>Low</p>
        <p>Disbursed</p>
        </div>

        <div className={HistoryStyle.fourthrow}>
        <p>#56789043597</p>
        <p>Consumables</p>
        <p>230,000</p>
        <p>8/12/2020</p>
        <p>Low</p>
        <p>Processing</p>
        </div>

        <div className={HistoryStyle.fifthrow}>
        <p>#76678934867</p>
        <p>Consumables</p>
        <p>2,200,000</p>
        <p>9/01/2020</p>
        <p>High</p>
        <p>Rejected</p>
        </div>
      </div>
    </div>
  );
};

export default CreditHistory;
