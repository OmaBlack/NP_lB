import React from 'react'
import Funding from './Funding/Funding'
import DashboardStyles from './Dashboard.module.css'

const Dashboard =() =>{
  return (
    <div className={DashboardStyles.dashcontainer}>
        <Funding />
    </div>
  )
}

export default Dashboard