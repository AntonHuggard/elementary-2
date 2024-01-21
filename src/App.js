import './style/App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import Hydrogen from './pages/elements/Hydrogen';
import Helium from './pages/elements/Helium';
import Lithium from './pages/elements/Lithium';
import Carbon from './pages/elements/Carbon'
import Neon from './pages/elements/Neon';
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import Ions from './pages/Ions'
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
                <Route path="/hydrogen" element={<Hydrogen />} />
                <Route path="/helium" element={<Helium />} />
                <Route path="/lithium" element={<Lithium />} />
                <Route path="/carbon" element={<Carbon />} />
                <Route path="/neon" element={<Neon />} />
                <Route path="/ions" element={<Ions />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
          </HashRouter>

      </React.Fragment>
    );
  }
}

export default App;
