import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './views/HomePage';

function Routes(): JSX.Element {
  return (
    <>
      <Route exact path="/" component={HomePage} />
    </>
  );
}

export default Routes;
