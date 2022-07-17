
import React from "react";
import { Routes, Route } from "react-router-dom";
import ModalStep2 from "./components/Modals/modalStep2/ModalStep2";
import ModalStep3 from "./components/Modals/modalStep3/ModalStep3";
import LandingPage from "./components/LandingPage/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Funding from "./components/Dashboard/Funding/Funding";
import Welcome from "./components/Dashboard/Welcome/Welcome";
import DashboardSidebar from "./components/Common/DashboardSidebar/DashboardSidebar";
import TemplateHolder from "./components/TemplateHolder/StartApplTemp";
import TemplateHolder2 from "./components/TemplateHolder/InformationPageTemp";
import TemplateHolder3 from "./components/TemplateHolder/FinancialPageTemp";
import TemplateHolder4 from "./components/TemplateHolder/CalculateCreditTemp";
import TemplateHolder5 from "./components/TemplateHolder/ApplicationSuccessfulTemp";
import ModalAlert from "./components/Modals/ModalAlert";
import "./Styles/global.css";
import ModalAlreadyExist from "./components/Modals/ModalAlreadyExist";
import EmailVerification from "./components/Pages/EmailVerified";
import Creditform from './components/Creditform/Creditform';
import Login from './components/login/Login';
import Signup from "./components/signup/Signup";
import ProjectFinancing from './components/projectFinancing/ProjectFinancing';
import RequestSubmitted from './components/request-submitted/RequestSubmitted';
import CreditHistory from './components/CreditHistory/CreditHistory';




function App(){
  const location = window.location.pathname;
  return (
    <div>
        {location.includes("/funding") && <DashboardSidebar />}
        {location.includes("/welcome") && <DashboardSidebar />}
        <Routes>
          <Route path="/funding" element={<Funding />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/modal-2" element={<ModalStep2 />} />
          <Route path="/modal-3" element={<ModalStep3 />} />
          <Route path="/started" element={<TemplateHolder />} />
          <Route path="/getInstanceLoan" element={<TemplateHolder2 />} />
          <Route path="/additionalInformation" element={<TemplateHolder3 />} />
          <Route path="/calculateCredit" element={<TemplateHolder4 />} />
          <Route path="/successful" element={<TemplateHolder5 />} />
          <Route path="/modalAlert" element={<ModalAlert />} />
          <Route path="/modalAlreadyExist" element={<ModalAlreadyExist />} />
          <Route path="/emailVerified" element={<EmailVerification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/creditform" element={<Creditform />} />
          <Route path="/projectfinancing"element={<ProjectFinancing />} />
          <Route path="/requestsubmitted" element={<RequestSubmitted />} />
          <Route path="credithistory" element={<CreditHistory />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  );
}

export default App;

