import React from "react";
import "./FinancialPageTemp.css";
import SideBarText from "../SideBar/SideBarText.js";
import Nerve from "../Nerve/Nerve.js";
import Chart from "../Chart/Chart.js";
import ThirdPageDiv from "../Pages/FinancialPage";

const TemplateHolder3 = () => {
  return (
    <div>
      <div className>
        <div className="wrapper">
          <div className="row-div">
            <Nerve />
            <SideBarText />
            <Chart />
          </div>
          <div className="column-div">
            <ThirdPageDiv />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateHolder3;
