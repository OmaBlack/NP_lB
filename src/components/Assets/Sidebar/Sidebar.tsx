import React, { useState } from 'react'
import style from './Sidebar.module.css';
import { Link } from "react-router-dom"
import { Images } from '../../ComponentImages';


function Sidebar() {
    const [show, setShow] = useState(false);

    const display = () => {
        setShow(!show);
    }

    
  return (
    <aside className={style.sidebar}>
        <div>
        <img src={Images.sidebarlogo} alt='nerve logo'  className={style.sidelogo}/>
        </div>
        <div className={style.sideTag}>
            <ul>
                <li className={style.dashboard}>
                    <Link to = "/dashboard" className={style.linkimg}>
                        <img src = {Images.sided}  alt="icon" className ={style.Sidebar_icon}/>
                        Dashboard
                    </Link>
                </li>

                <li className={style.fund}>
                    <Link to="#" className={style.linkimg}>
                        <img src = {Images.Inbox}  alt="icon" className ={style.Sidebar_icon}/>
                        <span>Funding</span>
                        <span className={style.btn} onClick={display}>{show ? <img src={Images.warrowup} alt="a white arrow" />  : <img src={Images.warrowdown} alt="a white arrow" /> }</span>
                    </Link>
                </li>
                { show && 
                    <div className={style.child}>
                        <Link to="#" className ={style.linkchild}><li><h2>Pay With Nerve</h2></li></Link>
                        <Link to="#" className ={style.linkchild}><li><h2>Project Financing</h2></li></Link>
                        <Link to="#" className ={style.linkchild}><li><h2>Credit Requests</h2></li></Link>
                    </div> 
                }
                
                

                <li className={style.dashboard}>
                    <Link to = "/reports" className={style.linkimg}>
                        <img src = {Images.Iconr}  alt="" className ={style.Sidebar_icon}/>
                        Reports
                    </Link>
                </li>

            </ul>
        </div>

    </aside>
  )
}

export default Sidebar


