window.onload = function () {
  loopSlider();
};

var heroWrapper = document.querySelector('#heroSlider');
var heroImages;

if (heroWrapper) heroImages = heroWrapper.children;

for (var i = 0; i < heroImages.length; i++) {
  heroImages[i].classList.remove('none');
}

var currentImage = 0;
var previousImage;

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

function searchPartners(e) {
  var searchPartnersParams = document.getElementById(
    'searchPartnersInput',
  ).value;

  console.log({ interest: searchPartnersParams });
  e.preventDefault();
}

var searchPartnersForm = document.getElementById('searchPartnersForm');
searchPartnersForm.addEventListener('submit', searchPartners);
