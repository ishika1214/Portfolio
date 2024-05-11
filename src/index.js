import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this comes before the Tailwind CSS import
import App from './App';
// import '../dist/output.css' // Assuming this is your Tailwind CSS file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);