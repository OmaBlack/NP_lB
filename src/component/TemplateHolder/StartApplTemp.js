import React from 'react';
import './StartApplTemp.css';
import Indicator from  '../Indicator/Indicator.js';
import SideBarText from '../SideBar/SideBarText.js';
import Nerve from '../Nerve/Nerve.js';
import Chart from '../Chart/Chart.js';
import StartCenteredDiv from '../Pages/StartApplication';
//import example from '../..'
const TemplateHolder =()=>{

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
                        <Indicator/>
                        <StartCenteredDiv/>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default TemplateHolder;