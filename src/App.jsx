import { fetchImages } from './articles-api';
import { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import LoadMoreBtn from './Components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './Components/ErrorMessage/ErrorMessage';
import Loader from './Components/Loader/Loader';
import ImageModal from './Components/ImageModal/ImageModal';
import Modal from 'react-modal';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

Modal.setAppElement('#root');

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async newQery => {
    if (query === ' ') {
      toast.error('Search field should not be empty');
      return;
    }
    setImages([]);
    setPage(1);
    setQuery(newQery);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImages(query, page);
        setImages(prevImages => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [page, query]);

  const openModal = image => {
    setSelectedImage(image);
    setModalIsOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery openModal={openModal} images={images} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedImage={selectedImage}
      />
      <Toaster />
    </>
  );
}

export default App;
