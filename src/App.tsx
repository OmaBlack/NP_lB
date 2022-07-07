import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Creditform from './components/Creditform/Creditform';
import Login from './components/login/Login';
import Signup from "./components/signup/Signup";
import ProjectFinancing from './components/projectFinancing/ProjectFinancing';
import RequestSubmitted from './components/request-submitted/RequestSubmitted';
import CreditHistory from './components/CreditHistory/CreditHistory';
import ModalStep2 from './components/Modals/modalStep2/ModalStep2';
import ModalStep3 from './components/Modals/modalStep3/ModalStep3';
import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import Funding from './components/Dashboard/Funding/Funding';
import Welcome from './components/Dashboard/Welcome/Welcome';
import Sidebar from './components/Common/Sidebar/Sidebar';


function App() {
  const location = window.location.pathname;
  return (
  
    <div>
      <Router>
        {location.includes("/funding") && (<Sidebar />)}
        {location.includes("/welcome") && (<Sidebar />)}
        <Routes>
        <Route path="/login" element={<Login />} />
            <Route path="/creditform" element={<Creditform />} />
            <Route path="/projectfinancing"element={<ProjectFinancing />} />
            <Route path="/requestsubmitted" element={<RequestSubmitted />} />
            <Route path="credithistory" element={<CreditHistory />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/page" element={<LandingPage />} />
            <Route path="/modal-2" element={<ModalStep2 />} />
            <Route path="/modal-3" element={<ModalStep3 />} />
          </Routes>
      </Router>

    </div>
  );

}

export default App;

