import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import PlanetView from './PlanetView';
import ErrorIndicator from '../ErrorIndicator';
import ErrorBoundry from '../ErrorBoundry';
import './RandomPlanet.css';

import { withSwapiService } from '../HOCHelpers';

class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 3000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };

  constructor() {
    super();
    this.state = {
      planet: {},
      loading: true,
      error: false
    };
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false, error: false });
  };

  onError = () => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 19) + 2;
    this.props
      .getData(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const image = this.props.getImageUrl(planet.id);

    const hasData = !loading && !error;
    const loader = loading ? <Loader /> : null;
    const content = hasData ? 
      <PlanetView planet={planet} image={image} />
      : null;
    const erorMessage = error ? <ErrorIndicator /> : null;

    return (
      <div className='randomPlanet jumbotron rounded'>
        <ErrorBoundry>
          {loader}
          {content}
          {erorMessage}
        </ErrorBoundry>
      </div>
    );
  };
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImageUrl
  };
};

export default withSwapiService(mapMethodsToProps)(RandomPlanet);