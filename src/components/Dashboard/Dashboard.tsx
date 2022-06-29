import React from 'react'
import Funding from './Funding/Funding';
import Welcome from './Welcome/Welcome';
import Sidebar from '../Common/Sidebar/Sidebar';
import DashboardStyles from './Dashboard.module.css'
import Header from '../Common/Header/Header';

const Dashboard =() =>{
  return (
    <div className={DashboardStyles.dashcontainer}>
       
         {/* <Sidebar /> */}
         {/* <Funding /> */}
         {/* <Welcome /> */}
         <Header />
    </div>
  )
}

export default Dashboard