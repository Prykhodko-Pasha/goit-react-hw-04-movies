import { lazy, Suspense } from 'react';
import {
  Link,
  NavLink,
  useRouteMatch,
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import Loader from '../Loader/Loader';
import GoBackButton from '../GoBackButton/GoBackButton';
import s from './MovieCard.module.css';
import PropTypes from 'prop-types';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieCard({ movie }) {
  const { url, path } = useRouteMatch();
  const location = useLocation();
  // console.log(location.state);
  const history = useHistory();
  const {
    poster_path,
    backdrop_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/original';
  const year = release_date.slice(0, 4);
  const rating = vote_average % 1 === 0 ? `${vote_average}.0` : vote_average;
  const genresNamesStr = genres.map(genre => genre.name).join(', ');

  function onGoBack() {
    history.push(location?.state?.from ?? '/goit-react-hw-04-movies/');
  }

  return (
    <>
      <div className={s.MovieCard}>
        <Link to={location?.state?.from ?? '/goit-react-hw-04-movies/'}>
          <GoBackButton onGoBack={onGoBack} />
        </Link>
        <div className={s.MovieCard__header}>
          <img
            alt={`${title}_poster`}
            className={s.MovieCard__img}
            src={`${POSTER_BASE_URL}${poster_path}`}
          />
          <div className={s.MovieCard__info}>
            <p className={s.MovieCard__name}>{title}</p>
            <p className={s.MovieCard__year}>{year}</p>
            <p className={s.MovieCard__genres}>{genresNamesStr}</p>
            <span className={s.MovieCard__rating}>{rating}</span>
          </div>
        </div>
        <div className={s.MovieCard__desc}>
          <p className={s.MovieCard__text}>{overview}</p>
        </div>
        <div className={s.MovieCard__additionalInfo}>
          <ul>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from },
              }}
              className={s.MovieCard__additionalInfo_item}
              activeClassName={s.MovieCard__additionalInfo_item_active}
            >
              Cast
            </NavLink>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from },
              }}
              className={s.MovieCard__additionalInfo_item}
              activeClassName={s.MovieCard__additionalInfo_item_active}
            >
              Reviews
            </NavLink>
          </ul>
        </div>
        <div
          className={s.blur_back}
          style={{ backgroundImage: `url(${POSTER_BASE_URL}${backdrop_path})` }}
        ></div>
      </div>

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  }),
};
