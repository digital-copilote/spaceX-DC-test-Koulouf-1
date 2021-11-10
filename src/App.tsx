import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Routes from './router';

function App(): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Routes />
        </Switch>{' '}
      </Router>
    </QueryClientProvider>
  );
}

export default App;
