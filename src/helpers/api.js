import axios from 'axios';

async function fetchCars(currentPage) {
  const perPage = 8;

  const BASE_URL = 'https://64c038e40d8e251fd1120340.mockapi.io';

  const params = new URLSearchParams({
    page: currentPage,
    limit: perPage,
  });

  const response = await axios.get(`${BASE_URL}/adverts?${params}`);

  return { response, perPage };
}

export default fetchCars;
