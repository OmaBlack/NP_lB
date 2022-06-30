import React from "react";
import  './ModalAlert.css';
import Image from '../../Assets/Images/greenIcon.png';




function ModalAlert() {
  return (
    <div className='Module-wrapper'>
        <div className='Modal-Alert-container'>
            <div className='content'>
                <div className='Icon'>
                    <img src={Image} alt="Icon" />
                </div>
                <h1 className='Alert-h1'>Account Created Successfully!</h1>
                <p>
                    Limited Information found. You will be required to give more
                    information about your hospital, facility or organisation
                </p>
                <p className='step2_btn'>
                    <button>Continue</button>
                </p>
            </div>
        </div>
    </div>
  );
}
export default ModalAlert;
