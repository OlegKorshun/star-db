import React from 'react';

import ItemDetails from '../ItemDetails';
import Record from '../Record';

import { withSwapiService } from '../HOCHelpers';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='birthYear' label='Birth Year' />
      <Record field='eyeColor' label='Eye Color' />
      <Record field='gender' label='Gender' />
      <Record field='hairColor' label='Hair Color' />
      <Record field='height' label='Height' />
      <Record field='mass' label='Mass' />
      <Record field='skinColor' label='Skin Color' />
      <Record field='homeworld' label='Homeworld' />
      <Record field='created' label='Created' />
      <Record field='edited' label='Edited' />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImageUrl
  };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);