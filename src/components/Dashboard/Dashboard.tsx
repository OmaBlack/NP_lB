import React from 'react'
import DashboardStyles from './Dashboard.module.css'
import Header from '../Common/DashboardHeader/DashboardHeader';

const Dashboard =() =>{
  return (
    <div className={DashboardStyles.dashcontainer}>
       

         <Header />
    </div>
  )
}

export default Dashboard