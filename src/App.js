// dependencies
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// pages
import Home from './pages/Home';
import Form from './components/Form';

// css
import './App.css';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
