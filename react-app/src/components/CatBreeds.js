import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import CatBreedsItem from './CatBreedsItem';

const CatBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetCatBreeds = useCallback(async () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_CAT_API}breeds`, {
        params: { limit: 3, page },
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
    fetCatBreeds();
  }, [fetCatBreeds, page]);

  return (
    <section className="page-section">
      <section className="page-section__title">
        <h3>Cat Breeds</h3>
      </section>

      <section className="cat-breeds">
        {breeds.map((breed) => (
          <CatBreedsItem breed={breed} key={breed.id} />
        ))}
      </section>

      {loading && <Loader />}

      <section className="text-center">
        {error && (
          <div className="notification">
            {typeof error === 'string' && `${error}:`} There was an error
            loading Cat Breeds
          </div>
        )}
        {breeds.length >= 9 ? (
          <>
            <div className="notification">
              Please, click the link below to view all Breeds
            </div>
            <Link to="/" className="button button-transparent">
              View all breeds
            </Link>
          </>
        ) : (
          <button
            disabled={loading}
            className="button button-transparent"
            onClick={() => setPage(page + 1)}
          >
            Load more breeds
          </button>
        )}
      </section>
    </section>
  );
};

export default CatBreeds;
