import axios from 'axios';

// axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

// export const fetchArticles = async (topic, currentPage) => {
//   const res = await axios.get("/search", {
//     params: {
//       query: topic,
//       page: currentPage,
//       hitsPerPage: 5,
//     },
//   });

//   return res.data.hits;
// };

const API_KEY = 'ZcvUdgJ28SIFN8RIVuvAw9y-Ova2pkgU9-fdbjKp92g';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async (query, currentPage) => {
  const res = await axios.get('/search/photos', {
    params: {
      client_id: API_KEY,
      query: query,
      page: currentPage,
      per_page: 20,
    },
  });
  // console.log(res.data.hits);
  return res.data.hiits;
};
