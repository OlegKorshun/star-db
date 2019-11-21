import ItemList from '../ItemList';
import {
  withData,
  withChildFunction,
  withSwapiService,
  compose
} from '../HOCHelpers';

const renderLabelPeople = (item) => `${item.name} (${item.birthYear})`;
const renderLabelPlanet = (item) => `${item.name} (${item.diameter})`;
const renderLabelStarship = (item) => `${item.name} (${item.length})`;

const mapPeopleMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPeople };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPlanets };
};

const mapStashipMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllStarships };
};


const PeopleList = compose(
  withSwapiService(mapPeopleMethodsToProps),
  withData,
  withChildFunction(renderLabelPeople)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderLabelPlanet)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStashipMethodsToProps),
  withData,
  withChildFunction(renderLabelStarship)
)(ItemList);

export { PeopleList, PlanetList, StarshipList };