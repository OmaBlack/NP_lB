import React from "react";
import HistoryStyle from "./CreditHistory.module.css";
import blockdown from "../../images/blockdown.svg";
import DashboardSidebar from '../common/DashboardSidebar/DashboardSidebar';
import DashboardHeader from '../common/DashboardHeader/DashbordHeader';

const CreditHistory = () => {
  return (
    <>
         {/* <DashboardHeader /> */}
         <DashboardSidebar />
    {/* <div className={HistoryStyle.container}>
      <div className={HistoryStyle.title}>
        <h1>Credit History</h1>
        <div className={HistoryStyle.hisbtn}>
          <button>Make New Request</button>
        </div>
      </div>
      <div className={HistoryStyle.contentlist}>
        <div className={HistoryStyle.headrow}>
          <p className={HistoryStyle.request}><span>REQUEST</span></p>
          <p className={HistoryStyle.purpose}><span>PURPOSE</span></p>
          <p className={HistoryStyle.amount}><span>AMOUNT REQUESTED</span></p><img src={blockdown} className={HistoryStyle.amtbtn} alt="icon" />
          <p className={HistoryStyle.date}><span>DUE DATE</span> </p><img src={blockdown} className={HistoryStyle.datebtn} alt="icon" />
          <p className={HistoryStyle.priority}><span>PRIORITY </span></p><img src={blockdown} className={HistoryStyle.prioritybtn} alt="icon" />
          <p className={HistoryStyle.status}><span>STATUS</span></p><img src={blockdown} alt="icon" />
        </div>

        <div className={HistoryStyle.firstrow}>
          <p className={HistoryStyle.firstrow1}>#75687980987</p>
          <p className={HistoryStyle.firstrow2}>Consumables</p>
          <p className={HistoryStyle.firstrow3}>37,000</p>
          <p className={HistoryStyle.firstrow4}>9/04/2021</p>
          <p className={HistoryStyle.firstrow5}>Low</p>
          <p className={HistoryStyle.firstrow6}>Approved</p>
        </div>

        <div className={HistoryStyle.secondrow}>
        <p className={HistoryStyle.secondrow1}>#78798097865</p>
        <p className={HistoryStyle.secondrow2}>Staffing</p>
        <p className={HistoryStyle.secondrow3}>19,334,000</p>
        <p className={HistoryStyle.secondrow4}>8/01/2021</p>
        <p className={HistoryStyle.secondrow5}>Low</p>
        <p className={HistoryStyle.secondrow6}>Rejected</p>
        </div>

        <div className={HistoryStyle.thirdrow}>
        <p className={HistoryStyle.thirdrow1}>#56768798034</p>
        <p className={HistoryStyle.thirdrow2}>Equipment Purchase</p>
        <p className={HistoryStyle.thirdrow3}>874,350</p>
        <p className={HistoryStyle.thirdrow4}>8/12/2020</p>
        <p className={HistoryStyle.thirdrow5}>Low</p>
        <p className={HistoryStyle.thirdrow6}>Disbursed</p>
        </div>

        <div className={HistoryStyle.fourthrow}>
        <p className={HistoryStyle.fourthrow1}>#56789043597</p>
        <p className={HistoryStyle.fourthrow2}>Consumables</p>
        <p className={HistoryStyle.fourthrow3}>230,000</p>
        <p className={HistoryStyle.fourthrow4}>8/12/2020</p>
        <p className={HistoryStyle.fourthrow5}>Low</p>
        <p className={HistoryStyle.fourthrow6}>Processing</p>
        </div>

        <div className={HistoryStyle.fifthrow}>
        <p className={HistoryStyle.fifthrow1}>#76678934867</p>
        <p className={HistoryStyle.fifthrow2}>Consumables</p>
        <p className={HistoryStyle.fifthrow3}>2,200,000</p>
        <p className={HistoryStyle.fifthrow4}>9/01/2020</p>
        <p className={HistoryStyle.fifthrow5}>High</p>
        <p className={HistoryStyle.fifthrow6}>Rejected</p>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default CreditHistory;
