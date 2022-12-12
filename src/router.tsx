import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import Connexion from './components/auth/Connexion';
import Signup from './components/auth/Signup';
import AddSchool from './components/admin/AddSchool';
import { ADMIN_DASHBOARD_NAVIGATION } from './navigation_paths';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const routes: RouteObject[] = [
  {
    path: '',
    element: <Connexion />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: 'dashboard',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <h1>Hello - Acceuil</h1>
      },
      {
        path: 'mady',
        element: <h1>Hello - Mady</h1>
      },
    ]
  },
  {
    path: ADMIN_DASHBOARD_NAVIGATION,
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <h1>Hello - Super admin</h1>
      },
      {
        path: 'add-school',
        element: <AddSchool />
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
