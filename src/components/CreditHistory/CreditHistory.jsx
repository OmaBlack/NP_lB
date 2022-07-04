import React from 'react';
import HistoryStyle from './CreditHistory.module.css';

const CreditHistory = () => {
  return (
    <div className={HistoryStyle.container}>
      <div className={HistoryStyle.title}>
        <h1>Credit History</h1>
        <div className={HistoryStyle.hisbtn}>
          <button>Make New Request</button>
        </div>
      </div>
    </div>
  )
}

export default CreditHistory