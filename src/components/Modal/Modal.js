import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  });

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={s.Overlay} onClick={onClickBackdrop}>
      <div className={s.Modal}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
