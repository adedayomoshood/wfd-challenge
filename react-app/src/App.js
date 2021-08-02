import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import './styles/app.scss';

const SearchPartners = React.lazy(() =>
  import('./components/SearchPartners.js'),
);
const DiscoverActivities = React.lazy(() =>
  import('./components/DiscoverActivities.js'),
);
const Footer = React.lazy(() => import('./components/Footer.js'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />

      <Suspense fallback={''}>
        <main>
          <DiscoverActivities />

          <SearchPartners />
        </main>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
