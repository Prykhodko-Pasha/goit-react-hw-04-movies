import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Reviews.module.css';
import { fetchMovieReviews } from '../../services/movies-api';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import ReviewsItem from '../ReviewsItem/ReviewsItem';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');
  const [pageNumber, setPageNumber] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    // if (!searchQuery) return; //отменяем первый рендер или рендер пустой строки

    setStatus('pending');

    fetchMovieReviews(movieId, pageNumber)
      .then(
        data => {
          console.log(data);
          if (data.results.length === 0) {
            setStatus('rejected');
            setErrorMessage('There are no reviews...');
          } else {
            const totalPages = Math.ceil(data.total_pages / 12);
            const usableReviewsKeysArr = data.results.map(
              ({ id, author, content }) => {
                return {
                  id,
                  author,
                  content,
                };
              },
            );

            setReviews(prevReviews => [
              ...prevReviews,
              ...usableReviewsKeysArr,
            ]);
            setStatus('resolved');
            setShowLoadMoreBtn(totalPages === pageNumber ? false : true);
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
  }, [movieId, pageNumber]);

  //   const onSearch = query => {
  //     setSearchQuery(query);
  //     setReviews([]);
  //     setPageNumber(1);
  //   };

  const onLoadMore = () => {
    setPageNumber(pageNumber + 1);
    setStatus('pending');
  };

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
          <ul className={s.Reviews}>
            {reviews.map(({ id, author, content }, index) => (
              <ReviewsItem key={index} author={author} content={content} />
            ))}
          </ul>
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

Reviews.propTypes = {
  //   moviesArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  // onOpenModal: PropTypes.func,
};
