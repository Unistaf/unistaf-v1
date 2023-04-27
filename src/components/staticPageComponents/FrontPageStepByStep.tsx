import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import courbeDebut from '../../assets/img/courbe-debut.svg';
import courbeFin from '../../assets/img/courbe-fin.svg';
import UnistafRoundedButton from '../reusable/UnistafRoundedButton';
import Section from './reussable/Section';

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
    <Section colors="#f5f5f580">
      <Grid
        sx={{
          pt: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h2" className="subtitle" textAlign="center">
          L'orientation pas à pas avec UNISTAF
        </Typography>
      </Grid>
      <Grid
        container
        rowSpacing={6}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          p: 5,
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <Grid
          item
          sm={4}
          sx={{
            position: 'absolute',
            top: 0,
            right: '18%',
            zIndex: 100,
            '@media (max-width: 960px)': {
              transform: 'scale(0.7)',
              right: '17%'
            },
            '@media (max-width: 600px)': {
              transform: 'rotate(90deg)',
              top: '60%',
              right: '-20%'
            },
            '@media (max-width: 400px)': {
              transform: 'rotate(90deg) scale(0.5)',
              right: '-30%'
            }
          }}
        >
          <img
            style={{
              width: '100%'
            }}
            src={courbeFin}
            alt="curve arrow"
          />
        </Grid>
        <Step />
        <Grid
          item
          sm={4}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '25%',
            zIndex: 2,
            '@media (max-width: 960px)': {
              transform: 'scale(0.7)',
              left: '17%'
            },
            '@media (max-width: 600px)': {
              transform: 'rotate(90deg)',
              bottom: '50%',
              left: '-15%'
            },
            '@media (max-width: 400px)': {
              transform: 'rotate(90deg) scale(0.5)',
              bottom: '55%',
              left: '-20%'
            }
          }}
        >
          <img
            src={courbeDebut}
            alt="curve arrow"
            style={{
              width: '100%'
            }}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <UnistafRoundedButton isOutlined={true}>
          Trouver un diplôme
        </UnistafRoundedButton>
      </Grid>
    </Section>
  );
}

export default FrontPageStepByStep;
