import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './fonts/fonts.css';
import './styles/config.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('wrapper')
);