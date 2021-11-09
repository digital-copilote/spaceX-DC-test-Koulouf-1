import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import Launches from './views/Launches/Launches';
import Launchpad from './views/Launchpad/Launchpad';
import Rockets from './views/Rockets/Rockets';

function Routes(): JSX.Element {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/launches" component={Launches} />
      <Route path="/launchpad" component={Launchpad} />
      <Route path="/rockets" component={Rockets} />
    </>
  );
}

export default Routes;
