import React from 'react';
import '../component/TemplateHolder.css';
import Indicator from  './Indicator3.js';
import SideBarText from './SideBarText';
import Nerve from './Nerve.js';
import Chart from './Chart.js';
import ThirdPageDiv from './ThirdPageDiv';

const TemplateHolder3 =()=>{

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
                        <ThirdPageDiv/>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default TemplateHolder3;