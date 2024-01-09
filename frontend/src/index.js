import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  // imports bootstrap default css styles
import './App.scss';                                            // imports bootstrap minimum sass AND custom sass styles
import './custom.css';                                          // imports custom css which overrides bootstrap css
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
