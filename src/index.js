// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // This is optional if you want to add some global styles
import App from './ProfileCard/App'; // Adjust the import based on where your App.js is located
import reportWebVitals from './reportWebVitals'; // Optional: to measure performance (you can skip this if not needed)

// Render the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: measure app performance
reportWebVitals();
