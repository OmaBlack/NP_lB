import React from 'react';

import Creditform from './components/Creditform/Creditform';
import Login from './components/login/Login';
import Signup from "./components/signup/Signup";
import ProjectFinancing from './components/projectFinancing/ProjectFinancing';
import RequestSubmitted from './components/request-submitted/RequestSubmitted';
import CreditHistory from './components/CreditHistory/CreditHistory';
import {Route, Routes} from 'react-router-dom';





function App() {
  const location = window.location.pathname;
  return (
  
    <div>
        <Routes>
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

