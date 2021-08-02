import { useState } from 'react';
import placeholder from '../images/cat-placeholder.jpeg';

const CarBreedItem = ({ breed }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className={`cat-breeds__item ${imageLoaded ? '' : 'skeleton'}`}>
      <img
        src={breed?.image?.url ?? placeholder}
        width="100%"
        height="100%"
        alt={breed.name}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />
      <div>
        <span className="badge">{breed.origin}</span>
      </div>
      <h4>{breed.name}</h4>
      <p>{breed.description}</p>
    </article>
  );
};

export default CarBreedItem;
