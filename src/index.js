// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Note: React 18 uses 'react-dom/client'
import './index.css';  // Importing the global CSS file
import App from './App';  // Import the main App component

// Create a root element for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
