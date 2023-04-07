import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import Connexion from './pages/auth/Connexion';
import Signup from './pages/auth/Signup';
import AddSchool from './components/admin/AddSchool';
import { ADMIN_FACULTIES_NAVIGATION, ADMIN_DASHBOARD_NAVIGATION, LOGIN_NAVIGATION, SUPER_ADMIN_CREATE_SCHOOL_NAVIGATION, SUPER_ADMIN_DASHBOARD_NAVIGATION, ADMIN_SCHOOL_NAVIGATION, ADMIN_DIPLOMES_NAVIGATION, ADMIN_ADD_DIPLOMES_NAVIGATION, STATIC_HOME_PAGE, ADMIN_DIPLOME_DETAILS_NAVIGATION, ADMIN_DIPLOME_EDIT_NAVIGATION } from './navigation_paths';
import AddFaculty from './pages/school/AddFaculty';
import Home from './pages/superAdmin/Home';
import MonEcole from './pages/school/components/MonEcole';
import Falculties from './pages/school/Falculties';
import DiplomePage from './pages/diplomes/DiplomePage';
import AjouterDiplome from './pages/diplomes/AjouterDiplome';
import StaticHomePage from './pages/staticHomePage/StaticHomePage';
import NotFoundPage from './components/NotFoundPage';
import DetailsDiplomePage from './pages/diplomes/DetailsDiplomePage';
import ModifierDiplome from './pages/diplomes/ModifierDiplome';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

export const routes: RouteObject[] = [
  {
    path: STATIC_HOME_PAGE,
    element: <StaticHomePage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  },
  {
    path: LOGIN_NAVIGATION,
    element: <Connexion />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  // {
  //   path: 'dashboard',
  //   element: <SidebarLayout />,
  //   children: [
  //     {
  //       path: '',
  //       element: <h1>Hello - Acceuil</h1>
  //     },
  //     {
  //       path: 'mady',
  //       element: <h1>Hello - Mady</h1>
  //     },
  //   ]
  // },
  // {
  //   path: 'ecole',
  //   element: <SidebarLayout />,
  //   children: [
  //     {
  //       path: '',
  //       element: <h1>Ecole</h1>
  //     },
  //   ]
  // },
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
  // {
  //   path: '*',
  //   element: <NotFoundPage />
  // },
  {
    path: '',
    element: <Navigate to={ADMIN_DASHBOARD_NAVIGATION} />
  },
  {
    path: '',
    element: <SidebarLayout />,
    children: [
      {
        path: ADMIN_DASHBOARD_NAVIGATION,
        element: <h1>Hello - Admin</h1>,
      },
      {
        path: ADMIN_SCHOOL_NAVIGATION,
        element: <MonEcole />,
      },
      {
        path: ADMIN_FACULTIES_NAVIGATION,
        element: <Falculties />,
      },
      {
        path: ADMIN_DIPLOMES_NAVIGATION,
        element: <DiplomePage />
      },
      {
        path: ADMIN_ADD_DIPLOMES_NAVIGATION,
        element: <AjouterDiplome />
      },
      {
        path: ADMIN_DIPLOME_DETAILS_NAVIGATION + '/:id/' + 'details',
        element: <DetailsDiplomePage />
      },
      {
        path: ADMIN_DIPLOME_EDIT_NAVIGATION + "/:id/" + "edit",
        element: <ModifierDiplome />
      }
    ]
  },
  {
    path: ADMIN_FACULTIES_NAVIGATION,
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <h1>Je suis les faculte</h1>
      }
    ]
  }
]

