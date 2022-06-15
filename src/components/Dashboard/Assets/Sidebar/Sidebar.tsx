import React, { useState } from 'react'
import SidebarStyles from './Sidebar.module.css';
import { Images } from '../../../ComponentImages';



const data = [
    {
        id: 1,
        title: 'Funding',
        content1: 'Pay With Nerve',
        content2: 'Project Financing',
        content3: 'Credit Requests'
    }
]

const Sidebar = () => {
    const [selected, setSelected] = useState<number | null>(0);

    const toggle = (id: number) => {
        selected === id ? setSelected(null) : setSelected(id);
    }

  return (

    <div className = {SidebarStyles.sidebar_container}>

         <div className={SidebarStyles.side}>
             {/* <div className={SidebarStyles.first}>
                <img src={Images.sidebarlogo} alt='' className= {SidebarStyles.sidebar_logo}/>
             </div> */}
             <div className={SidebarStyles.bottom}>
                {/* <div className={SidebarStyles.second}>
                    <img src={Images.sided} alt='' className= {SidebarStyles.sidebar_sided}/>
                    <h6>Dashboard</h6>
                </div> */}



                <div className={SidebarStyles.third}>
                    
                    <div className={SidebarStyles.accordion}>
                        {data.map((item) => (
                            <div key={item.id} className={SidebarStyles.item}> 
                                <div className={SidebarStyles.title} onClick={() => toggle(item.id)}>
                                    <img src={Images.Inbox} alt='' className= {SidebarStyles.sidebar_inbox}/>
                                    <h6>{item.title}</h6>
                                    <span>{selected === item.id ? <img src={Images.arrowup} alt="arrowup" /> :  <img src={Images.arrowdown} alt="arrowdown" />}</span>
                                </div>
                                <div className={selected === item.id ? `${SidebarStyles.content} ${SidebarStyles.show}` : SidebarStyles.content}>
                                    <p>{item.content1}</p>
                                    <p>{item.content2}</p>
                                    <p>{item.content3}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>



                {/* <div className={SidebarStyles.fourth}>
                    <img src={Images.Iconr} alt='' className= {SidebarStyles.sidebar_iconr}/>
                    <h6>Reports</h6>
                </div> */}
             </div>
            

         </div>

         <div className = {SidebarStyles.sidebar_content}>
           
         </div>
    </div>
  )
}

export default Sidebar