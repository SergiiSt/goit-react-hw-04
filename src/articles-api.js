import axios from 'axios';

const API_KEY = 'blZFH9Tz4Q-h5YC5EMFp0R2pxBsKnM79zm45k7hzITY';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async (query, currentPage) => {
  const response = await axios.get('/search/photos', {
    params: {
      client_id: API_KEY,
      query: query,
      page: currentPage,
      per_page: 10,
      orientation: 'landscape',
    },
  });
  return response.data.results;
};
