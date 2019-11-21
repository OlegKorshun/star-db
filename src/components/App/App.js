import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import ErrorBoundry from '../ErrorBoundry';
import ErrorIndicator from '../ErrorIndicator';
import AppHeader from '../AppHeader';
import RandomPlanet from '../RandomPlanet';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  SecretPage,
  LoginPage
} from '../Pages';
import { StarshipDetails } from '../StarWarsComponents';

import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';
import { SwapiServiceProvider } from '../SwapiServiceContext';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      swapiService: new SwapiService(),
      hasError: false,
      isLoggedIn: false
    };
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const newService =
        swapiService instanceof SwapiService
          ? DummySwapiService
          : SwapiService;
      return {
        swapiService: new newService()
      };
    });
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  render() {
    const { swapiService, hasError, isLoggedIn } = this.state;

    if (hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={swapiService}>
          <Router basename="/star-db">
            <div>
              <AppHeader onServiceChange={this.onServiceChange} />
              <RandomPlanet updateInterval={3000} />
              <Switch>
                <Route path='/'
                  exact
                  render={() => <h2>Welcome to StarDB</h2>} />

                <Route path='/people/' exact component={PeoplePage} />

                <Route path='/planets/:id?' component={PlanetsPage} />

                <Route path='/starships/' exact component={StarshipsPage} />
                
                <Route path='/starships/:id'
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />
                  }} />
                
                <Route path='/persons/'
                  render={() => <Redirect to='/people/' />} />

                <Route path='/login/'
                  exact
                  render={() => (
                      <LoginPage
                        onLogin={this.onLogin}
                        isLoggedIn={isLoggedIn} />
                  )} />

                <Route path='/secret/'
                  exact
                  render={() => (
                    <SecretPage isLoggedIn={isLoggedIn} />
                  )}/>

                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};