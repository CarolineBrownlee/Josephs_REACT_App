import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import { JosephsApp } from "./components/JosephsApp"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <JosephsApp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);