import React from 'react'
import Funding from './Funding/Funding';
import Welcome from './Welcome/Welcome';
import DashboardStyles from './Dashboard.module.css'

const Dashboard =() =>{
  return (
    <div className={DashboardStyles.dashcontainer}>
       
        {/* <Sidebar /> */}
         <Funding />
         {/* <Welcome /> */}
         
    </div>
  )
}

export default Dashboard