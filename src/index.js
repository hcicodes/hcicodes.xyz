import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { initSettings } from './settings';

initSettings();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);