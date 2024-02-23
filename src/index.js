import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './style/main.css';
import './style/header.css';
import './style/footer.css';
import './style/periodic-table.css';
import './style/modal.css';
import './style/slider.css';
import './style/sliderMenu.css';
import './style/generic.css';
import './style/ions.css';
import './style/page-settings.css';
import './style/atom-details.css';
import './style/atom-animation.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
