import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import fetchImages from '../services/images-api';
import Container from './Container/Container';
import Navigation from './Navigation/Navigation';
import Loader from './Loader/Loader';
// import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
// import Reviews from './Reviews/Reviews';
// import Cast from './Cast/Cast';
// import HomePage from './HomePage/HomePage';
const HomePage = lazy(() =>
  import('./HomePage/HomePage' /* webpackChunkName: 'home-page' */),
);
const MoviesPage = lazy(() =>
  import('./MoviesPage/MoviesPage' /* webpackChunkName: 'movies-page' */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: 'movie-details-page' */
  ),
);
// const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: 'cast' */));
// const Reviews = lazy(() =>
//   import('./Reviews/Reviews' /* webpackChunkName: 'reviews' */),
// );
// import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';
// import Modal from './Modal/Modal';

export default function App() {
  const BASE_URL = 'goit-react-hw-04-movies';

  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={`/${BASE_URL}/`} exact>
            <HomePage />
          </Route>
          <Route path={`/${BASE_URL}/movies`} exact>
            <MoviesPage />
          </Route>
          <Route path={`/${BASE_URL}/movies/:movieId`}>
            <MovieDetailsPage />
          </Route>
        </Switch>
        {/* <Route path={`/${BASE_URL}/movies/:movieId/cast`}>
          <Cast />
        </Route>
        <Route path={`/${BASE_URL}/movies/:movieId/reviews`}>
          <Reviews />
        </Route> */}
      </Suspense>
      {/* <Reviews onSearch={onSearch} />
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
      )} */}
    </Container>
  );
}
