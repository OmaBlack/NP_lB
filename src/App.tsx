import React from 'react';
import ModalStep2 from './components/modal/modalStep2/ModalStep2';
import ModalStep3 from './components/modal/modalStep3/ModalStep3';
import LandingPage from './components/LandingPage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/page" element={<LandingPage />} />
          <Route path="/modal-2" element={<ModalStep2 />} />
          <Route path="/modal-3" element={<ModalStep3 />} />
        </Routes>
    </Router>
  );
}

export default App;
