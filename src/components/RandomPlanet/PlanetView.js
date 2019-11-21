import React from 'react';

import ErrorButton from '../ErrorButton';
import './RandomPlanet.css';

const PlanetView = ({ planet, image }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img className='planetImage'
        src={image}
        alt={`planet-${id}`} />
      <div>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Population:</span>
            <span>{population}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Rotation Period:</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Diameter:</span>
            <span>{diameter}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};

export default PlanetView;