import './style/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hydrogen from './pages/Hydrogen';
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import NotFound from './pages/NotFound';
import React, { Component } from 'react';

class App extends Component {



  render() {
    return (
      <React.Fragment>

        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route index path="/home" element={<Home />} />
            <Route index path="/about" element={<About />} />
            <Route index path="/help" element={<Help />} />
            <Route index path="/atom/hydrogen" element={<Hydrogen />} />
            <Route index path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>  

      </React.Fragment>
    );
  }
}

export default App;
