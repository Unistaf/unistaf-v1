import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import Connexion from './pages/auth/Connexion';
import Signup from './pages/auth/Signup';
import AddSchool from './components/admin/AddSchool';
import { ADMIN_ADD_FACULTY_NAVIGATION, ADMIN_DASHBOARD_NAVIGATION, LOGIN_NAVIGATION, SUPER_ADMIN_CREATE_SCHOOL_NAVIGATION, SUPER_ADMIN_DASHBOARD_NAVIGATION } from './navigation_paths';
import AddFaculty from './pages/school/AddFaculty';
import Home from './pages/superAdmin/Home';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

export const routes: RouteObject[] = [
  {
    path: LOGIN_NAVIGATION,
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

export const superAdminRoutes: RouteObject[] = [
  {
    path: LOGIN_NAVIGATION,
    element: <Connexion />
  },
  {
    path: SUPER_ADMIN_DASHBOARD_NAVIGATION,
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: SUPER_ADMIN_CREATE_SCHOOL_NAVIGATION,
        element: <AddSchool />
      },
    ]
  },
]

export const adminRoutes: RouteObject[] = [
  {
    path: LOGIN_NAVIGATION,
    element: <Connexion />
  },
  {
    path: ADMIN_DASHBOARD_NAVIGATION,
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <h1>Hello - Admin</h1>
      },
      {
        path: ADMIN_ADD_FACULTY_NAVIGATION,
        element: <AddFaculty />
      },
    ]
  },
]

