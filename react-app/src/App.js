import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import './styles/app.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
