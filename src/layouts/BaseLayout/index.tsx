import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = () => {
  return (
    <Box
      sx={{
        flex: 1,
        height: '100%'
      }}
    >
      <h1>CONNEXION</h1>
    </Box>
  );
};


export default BaseLayout;
