import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/config.scss';
import './fonts/fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('wrapper')
);