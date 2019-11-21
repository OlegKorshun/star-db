import React from 'react';
import { withRouter } from 'react-router-dom';

import ErrorBoundry from '../ErrorBoundry';
import { StarshipList } from '../StarWarsComponents';

const StarshipsPage = ({ history }) => {
  return (
    <ErrorBoundry>
      <StarshipList onItemSelected={(id) => history.push(id)} />
    </ErrorBoundry>
  );
};

export default withRouter(StarshipsPage);