import React from 'react';

const AboutPage = React.lazy(() => import('./AboutPage'));

const NestedApp = () => (
<div>
  this is a nested app
</div>
)

const routes = [
  {
    path: '/about/:id',
    component: NestedApp,
    exact: true,
  },
  {
    path: '/about',
    component: AboutPage,
    exact: true,
  },
];

export default routes;
