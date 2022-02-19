import { HashRouter, Route, Switch } from 'react-router-dom';

import Navigation from 'app1/Navigation';
import React from 'react';
import localRoutes from './routes';
import remoteRoutes from 'app1/routes';

const routes = [...localRoutes, ...remoteRoutes];

const App = () => (
  <div></div>
);

export default App;
