// dependencies
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

// pages
import Home from './pages/Home';

// css
import './App.css';

const App = () => {

  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
