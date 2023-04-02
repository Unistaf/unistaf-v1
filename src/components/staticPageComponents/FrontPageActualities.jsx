import { Grid, Typography } from '@mui/material';
import React from 'react';
function FrontPageActualities() {
  return (
    <Grid sx={{ p: 5 }}>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h2" className="subtitle">
          Actualités
        </Typography>
      </Grid>
    </Grid>
  );
}

export default FrontPageActualities;
