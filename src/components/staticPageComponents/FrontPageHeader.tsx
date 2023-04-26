import React from 'react';
import UnistafRoundedButton from '../reusable/UnistafRoundedButton';
import { Grid, Box, Typography } from '@mui/material';
import headerImg from '../../assets/img/header-img.jpg';
function FrontPageHeader() {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-between"
      //alignItems="center"
      sx={{
        backgroundColor: '#E3EEF7',
        py: 5,
        pl: 5,
        pr: 0,
        minHeight: '75vh'
      }}
    >
      <Grid
        item
        sm={6}
        container
        spacing={2}
        direction="row"
        alignItems="center"
      >
        <Grid spacing={3}>
          <Typography
            variant="h1"
            color="#333"
            sx={{ pb: 3, fontSize: '55px' }}
          >
            La plateforme qui vous aide à trouver votre formation
          </Typography>
          <UnistafRoundedButton to="#test">
            Trouver mon école
          </UnistafRoundedButton>
          <UnistafRoundedButton to="#test" isOutlined={true}>
            Choisir un domaine
          </UnistafRoundedButton>
        </Grid>
      </Grid>
      <Grid item sm={6} position="relative">
        <Box
          position="absolute"
          sx={{
            top: 0,
            right: '0',
            borderRadius: `94px 0 5% 12px`,
            backgroundImage: `url(${headerImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '75vh'
          }}
        />
      </Grid>
    </Grid>
  );
}

export default FrontPageHeader;
