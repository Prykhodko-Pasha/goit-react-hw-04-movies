import React from 'react';
import PropTypes from 'prop-types';
import s from './GoBackButton.module.css';

export default function GoBackButton({ onGoBack }) {
  return (
    <button type="button" className={s.GoBackButton} onClick={onGoBack}>
      &#8592; Go back
    </button>
  );
}

GoBackButton.propTypes = {
  onGoBack: PropTypes.func.isRequired,
};
