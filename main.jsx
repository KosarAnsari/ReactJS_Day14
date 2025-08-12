import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import './index.css'
import App from './App.jsx';
import './css/style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <p className="heading">Main Heading</p>

    <App />
  </StrictMode>
);
