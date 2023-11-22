import { useEffect, useState } from 'react';

import { Notify } from 'notiflix';
import fetchCars from '../../helpers/api';

import Button from 'components/Button';
import CarsGallery from 'components/CarsGallery';
import SearchBar from 'components/SearchBar';

const CatalogContent = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPages] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCarsData = async () => {
      setIsLoading(true);

      try {
        const {
          response: { data },
          perPage,
        } = await fetchCars(currentPage);
        takeCars(data, perPage);
      } catch (error) {
        console.log(error); //???
        Notify.failure('Oops, something went wrong. Please try later.');
      } finally {
        setIsLoading(false);
      }
    };

    const takeCars = (data, perPage) => {
      if (data.length !== 0) {
        setCars(prevState => [...prevState, ...data]);

        if (data.length < perPage) {
          setLastPages(true);
        }
      } else {
        setLastPages(true);
        Notify.failure('Sorry, there are no cars.');
      }
    };

    fetchCarsData();
  }, [currentPage]);

  const onLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <>
      <SearchBar />
      <CarsGallery data={cars} />
      {!lastPage && !isLoading && (
        <Button
          name="load"
          type="button"
          text="Load more"
          onClick={onLoadMore}
        ></Button>
      )}
    </>
  );
};

export default CatalogContent;
