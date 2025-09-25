import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Import app-level CSS (kept minimal) and ensure dark overrides are available in build.
import './index.css';

// Dynamically load dark.css from the public folder so the app defaults to dark theme
const darkLink = document.createElement('link');
darkLink.rel = 'stylesheet';
darkLink.href = process.env.PUBLIC_URL + '/assets/css/dark.css';
document.head.appendChild(darkLink);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Only one BrowserRouter here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
