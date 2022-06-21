import React, { useState } from 'react'
import style from './Sidebar.module.css';
import { Link } from "react-router-dom"
import { Images } from '../../../ComponentImages';


function Sidebar() {
    const [show, setShow] = useState(false);

    const display = () => {
        setShow(!show);
    }

    
  return (
    <div className={style.sidebar}>
        <div>
        <img src={Images.sidebarlogo} alt=''  className={style.sidelogo}/>
        </div>
        <div className={style.sideTag}>
            <ul>
                <li className={style.dashboard}>
                    <Link to = "/dashboard" className={style.linkimg}>
                        <img src = {Images.sided}  alt="" className ={style.Sidebar_icon}/>
                        Dashboard
                    </Link>
                </li>

                <li className={style.fund}>
                    <Link to="#" className={style.linkimg}>
                        <img src = {Images.Inbox}  alt="" className ={style.Sidebar_icon}/>
                        <span>Funding</span>
                        <span className={style.btn} onClick={display}>{show ? <img src={Images.warrowup} alt="warrowup" />  : <img src={Images.warrowdown} alt="warrowdown" /> }</span>
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

    </div>
  )
}

export default Sidebar


// const Sidebar = () => {
//   return (
//     <div className={SidebarStyles.side}> 
//          <div className={SidebarStyles.top}>
//              <div className={SidebarStyles.logo}>
//                  <p>Logo + Nerve</p>
//              </div>
//              <div className={SidebarStyles.menu}>
//                  <div className={SidebarStyles.dash}>
//                      <p>Dashboard</p>
//                  </div>

//                  <div className={SidebarStyles.fund}>
//                     <div className={SidebarStyles.question}><p>Funding</p></div> 
//                     <div className={SidebarStyles.answer}>
//                         <p>Pay With Nerve</p>
//                         <p>Project Financing</p>
//                         <p>Credit Requests</p>
//                     </div>
//                  </div>

//                  <div className={SidebarStyles.result}>
//                      <p>Results</p>
//                  </div>
//              </div>
//         </div>   
//     </div>
//   )
// }

// export default Sidebar



























// const Sidebar =()=> {
//   return (
//     <div className={SidebarStyles.side}>
//       <div className={SidebarStyles.sider}>
//           <div className={SidebarStyles.first}>
//             <img src={Images.sidebarlogo} alt='' className= {SidebarStyles.sidebar_logo}/>
//          </div> 
//          <div className= {SidebarStyles.list}>
//          <div className={SidebarStyles.side_nav}>
//                      <img src={Images.Iconr} alt='' className= {SidebarStyles.sidebar_icon}/>
//                         <ul>
//                          <li><a href="#">Report</a></li>
//                          </ul>

//                    </div>

//                  <div className={SidebarStyles.side_nav}>
//                      <img src={Images.Inbox} alt='' className= {SidebarStyles.sidebar_icon} />
                     
//                  <ul>

//                     <li><a href="">Funding</a></li>
                       
//                          <li><a href="#">Pay With Nerve</a></li>
//                          <li><a href="#">Project Financing</a></li>
//                          <li><a href="#">Credit Requests</a></li>
                         
                       
//                      </ul>
                     
//                      </div>
                
//                      <div className={SidebarStyles.side_nav}>
//                      <img src={Images.Iconr} alt='' className= {SidebarStyles.sidebar_icon}/>
//                      <ul>
//                          <li><a href="#">Report</a></li>
//                          </ul>
//                      </div>
            
//          </div>
//          </div>
//     </div>
//   )
// }

// export default Sidebar;

