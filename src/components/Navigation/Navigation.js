import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  const BASE_URL = 'goit-react-hw-04-movies';
  return (
    <nav className={s.nav}>
      <NavLink
        to={`/${BASE_URL}/`}
        exact
        className={s.nav__link}
        activeClassName={s.nav__link_active}
      >
        Home
      </NavLink>

      <NavLink
        to={`/${BASE_URL}/movies`}
        className={s.nav__link}
        activeClassName={s.nav__link_active}
      >
        Movies
      </NavLink>
    </nav>
  );
}
