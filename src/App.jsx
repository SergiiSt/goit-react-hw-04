import { fetchImages } from './articles-api';
import { useState } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Audio } from 'react-loader-spinner';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // useEffect(() => {
  //   async function getImages() {
  //     try {
  //       setLoading(true);
  //       const data = await fetchImages('dog', 3);
  //       setImages(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   getImages();
  // }, []);
  const handleSearch = async newQery => {
    try {
      setLoading(true);
      setImages([]);
      setError(false );
      const data = await fetchImages(newQery, 1);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  // console.log(images);
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Audio />}
      {error && <p>Something went wrong, reload this page</p>}
      {images.length > 0 && <ImageGallery images={images} />}
    </>
  );
}
// const [articles, setArticles] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(false);
// const [page, setPage] = useState(1);
// const [topic, setTopic] = useState("");
// const [totalPages, setTotalPages] = useState(999);

// const handleSearch = async (newTopic) => {
//   setArticles([]);
//   setPage(1);
//   setTopic(newTopic);
// };

// const handleLoadMore = () => {
//   setPage(page + 1);
// };

// useEffect(() => {
//   if (topic === "") {
//     return;
//   }

//   async function getArticles() {
//     try {
//       setLoading(true);
//       setError(false);
//       const data = await fetchArticles(topic, page);
//       setTotalPages(data.nbPages);
//       setArticles((prevArticles) => {
//         return [...prevArticles, ...data];
//       });
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   }
//   getArticles();
// }, [page, topic]);
export default App;
