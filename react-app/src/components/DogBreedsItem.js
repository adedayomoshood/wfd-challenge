import { useState } from 'react';
import placeholder from '../images/dog-placeholder.jpeg';

const DogBreedsItem = ({ breed }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className={`dog-breeds__item`}>
      <section className="dog-breeds__avatar">
        <figure className={`${imageLoaded ? '' : 'skeleton'}`}>
          <img
            src={breed?.image?.url ?? placeholder}
            width="120px"
            height="120px"
            alt={breed.name}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </figure>
      </section>

      <h4>{breed.name}</h4>
      <p>{breed.temperament}</p>
    </article>
  );
};

export default DogBreedsItem;
