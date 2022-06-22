import React from 'react';
import ModalStep2 from './components/modal/modalStep2/ModalStep2';
import ModalStep3 from './components/modal/modalStep3/ModalStep3';
import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Funding from './components/Dashboard/Funding/Funding';
import Welcome from './components/Dashboard/Welcome/Welcome';
import Sidebar from './components/Assets/Sidebar/Sidebar';

function App() {
  return (
    <Router>
        <div>
          <Sidebar />
          <Routes>
            <Route path="/funding" element={<Funding />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </div>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/page" element={<LandingPage />} />
          <Route path="/modal-2" element={<ModalStep2 />} />
          <Route path="/modal-3" element={<ModalStep3 />} />
        </Routes>
    </Router>
  );

}

export default App;
