// dependencies
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// pages
import Home from './pages/Home';
import Cards from './components/Cards';

// css
import './App.css';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
