import React from 'react';
import './ApplicationSuccessfulTemp.css';
import SideBarText from '../SideBar/SideBarText.js';
import Nerve from '../Nerve/Nerve.js';
import Chart from '../Chart/Chart.js';
import FiftPageDiv from '../Pages/ApplicationSuccessful';

const TemplateHolder5 =()=>{

    return(

        <div>
            <div className>
                <div className='wrapper'>
                    <div className='row-div'>
                        <Nerve/>
                        <SideBarText/>
                        <Chart/>
                    </div>
                    <div className='column-div'>
                        <FiftPageDiv/>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default TemplateHolder5;