import React from 'react'
import FinanceStyles from './Finance.module.css';
import { Images } from '../../../ComponentImages';

const Finance = ()=> {
  return (
      <section className={FinanceStyles.financecontainer}>
          <div className={FinanceStyles.financebox}>
            <div className={FinanceStyles.financeimg}>
                <img src={Images.image2} alt=''/>
                <img src={Images.Vector} alt='' className={FinanceStyles.bg_img}/>
            </div>
            <div className={FinanceStyles.finance_text}>
                <h2>Tailored loans and financial support</h2>
                <p>Access financing through Nerve Credit Fund and get instant loans that could help achieve your objectives. We can also provide financial and business advice and support to help you plan your future expansion.</p>
                <div className={FinanceStyles.financebtn}>
                    <button><span className={FinanceStyles.span1}>Get a loan today!</span></button>
                    <button><span className={FinanceStyles.span2}>Learn More</span></button>
                </div>
            </div>
        </div> 
      </section>
  )
}

export default Finance;