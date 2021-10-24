import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { fetchTrendingMovies } from '../../services/movies-api';
// import s from './Button.module.css';
import Loader from '../Loader/Loader';
import MoviesGallery from '../MoviesGallery/MoviesGallery';
import Button from '../Button/Button';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [pageNumber, setPageNumber] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    //    if (!searchQuery) return; //отменяем первый рендер или рендер пустой строки

    setStatus('pending');

    fetchTrendingMovies(pageNumber)
      .then(data => {
        if (data.results === 0) {
          setStatus('rejected');
          setErrorMessage('Something gone wrong :(');
        } else {
          const totalPages = Math.ceil(data.total_pages / 12);
          const usableMovieKeysArr = data.results.map(
            ({ id, poster_path, title }) => {
              return {
                id,
                poster_path,
                title,
              };
            },
          );

          setMovies(prevMovies => [...prevMovies, ...usableMovieKeysArr]);
          setStatus('resolved');
          setShowLoadMoreBtn(totalPages === pageNumber ? false : true);
        }

        // window.scrollTo({
        //   top: document.documentElement.scrollHeight,
        //   behavior: 'smooth',
        // });
      })
      .catch(err => {
        setStatus('rejected');
        setErrorMessage(`There is an error: ${err}`);
      });
  }, [pageNumber]);

  const onLoadMore = () => {
    setPageNumber(pageNumber + 1);
    setStatus('pending');
  };

  return (
    <>
      {status === 'pending' && (
        <>
          {movies.length !== 0 && <MoviesGallery moviesArr={movies} />}
          <Loader />
          <div className="loadMoreReplacer"></div>
        </>
      )}
      {status === 'rejected' && <p className="Msg">{errorMessage}</p>}
      {status === 'resolved' && (
        <>
          <MoviesGallery moviesArr={movies} />
          {showLoadMoreBtn && <Button onLoadMore={onLoadMore} />}
        </>
      )}
      {/* {showModal && (
        <Modal onClose={onCloseModal}>
          <img src={src} alt="" />
        </Modal>
      )} */}
    </>
  );
}

// Button.propTypes = {
//   onLoadMore: PropTypes.func.isRequired,
// };
