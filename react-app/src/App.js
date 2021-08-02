import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import './styles/app.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
    </BrowserRouter>
  );
}

export default App;
