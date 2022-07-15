import React from "react";
import "./EmailVerified.css";
import logo from "../../Assets/Images/logo.png";
import greenIcon from "../../Assets/Images/greenIcon.png";
import { FaCheck } from "react-icons/fa";







const  EmailVerification = ()=> {

    const data = {
        name: "Hellen",
        Message: "Your account has been verified successfully and you can now make requests using this platform. Here is your Unique Registration",
        Token: 'XXXXXX',
    };


    return (
      <div className="emailWrapper">
        <div className="container5">
          <img src={logo} alt="emailverified" className="nerve-email" />
        </div>
        <div className="email-icon-wrapper">
          <FaCheck className="email-icon" />
        </div>
        <h2 className="message">
          Congratulations your email has been verified!
        </h2>
        <div className= 'text-body'>
          Hello Doctor {data.name}, <br></br>
          <span>{data.Message} {data.Token}
          </span>
        </div>
      </div>
    );
}


export default EmailVerification;