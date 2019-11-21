import React, { Component } from 'react';

import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';
import { PeopleList, PersonDetails } from '../StarWarsComponents';

export default class PeoplePage extends Component {
  constructor() {
    super();
    this.state = {
      selectedPerson: null
    };
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const personId = this.state.selectedPerson;

    return (
      <ErrorBoundry>
        <Row
          left={<PeopleList onItemSelected={this.onPersonSelected} />}
          right={<PersonDetails itemId={personId} />} />
      </ErrorBoundry>
    );
  };
};