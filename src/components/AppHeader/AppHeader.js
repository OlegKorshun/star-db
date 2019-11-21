import React from 'react';
import { Link } from 'react-router-dom';

import './AppHeader.css';

const AppHeader = ({ onServiceChange }) => {
  return (
    <section className='appHeader d-flex'>
      <h3>
        <Link to='/'>StarDB</Link>
      </h3>
      <ul className='d-flex'>
        <li>
          <Link to='/people/'>People</Link>
        </li>
        <li>
          <Link to='/planets/'>Planets</Link>
        </li>
        <li>
          <Link to='/starships/'>Starships</Link>
        </li>
        <li>
          <Link to='/login/'>Login</Link>
        </li>
        <li>
          <Link to='/secret/'>Secret</Link>
        </li>
      </ul>
      <button className='btn btn-primary btn-sm'
        onClick={onServiceChange}>
        Change Service
      </button>
    </section>
  );
};

export default AppHeader;