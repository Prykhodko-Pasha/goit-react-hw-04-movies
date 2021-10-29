import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import s from './MoviesView.module.css';
import { fetchMovieById } from '../../services/movies-api';
// import Searchbar from '../Searchbar/Searchbar';
import Loader from '../Loader/Loader';
// import MoviesGallery from '../MoviesGallery/MoviesGallery';
// import Button from '../Button/Button';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieDetailsView() {
  //   const [searchQuery, setSearchQuery] = useState('');
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');
  //   const [pageNumber, setPageNumber] = useState(1);
  //   const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    // if (!searchQuery) return; //отменяем первый рендер или рендер пустой строки

    setStatus('pending');

    fetchMovieById(movieId)
      .then(
        data => {
          if (data.results === 0) {
            setStatus('rejected');
            setErrorMessage('Something gone wrong :(');
          } else {
            //   const totalPages = Math.ceil(data.total_pages / 12);
            // const {
            //   id,
            //   poster_path,
            //   backdrop_path,
            //   title,
            //   release_date,
            //   vote_average,
            //   overview,
            //   genresArr,
            // } = data;
            setMovie(data);
            setStatus('resolved');
          }

          //   setShowLoadMoreBtn(totalPages === pageNumber ? false : true);
        },

        // window.scrollTo({
        //   top: document.documentElement.scrollHeight,
        //   behavior: 'smooth',
        // });
      )
      .catch(err => {
        setStatus('rejected');
        setErrorMessage(`There is an error: ${err}`);
      });
  }, [movieId]);

  //   const onSearch = query => {
  //     setSearchQuery(query);
  //     setMovies([]);
  //     setPageNumber(1);
  //   };

  //   const onLoadMore = () => {
  //     setPageNumber(pageNumber + 1);
  //     setStatus('pending');
  //   };

  return (
    <>
      {/* <Searchbar onSearch={onSearch} /> */}
      {status === 'pending' && (
        <>
          {/* {movies.length !== 0 && <MoviesGallery moviesArr={movies} />} */}
          <Loader />
          <div className="loadMoreReplacer"></div>
        </>
      )}
      {status === 'rejected' && <p className="Msg">{errorMessage}</p>}
      {status === 'resolved' && (
        <>
          <MovieCard movie={movie} />
          {/* {showLoadMoreBtn && <Button onLoadMore={onLoadMore} />} */}
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
