import axios from 'axios';

const API_KEY = 'ZcvUdgJ28SIFN8RIVuvAw9y-Ova2pkgU9-fdbjKp92g';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async (query, currentPage) => {
  const response = await axios.get('/search/photos', {
    params: {
      client_id: API_KEY,
      query: query,
      page: currentPage,
      per_page: 9,
      orientation: 'landscape',
    },
  });
  return response.data.results;
};
