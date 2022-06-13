import React from 'react'
import SecondStyles from './Second.module.css';
import { Images } from '../../../ComponentImages';

function Second() {
  return (
      <section className={SecondStyles.container}>
          <div className={SecondStyles.box}>
            <div className={SecondStyles.img}>
                <img src={Images.image2} alt=''/>
            </div>
            <div className={SecondStyles.second_text}>
                <h2>Tailored loans and financial support</h2>
                <p>Access financing through Nerve Credit Fund and get instant loans that could help achieve your objectives. We can also provide financial and business advice and support to help you plan your future expansion.</p>
                <div className={SecondStyles.btn}>
                    <button><span className={SecondStyles.span1}>Get a loan today!</span></button>
                    <button><span className={SecondStyles.span2}>Learn More</span></button>
                </div>
            </div>
        </div> 
      </section>
  )
}

export default Second;