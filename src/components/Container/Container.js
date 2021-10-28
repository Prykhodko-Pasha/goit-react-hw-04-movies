import PropTypes from 'prop-types';
import s from './Container.module.css';

export default function Container({ children }) {
  return (
    <div className={s.Container}>
      {/* <h2 className={s.section__title}>{title}</h2> */}
      {children}
    </div>
  );
}

Container.propTypes = {
  //   title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
