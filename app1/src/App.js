import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import React from 'react';
import localRoutes from './routes';
import remoteRoutes from 'app2/routes';

const routes = [...localRoutes, ...remoteRoutes];

const App = () => (
  <BrowserRouter>
    <div>
      <h1>App 1</h1>
      <Navigation />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </React.Suspense>
    </div>
  </BrowserRouter>
);

export default App;
