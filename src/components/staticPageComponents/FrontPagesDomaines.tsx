import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import UnistafRoundedButton from '../reusable/UnistafRoundedButton';
import Pagination from '../reusable/Pagination';
import {colors} from '../../utils/colors';

interface DomaineProps {
  icon: string;
  formation: string;
}

function DomaineBox(domaine: DomaineProps) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          border: `1px solid ${colors.secondary}`,
          borderRadius: `10px`,
          minHeight: `100px`,
          padding: `0 20px`,
          gap: `20px`
        }}
      >
        <CodeOutlinedIcon
          style={{
            color: `${colors.secondary}`,
            fontSize: '50px'
          }}
        />
        <Typography
          sx={{
            fontSize: '20px',
            color: `${colors.dark}`
          }}
        >
          Formation <br /> {domaine.formation}
        </Typography>
      </Box>
    </Grid>
  );
}

function FrontPagesDomaines() {
  const domaineDatas: DomaineProps[] = [
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    },
    {
      icon: 'CodeOutlinedIcon',
      formation: 'Audiovisuelle'
    }
  ];
  return (
    <Grid sx={{ p: 5, backgroundColor: `${colors.primary}` }}>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h2" className="subtitle">
          Tous les domaines de formation
        </Typography>
      </Grid>
      <Grid container spacing={3} sx={{ px: 5 }}>
        <Pagination
          datas={domaineDatas}
          itemComponent={DomaineBox}
          itemsPerPage={9}
        />
      </Grid>
    </Grid>
  );
}

export default FrontPagesDomaines;
