import React, { useState, useEffect } from 'react';
import fetchImages from '../services/images-api';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [pageNumber, setPageNumber] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [src, setSrc] = useState('');

  useEffect(() => {
    if (!searchQuery) return; //отменяем первый рендер или рендер пустой строки

    setStatus('pending');

    fetchImages(searchQuery, pageNumber)
      .then(data => {
        if (data.hits.length === 0) {
          setStatus('rejected');
          setErrorMessage('No matches found :(');
        } else {
          const totalPages = Math.ceil(data.total / 12);
          const usableImageKeysArr = data.hits.map(
            ({ id, webformatURL, largeImageURL }) => {
              return {
                id,
                webformatURL,
                largeImageURL,
              };
            },
          );

          setImages(prevImages => [...prevImages, ...usableImageKeysArr]);
          setStatus('resolved');
          setShowLoadMoreBtn(totalPages === pageNumber ? false : true);
        }

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(err => {
        setStatus('rejected');
        setErrorMessage(`There is an error: ${err}`);
      });
  }, [searchQuery, pageNumber]);

  const onSearch = query => {
    setSearchQuery(query);
    setImages([]);
    setPageNumber(1);
  };

  const onOpenModal = img => {
    if (img.className.includes('ImageGalleryItem__image')) {
      setShowModal(true);
      setSrc(img.dataset.src);
    }
  };

  const onCloseModal = () => {
    setShowModal(false);
    setSrc('');
  };

  const onLoadMore = () => {
    setPageNumber(pageNumber + 1);
    setStatus('pending');
  };

  return (
    <>
      <Searchbar onSearch={onSearch} />
      {status === 'idle' && <p className="Msg">Enter search query :)</p>}
      {status === 'pending' && (
        <>
          {images.length !== 0 && <ImageGallery imagesArr={images} />}
          <Loader />
          <div className="loadMoreReplacer"></div>
        </>
      )}
      {status === 'rejected' && <p className="Msg">{errorMessage}</p>}
      {status === 'resolved' && (
        <>
          <ImageGallery imagesArr={images} onOpenModal={onOpenModal} />
          {showLoadMoreBtn && <Button onLoadMore={onLoadMore} />}
        </>
      )}
      {showModal && (
        <Modal onClose={onCloseModal}>
          <img src={src} alt="" />
        </Modal>
      )}
    </>
  );
}
