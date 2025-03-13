import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import BrowserRouter from 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
