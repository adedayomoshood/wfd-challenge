import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerImages from '../images/banners';

const Hero = () => {
  useEffect(() => {
    var heroWrapper = document.querySelector('#heroSlider');
    var heroImages;

    var currentImage = 0;
    var previousImage;
    if (heroWrapper) heroImages = heroWrapper.children;
    function loopSlider() {
      if (heroImages && heroImages.length > 0) {
        heroImages[currentImage].setAttribute('class', 'active');

        if (previousImage != null)
          heroImages[previousImage].setAttribute('class', 'inactive');

        previousImage = currentImage;
        currentImage++;

        if (currentImage === heroImages.length) currentImage = 0;

        if (heroImages.length > 1) setTimeout(loopSlider, 4000);
      }
    }
    loopSlider();
  }, []);

  return (
    <section id="hero" className="hero">
      <section id="heroSlider" className="hero__images">
        {bannerImages.map((item, index) => (
          <picture key={index}>
            <source media="(max-width: 767px)" srcSet={item.sm} />
            <source media="(max-width: 991px)" srcSet={item.md} />
            <img
              src={item.lg}
              alt=""
              loading={index === 0 ? 'lazy' : 'eager'}
            />
          </picture>
        ))}
      </section>

      <section className="wrapper">
        <section className="hero__content">
          <section className="brand">DREAMSHARE</section>
          <h1>SHARE YOUR HOLIDAY DREAM</h1>
          <h2>And find the perfect partner to fulfil it</h2>
          <Link to="/" className="button">
            Find your holiday partner
          </Link>
        </section>
      </section>
    </section>
  );
};

export default Hero;
