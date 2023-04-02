import React from 'react';
import { Box, Typography } from '@mui/material';
import FrontPageHeader from 'src/components/staticPageComponents/FrontPageHeader';
import FrontPageStepByStep from 'src/components/staticPageComponents/FrontPageStepByStep';
import FrontPagesDomaines from 'src/components/staticPageComponents/FrontPagesDomaines';
import FrontPageActualities from 'src/components/staticPageComponents/FrontPageActualities';
import NavBar from '../../components/staticPageComponents/NavBar';

const StaticHomePage = () => {
  return (
    <div>
      <NavBar />
      <Box component="main">
        <FrontPageHeader />
        <FrontPageStepByStep />
        <FrontPagesDomaines />
        <FrontPageActualities />
      </Box>
    </div>
  );
};

export default StaticHomePage;
