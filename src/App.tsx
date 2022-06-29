import React from 'react';
import ModalStep2 from './components/Modals/modalStep2/ModalStep2';
import ModalStep3 from './components/Modals/modalStep3/ModalStep3';
import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
