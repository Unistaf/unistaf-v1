import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import courbeDebut from '../../assets/img/courbe-debut.svg';
import courbeFin from '../../assets/img/courbe-fin.svg';
import UnistafRoundedButton from '../reusable/UnistafRoundedButton';

function Step() {
  const stepsDatas = [
    {
      color: '#7DB8FA',
      title: 'Projet',
      text: "Définissez votre parcours et votre projet d'orientation."
    },
    {
      color: '#4B98EF',
      title: 'Analyse',
      text: 'Recherche des meilleures formations parmi les 70 000 disponibles.'
    },
    {
      color: '#6DC7F2',
      title: 'Conseils',
      text: "Bénéficiez de l'appel gratuit d'un conseiller d'orientation UNISTAF."
    }
  ];
  return (
    <>
      {stepsDatas.map(({ title, color, text }, index) => (
        <Grid item key={index + 1} sm={4}>
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: '30px',
              position: 'relative',
              minHeight: '220px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 3,
              textCenter: 'center',
              zIndex: `${index + 2 * index}`
            }}
          >
            <Box
              sx={{
                backgroundColor: `${color}`,
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography variant="h2" sx={{ color: '#fff' }}>
                {index + 1}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3">{title}</Typography>
              <Typography>{text}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </>
  );
}

function FrontPageStepByStep() {
  return (
    <Grid  sx = {{p:5}}>
      <Grid
        sx={{
          pt: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h2" className="subtitle">
          L'orientation pas à pas avec UNISTAF
        </Typography>
      </Grid>
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          p: 5,
          my: 3,
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <img
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            transform: 'translate(-100%, 30%)',
            zIndex: '100'
          }}
          src={courbeFin}
          alt=""
        />
        <Step />
        <img
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            transform: 'translate(130%, 15%)',
            zIndex: 2
          }}
          src={courbeDebut}
          alt=""
        />
      </Grid>
      <Grid container justifyContent="center">
        <UnistafRoundedButton isOutlined={true}>
          Trouver un diplôme
        </UnistafRoundedButton>
      </Grid>
    </Grid>
  );
}

export default FrontPageStepByStep;
