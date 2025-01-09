// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobileNav from './components/MobileNav';
import Home from './pages/Home';
import Tools from './pages/Tools';
import InvestorBoardroom from './pages/InvestorBoardroom';

function App() {
  return (
    <Router>
      <MobileNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scripts" element={<Tools />} />
        <Route path="/546865496E766573746F7273426F617264726F6F6D" element={<InvestorBoardroom />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
