import React from 'react';
import logo from '../images/logo.png';
import  '../component/Nerve.css';


const Nerve = ()=> {
    return(
        <div>
            <div>
                <img src={logo} alt = 'logo here' className='logo-image'/>
            </div>
        </div>
    );
};

export default Nerve;