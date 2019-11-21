import React from 'react';
import Record from '../Record';
import ItemDetails from '../ItemDetails';

import { withSwapiService } from '../HOCHelpers';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='diameter' label='Diameter' />
      <Record field='rotationPeriod' label='Rotation Period' />
      <Record field='orbitalPeriod' label='Orbital Period' />
      <Record field='gravity' label='Gravity' />
      <Record field='population' label='Population' />
      <Record field='climate' label='Climate' />
      <Record field='terrain' label='Terrain' />
      <Record field='surfaceWater' label='Surface Water' />
      <Record field='created' label='Created' />
      <Record field='edited' label='Edited' />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImageUrl
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);