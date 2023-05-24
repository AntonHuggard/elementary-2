import './style/App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
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

        <HashRouter>
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/help" element={<Help />} />
                <Route path="/atom/hydrogen" element={<Hydrogen />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
          </HashRouter>

      </React.Fragment>
    );
  }
}

export default App;
