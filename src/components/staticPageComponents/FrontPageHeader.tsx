import React from 'react';
import UnistafRoundedButton from '../reusable/UnistafRoundedButton';
import { Grid, Box, Typography } from '@mui/material';
import headerImg from '../../assets/img/llo.png';
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
        minHeight: '75vh',
        '@media (max-width: 961px)': {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerImg})`,
          backgroundSize: 'cover'
        }
      }}
    >
      <Grid
        item
        md={6}
        container
        spacing={2}
        direction="row"
        alignItems="center"
      >
        <Grid
          spacing={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start'
          }}
        >
          <Typography
            variant="h1"
            color="#333"
            sx={{
              pb: 3,
              fontSize: '3.5rem',
              '@media(max-width : 961px)': {
                color: '#fff'
              },
              '@media(max-width: 600px)': {
                fontSize: '2rem'
              }
            }}
          >
            La plateforme qui vous aide à trouver votre formation
          </Typography>
          <Box>
            <UnistafRoundedButton to="#test">
              Trouver mon école
            </UnistafRoundedButton>
            <UnistafRoundedButton to="#test" isOutlined={true}>
              Choisir un domaine
            </UnistafRoundedButton>
          </Box>
        </Grid>
      </Grid>
      <Grid item md={6} position="relative">
        <Box
          position="absolute"
          sx={{
            top: 0,
            right: '0',
            borderRadius: `94px 0 5% 12px`,
            backgroundImage: `url(${headerImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: '-50px',
            //maxWidth: '500px',
            width: '100%',
            height: '75vh',
            '@media (max-width: 961px)': {
              display: 'none'
            }
          }}
        />
      </Grid>
    </Grid>
  );
}

export default FrontPageHeader;
