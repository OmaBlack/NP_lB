import React from 'react';
import styles from './Welcome.module.css';
import { Images } from '../../ComponentImages'


const Welcome =() => {
  return (
    <div className={styles.container}>
        <div className={styles.side}>

        </div>

        <div className={styles.content}>
           <div className={styles.top}>
               <div className={styles.left}>
                    <h2>Welcome,</h2>
                    <p>You’re doing a great job saving lives today!</p>
               </div>
               <button className={styles.action}>
                   <span>Quick Action</span>
                   <img src={Images.arrowdown} alt="" />
               </button>
           </div>
           <div className={styles.bottom}>
                
           </div>
        </div>
    </div>
  )
}

export default Welcome