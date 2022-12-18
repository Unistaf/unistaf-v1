import { Route, Routes, useRoutes } from 'react-router-dom';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { Provider, useSelector } from 'react-redux';
import { store, persistor, iStore } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { adminRoutes, routes, superAdminRoutes } from 'src/router';
import { ICurrenUser } from './utils/interfaces';

function App() {
  const currentUser: ICurrenUser | any = useSelector((state: iStore) => state.user.currentUser);
  let content = null;

  if (currentUser?.user?.user_type === 'super_admin') {
    content = useRoutes(superAdminRoutes)
  }
  else if (currentUser?.user?.user_type === 'admin') {
    content = useRoutes(adminRoutes)
  }
  else if (currentUser?.user?.user_type === 'student') {
    // content = useRoutes()
  }
  else {
    content = useRoutes(routes)
  }

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
