import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />
  },
  {
    path: 'dashboard',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <h1>Hello - Acceuil</h1>
      },
    ]
  },
  {
    path: 'ecole',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <h1>Ecole</h1>
      },
    ]
  },
];

export default routes;
