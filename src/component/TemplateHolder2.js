import React from 'react';
import '../component/TemplateHolder.css';
import Indicator from  './Indicator2.js';
import SideBarText from './SideBarText';
import Nerve from './Nerve.js';
import Chart from './Chart.js';
import SecondPageCentered from './SecondPageCentered';

const TemplateHolder2 =()=>{

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
                        <SecondPageCentered/>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default TemplateHolder2;