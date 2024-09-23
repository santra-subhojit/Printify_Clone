// src/index.js (React 18 style)
import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot from react-dom/client
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root for the app
root.render(<App />);               // Render the app using the new createRoot API
