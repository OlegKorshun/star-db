import React from 'react';
import { withRouter } from 'react-router-dom';

import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';
import { PlanetList, PlanetDetails } from '../StarWarsComponents';

const PlanetsPage = ({ match, history }) => {
  const { id } = match.params;
  return (
    <ErrorBoundry>
      <Row
        left={<PlanetList onItemSelected={(id) => history.push(id)} />}
        right={<PlanetDetails itemId={id} />} />
    </ErrorBoundry>
  );
};

export default withRouter(PlanetsPage);