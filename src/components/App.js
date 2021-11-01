import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './Container/Container';
import Navigation from './Navigation/Navigation';
import Loader from './Loader/Loader';

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
const NotFoundPage = lazy(() =>
  import(
    './NotFoundPage/NotFoundPage' /* webpackChunkName: 'not-found-page' */
  ),
);

export default function App() {
  // const { url, path } = useRouteMatch();

  // const BASE_URL = 'goit-react-hw-04-movies';

  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          {/* <Route path={`/${BASE_URL}/`} exact> */}
          <Route path={'/'} exact>
            <HomePage />
          </Route>
          {/* <Route path={`/${BASE_URL}/movies`} exact> */}
          <Route path={'/movies'} exact>
            <MoviesPage />
          </Route>
          {/* <Route path={`/${BASE_URL}/movies/:movieId`}> */}
          <Route path={'/movies/:movieId'}>
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
