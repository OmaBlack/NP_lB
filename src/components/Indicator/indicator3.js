import React from "react";
import "./Indicator.css";
import dot from "../../Assets/Images/bluedot.jpeg";

const Indicator3 = () => {

  return (
    <div className="indicator">
      <div className="indc">
        <div className="num1">1</div>
        <div className="start">START</div>
        <img src={dot} alt="icon missing" />
      </div>
      <div className="indc">
        <div className="num1">2</div>
        <div className="start">INFORMATION</div>
        <img src={dot} alt="icon missing" />
      </div>
      <div className="indc active">
        <div className="num1">3</div>
        <div className="start">FINANCIAL</div>
        <img src={dot} alt="icon missing" />
      </div>
      <div className="indc">
        <div className="num1">4</div>
        <div className="start">CALCULATE</div>
        <img src={dot} alt="icon missing" />
      </div>
    </div>
  );
};

export default Indicator3;
