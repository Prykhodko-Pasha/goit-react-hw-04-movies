import { Link } from 'react-router-dom';
// import Loader from '../Loader/Loader';
import GoBackButton from '../GoBackButton/GoBackButton';

import s from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <>
      <div className={s.NotFoundPage}>
        <h1>404</h1>
        <p>This page doesn't exist</p>
        <Link
          to={'/goit-react-hw-04-movies/movies/603'}
          className={s.goToMatrix}
        >
          Enter the Matrix
        </Link>
        <Link to={'/goit-react-hw-04-movies/'} className={s.goToList}>
          <GoBackButton />
        </Link>

        <div
          className={s.blur_back}
          style={{
            backgroundImage: `url(https://img1.goodfon.com/wallpaper/nbig/e/13/matrica-matrix-morfeus.jpg)`,
          }}
        ></div>
      </div>
    </>
  );
}

// MovieCard.propTypes = {
//   id: PropTypes.number.isRequired,
//   poster_path: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   release_date: PropTypes.string.isRequired,
// };
