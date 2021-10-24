import PropTypes from 'prop-types';
import s from './MoviesGalleryItem.module.css';

export default function MoviesGalleryItem({ id, poster_path, title }) {
  return (
    <>
      <img
        id={id}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
        className={s.MoviesGalleryItem__image}
        // data-src={title}
      />
      <div className={s.MoviesGalleryItem__descr}>
        <p className={s.MoviesGalleryItem__name}>{title}</p>

        {/* <ul className={s.MoviesGalleryItem__descr}>        
          {{#each genre_ids}}
            <li className='film-gallery__genre'> {{this}}</li>
          {{/each}}
        <li className='film-gallery__year'>
          &#124; {{release_date}}
        </li>    
        <li className='film-gallery__vote'>{{vote_average}}</li>
      </ul> */}
      </div>
    </>
  );
}

MoviesGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
