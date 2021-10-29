// import PropTypes from 'prop-types';
import s from './ReviewsItem.module.css';

export default function ReviewsItem({ author, content }) {
  //   const year = release_date.slice(0, 4);
  // console.log(year);

  return (
    <li className={s.ReviewsItem}>
      <p className={s.ReviewsItem__author}>{author}</p>
      <p className={s.ReviewsItem__text}>{content}</p>
    </li>
  );
}

// ReviewsItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   poster_path: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   release_date: PropTypes.string.isRequired,
// };
