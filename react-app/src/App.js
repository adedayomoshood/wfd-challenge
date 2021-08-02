import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Loader from './components/Loader.js';
import './styles/app.scss';

const SearchPartners = React.lazy(() =>
  import('./components/SearchPartners.js'),
);
const DiscoverActivities = React.lazy(() =>
  import('./components/DiscoverActivities.js'),
);
const CatBreeds = React.lazy(() => import('./components/CatBreeds.js'));
const DogBreeds = React.lazy(() => import('./components/DogBreeds.js'));
const Footer = React.lazy(() => import('./components/Footer.js'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />

      <Suspense fallback={<Loader />}>
        <main>
          <CatBreeds />
          <DogBreeds />
          <DiscoverActivities />
          <SearchPartners />
        </main>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
