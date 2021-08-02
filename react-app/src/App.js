import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header.js';

import './styles/app.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
