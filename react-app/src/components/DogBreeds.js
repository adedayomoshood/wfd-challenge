import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DogBreedsItem from './DogBreedsItem';
import Loader from './Loader';

const DogBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchDogBreeds = useCallback(async () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_DOG_API}/breeds`, {
        params: { limit: 4, page },
      })
      .then((response) => {
        setError('');
        setBreeds((current) => [...current, ...response.data]);
        return;
      })
      .catch((error) => {
        setError(error.message);
        return;
      })
      .then(function () {
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    fetchDogBreeds();
  }, [fetchDogBreeds, page]);
  return (
    <section className="page-section">
      <section className="page-section__title">
        <h3>Dog Breeds</h3>
      </section>

      <section className="dog-breeds">
        {breeds.map((breed) => (
          <DogBreedsItem breed={breed} key={breed.id} />
        ))}
      </section>

      {loading && <Loader />}

      <section className="text-center">
        {error && (
          <div className="notification">
            {typeof error === 'string' && `${error}:`} There was an error
            loading Dog Breeds
          </div>
        )}
        {breeds.length >= 20 ? (
          <>
            <div className="notification">
              Please, click the link below to view all Breeds
            </div>
            <Link to="/" className="button button-transparent">
              View all dog breeds
            </Link>
          </>
        ) : (
          <button
            disabled={loading}
            className="button button-transparent"
            onClick={() => setPage(page + 1)}
          >
            Load more dog breeds
          </button>
        )}
      </section>
    </section>
  );
};

export default DogBreeds;
