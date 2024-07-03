import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
  
import Home from './pages/home';
import Page1 from './pages/page1';
import Navigation from './navigation';

const App = () => {
  return (
    <Router>
      <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        </Routes>
          </div>
  </Router>
  );
};

export default App;