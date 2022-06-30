import React from "react";
import { Link } from "react-router-dom";
import './ApplicationSuccessful.css';
import circle from '../../Assets/Images/circle.png';



const FiftPageDiv = ()=> {

    return (
      <div>
        <div className="Holder5">
          <img src={circle} alt="cirle icon" className="image" />

          <h2 className="test-Holder5">Your application has been submitted!</h2>

          <div className="smallText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec<br></br>
            ullamcorper mattis, pulvinar dapibus leo.
          </div>

          <div className="btn-div">
            <Link to='/welcome'>
              <button className="btn">Go to your account</button>
            </Link>
          </div>
        </div>
      </div>
    );

}


export default FiftPageDiv;