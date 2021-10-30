import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
// import fetchImages from '../services/images-api';
import Container from './Container/Container';
import Navigation from './Navigation/Navigation';
import HomeView from './HomeView/HomeView';
import MoviesView from './MoviesView/MoviesView';
import MovieDetailsView from './MovieDetailsView/MovieDetailsView';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';
// import Modal from './Modal/Modal';

export default function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies" exact>
          <MoviesView />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsView />
        </Route>
      </Switch>
      <Route path="/movies/:movieId/cast">
        <Cast />
      </Route>
      <Route path="/movies/:movieId/reviews">
        <Reviews />
      </Route>
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
