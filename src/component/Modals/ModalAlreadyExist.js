import React from "react";
import '../Modals/ModalAlreadyExist.css';
import Image  from "../../Images/redIcon.png";




function ModalAlreadyExist() {
  return (
    <div className='Modal-Exist-wrapper'>
        <div className='Modal-Exist-container'>
            <div className='content'>
                <div className='Icon'>
                    <img src={Image} alt="Icon" />
                </div>
                <h1>Account Already Exists!</h1>
                <p>
                    An account with the email address already exists. You will be
                    redirected to the login page.
                </p>
                <p className='step2_btn'>
                    <button>Continue</button>
                </p>
            </div>
        </div>
    </div>
  );
}
export default ModalAlreadyExist;
