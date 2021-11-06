import React from 'react';
import { Switch } from 'react-router-dom';

import Routes from '../router';

function Layout(): JSX.Element {
  return (
    <div className="">
      <Switch>
        <Routes />
      </Switch>{' '}
    </div>
  );
}

export default Layout;
