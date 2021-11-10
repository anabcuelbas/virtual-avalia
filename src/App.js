import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes } from './routes';

function App() {
  return (
    <Router basename="/virtual-avalia">
      <Routes/>
    </Router>
  );
}

export default App;
