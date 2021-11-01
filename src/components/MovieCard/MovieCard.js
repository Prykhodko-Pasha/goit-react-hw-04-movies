import { lazy, Suspense } from 'react';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import {} from 'react-router-dom';
import Loader from '../Loader/Loader';

import s from './MovieCard.module.css';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieCard({ movie }) {
  const { url, path } = useRouteMatch();
  //   const params = useRouteMatch();
  //   console.log(params, '- params useRouteMatch');

  //   useEffect(() => {
  //     window.scrollTo({
  //       top: window.innerHeight / 2,
  //       behavior: 'smooth',
  //     });
  //   });

  const {
    // id,
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
  //   console.log(year);
  const genresNamesStr = genres.map(genre => genre.name).join(', ');

  return (
    <>
      <div className={s.MovieCard}>
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
              to={`${url}/cast`}
              className={s.MovieCard__additionalInfo_item}
              activeClassName={s.MovieCard__additionalInfo_item_active}
            >
              Cast
            </NavLink>
            <NavLink
              to={`${url}/reviews`}
              className={s.MovieCard__additionalInfo_item}
              activeClassName={s.MovieCard__additionalInfo_item_active}
            >
              Reviews
            </NavLink>
            {/* <li>Cast</li>
          <li>Reviews</li> */}
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

// MovieCard.propTypes = {
//   id: PropTypes.number.isRequired,
//   poster_path: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   release_date: PropTypes.string.isRequired,
// };
