import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './layout/app';
import '/workspaces/project/src/css/Styles.css'; 

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
