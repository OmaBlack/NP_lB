import React from 'react';
import SidebarStyles from './Sidebar.module.css';

const Funding = ()=> {
  return (
    <div className={SidebarStyles.side_container}>
        <div>
            <h1>Pay With Nerve</h1>
            <p>You're doing a great job saving lives today!</p>
            <div>
                <h1>C</h1>
                <h2>180,000 MAXIMUM AMOUNT</h2>
            </div>
            <p>Click here to learn<a>how to increase limit</a></p>
        </div>
        <div>
            <div>
                <h1>HOW MUCH DO YOU NEED</h1>
            </div>
            <div>
                <div>
                     <h1>PRODUCT TYPE</h1>
                </div>
                <div>
                     <h1>PURPOSE</h1>
                </div>
                <div>
                     <h1>VENDOR</h1>
                </div>
            </div>
            
        </div>
       
        <hr></hr>
        <h3>Do you have pending insurance claims?</h3>
        <button></button>
        <button>Pay With Nerve</button>
        
    </div>
  )
}

export default Funding;