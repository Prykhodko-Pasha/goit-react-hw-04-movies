import React, { useState, useEffect } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import s from './MoviesView.module.css';
import { fetchSearchingMovies } from '../../services/movies-api';
import Searchbar from '../Searchbar/Searchbar';
import Loader from '../Loader/Loader';
import MoviesGallery from '../MoviesGallery/MoviesGallery';
import Button from '../Button/Button';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [pageNumber, setPageNumber] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();
  const location = useLocation();
  // const params = useParams();
  console.log(location);
  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams);
  const searchParamFromURL = searchParams.get('query');
  console.log(searchParamFromURL);

  useEffect(() => {
    searchParamFromURL && setSearchQuery(searchParamFromURL);
  }, [searchParamFromURL]);

  useEffect(() => {
    if (!searchQuery) return; //отменяем первый рендер или рендер пустой строки

    setStatus('pending');
    // setTimeout(() => {
    fetchSearchingMovies(searchQuery, pageNumber)
      .then(data => {
        if (data.results === 0) {
          setStatus('rejected');
          setErrorMessage('Something gone wrong :(');
        } else {
          const totalPages = Math.ceil(data.total_pages / 12);
          const usableMovieKeysArr = data.results.map(
            ({ id, poster_path, title, release_date }) => {
              return {
                id,
                poster_path,
                title,
                release_date,
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
    // }, 3000);

    window.scrollTo({
      top: document.documentElement.scrollHeight - window.innerHeight,
      behavior: 'smooth',
    });
  }, [searchQuery, pageNumber]);

  const onSearch = query => {
    setSearchQuery(query);
    setMovies([]);
    setPageNumber(1);
    history.push(`?query=${query}`);
    // location.search = `?query=${query}`;
  };

  const onLoadMore = () => {
    setPageNumber(pageNumber + 1);
    setStatus('pending');
  };

  return (
    <>
      <Searchbar onSearch={onSearch} />
      {status === 'pending' && (
        <>
          {movies.length !== 0 && <MoviesGallery moviesArr={movies} />}
          <div style={{ height: '60vh' }}>
            <Loader />
          </div>
          {/* style={{ height: '70vh' }}*/}
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
//   return (
//     // <div className={s.div}>

//     // </div>
//   );
// }

// Movies.propTypes = {
//   onLoadMore: PropTypes.func.isRequired,
// };
