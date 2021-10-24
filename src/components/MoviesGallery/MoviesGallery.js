import PropTypes from 'prop-types';
import s from './MoviesGallery.module.css';
import MoviesGalleryItem from '../MoviesGalleryItem/MoviesGalleryItem';

export default function MoviesGallery({ moviesArr }) {
  return (
    // <ul className={s.MoviesGallery} onClick={e => onOpenModal(e.target)}>
    <ul className={s.MoviesGallery}>
      {moviesArr.map(({ id, poster_path, title }, index) => (
        <li key={index} className={s.MoviesGalleryItem}>
          <MoviesGalleryItem id={id} poster_path={poster_path} title={title} />
        </li>
      ))}
    </ul>
  );
}

MoviesGallery.propTypes = {
  moviesArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  // onOpenModal: PropTypes.func,
};
