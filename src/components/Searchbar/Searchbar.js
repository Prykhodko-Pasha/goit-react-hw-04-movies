import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default function Searchbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.currentTarget.value.trim());
  };

  const onSubmit = e => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={s.SearchForm__button}>
          <span className={s.SearchForm__button__label}>Search</span>
        </button>

        <input
          className={s.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
