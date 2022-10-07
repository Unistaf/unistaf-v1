import { Route, Routes, useRoutes } from 'react-router-dom';
import router from 'src/router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import SidebarLayout from './layouts/SidebarLayout';

function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
        {/* <Routes>
          <Route path='dashboard' element={<SidebarLayout />}>
            <Route path='aliment' element={<h1>Hello</h1>} ></Route>
          </Route>
        </Routes> */}
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
