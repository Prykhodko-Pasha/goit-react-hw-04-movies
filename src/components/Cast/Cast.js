import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import s from './Cast.module.css';
import { fetchMovieCast } from '../../services/movies-api';
import Loader from '../Loader/Loader';
// import Button from '../Button/Button';
import CastItem from '../CastItem/CastItem';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');
  //   const [pageNumber, setPageNumber] = useState(1);
  //   const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    // if (!searchQuery) return; //отменяем первый рендер или рендер пустой строки

    setStatus('pending');

    fetchMovieCast(movieId)
      .then(
        data => {
          console.log(data);
          if (data.cast.length === 0) {
            setStatus('rejected');
            setErrorMessage('There is no cast...');
          } else {
            // const totalPages = Math.ceil(data.total_pages / 12);
            const usableCastKeysArr = data.cast.map(
              ({ id, name, profile_path, character }) => {
                return {
                  id,
                  name,
                  profile_path,
                  character,
                };
              },
            );

            setCast(usableCastKeysArr);
            setStatus('resolved');
            // setShowLoadMoreBtn(totalPages === pageNumber ? false : true);
          }

          //   setShowLoadMoreBtn(totalPages === pageNumber ? false : true);
        },

        // window.scrollTo({
        //   top: document.documentElement.scrollHeight,
        //   behavior: 'smooth',
        // }),
      )
      .catch(err => {
        setStatus('rejected');
        setErrorMessage(`There is an error: ${err}`);
      });
  }, [movieId]);

  //   const onSearch = query => {
  //     setSearchQuery(query);
  //     setReviews([]);
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
          <ul className={s.Cast}>
            {cast.map(({ id, name, profile_path, character }, index) => (
              <CastItem
                key={index}
                name={name}
                profile_path={profile_path}
                character={character}
              />
            ))}
          </ul>
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

Cast.propTypes = {
  //   moviesArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  // onOpenModal: PropTypes.func,
};
