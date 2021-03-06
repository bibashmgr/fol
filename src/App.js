// dependencies
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// pages
import Home from './pages/Home';

// css
import './App.css';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
