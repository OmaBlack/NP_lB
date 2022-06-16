import React from 'react';
import '../component/TemplateHolder.css';
import Indicator from  './Indicator.js';
import SideBarText from './SideBarText';
import Nerve from './Nerve.js';
import Chart from './Chart.js';
import StartCenteredDiv from './StartCenteredDiv';

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