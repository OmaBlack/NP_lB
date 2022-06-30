import React from "react";
import ModalStep2 from "./components/Modals/modalStep2/ModalStep2";
import ModalStep3 from "./components/Modals/modalStep3/ModalStep3";
import LandingPage from "./components/LandingPage/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Funding from "./components/Dashboard/Funding/Funding";
import Welcome from "./components/Dashboard/Welcome/Welcome";
import Sidebar from "./components/Common/Sidebar/Sidebar";
import TemplateHolder from "./components/TemplateHolder/StartApplTemp";
import TemplateHolder2 from "./components/TemplateHolder/FinancialPageTemp";
import TemplateHolder3 from "./components/TemplateHolder/InformationPageTemp";
import TemplateHolder4 from "./components/TemplateHolder/CalculateCreditTemp";
import TemplateHolder5 from "./components/TemplateHolder/ApplicationSuccessfulTemp";
import ModalAlert from "./components/Modals/ModalAlert";
import "./Styles/global.css";
import ModalAlreadyExist from "./components/Modals/ModalAlreadyExist";

function App() {
  const location = window.location.pathname;
  return (
    <div>
      <Router>
        {location.includes("/funding") && <Sidebar />}
        {location.includes("/welcome") && <Sidebar />}
        <Routes>
          <Route path="/funding" element={<Funding />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/page" element={<LandingPage />} />
          <Route path="/modal-2" element={<ModalStep2 />} />
          <Route path="/modal-3" element={<ModalStep3 />} />
          <Route path="/" element={<TemplateHolder />} />
          <Route path="/getInstanceLoan" element={<TemplateHolder2 />} />
          <Route path="/additionalInformation" element={<TemplateHolder3 />} />
          <Route path="/calculateCredit" element={<TemplateHolder4 />} />
          <Route path="/successful" element={<TemplateHolder5 />} />
          <Route path="/modalAlert" element={<ModalAlert />} />
          <Route path="/modalAlreadyExist" element={<ModalAlreadyExist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
