// dependencies
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// components
import Navbar from './components/Navbar';

// css
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
