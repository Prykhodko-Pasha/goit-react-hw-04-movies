// import PropTypes from 'prop-types';
import s from './CastItem.module.css';

export default function CastItem({ name, profile_path, character }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const photoSrc = profile_path
    ? `${BASE_URL}${profile_path}`
    : 'http://placeimg.com/200/300';
  // console.log(year);

  return (
    <li className={s.CastItem}>
      <img alt={`${name}_photo`} className={s.CastItem__img} src={photoSrc} />
      <div className={s.CastItem__info}>
        <p className={s.CastItem__name}>{name}</p>
        {/* <p className={s.CastItem__year}>{year}</p> */}
        <p className={s.CastItem__character}>
          Character:
          <br />
          {character}
        </p>
        {/* <span className={s.CastItem__rating}>{rating}</span> */}
      </div>
      {/* <p className={s.CastItem__author}>{author}</p>
      <p className={s.CastItem__text}>{content}</p> */}
    </li>
  );
}

// CastItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   poster_path: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   release_date: PropTypes.string.isRequired,
// };
