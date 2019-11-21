import React from 'react';

import Record from '../Record';
import ErrorBoundry from '../ErrorBoundry';
import ItemDetails from '../ItemDetails';

import { withSwapiService } from '../HOCHelpers';

const StarshipDetails = (props) => {
  return (
    <ErrorBoundry>
      <ItemDetails {...props}>
        <Record field='model' label='Model' />
        <Record field='starshipClass' label='Starship Class' />
        <Record field='manufacturer' label='Manufacturer' />
        <Record field='costInCredits' label='Cost In Credits' />
        <Record field='length' label='Length' />
        <Record field='crew' label='Crew' />
        <Record field='passengers' label='Passengers' />
        <Record field='maxAtmospheringSpeed' label='Max Atmosphering Speed' />
        <Record field='hyperdriveRating' label='Hyperdrive Rating' />
        <Record field='mglt' label='MGLT' />
        <Record field='cargoCapacity' label='Cargo Capacity' />
        <Record field='consumables' label='Consumables' />
        <Record field='created' label='Created' />
        <Record field='edited' label='Edited' />
      </ItemDetails>
    </ErrorBoundry>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImageUrl
  };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);