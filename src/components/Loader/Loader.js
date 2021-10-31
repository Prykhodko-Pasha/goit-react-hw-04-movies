import React from 'react';
// import Skeleton from 'react-loading-skeleton';
import s from './Loader.module.css';

export default function Loader() {
  return (
    // <div className={s.Loader}>
    <div className={s.Loader}>
      <div className={s.Loader__dot}></div>
      <div className={s.Loader__dot}></div>
      <div className={s.Loader__dot}></div>
      <div className={s.Loader__dot}></div>
    </div>
    // </div>
  );
}
