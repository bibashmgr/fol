// dependencies
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// css
import './App.css';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleEffect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar toggleEffect={toggleEffect} />
      <Sidebar isOpen={isOpen} toggleEffect={toggleEffect} />
    </Router>
  );
}

export default App;
