import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField
} from '@mui/material';
import React from 'react';
import NavBar from 'src/components/staticPageComponents/NavBar';
import CardSchool from 'src/components/staticPageComponents/reussable/CardSchool';
import { schoolDatas } from 'src/test_datas/datas';

function SchoolFindPage() {
  return (
    <div>
      <NavBar />
      <Box component="main" p={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} container spacing={3}>
            <Grid xs={12} sm={6} md={4} item>
              <TextField fullWidth label="Ecoles" />
            </Grid>
            <Grid xs={12} sm={6} md={4} item>
              <FormControl fullWidth>
                <InputLabel id="select-domaine-label">Domaines</InputLabel>
                <Select
                  labelId="select-domaine-label"
                  id="select-domaine"
                  input={<OutlinedInput label="Domaines" />}
                >
                  <MenuItem value="test">domaine1</MenuItem>
                  <MenuItem value="test">domaine2</MenuItem>
                  <MenuItem value="test">domaine3</MenuItem>
                  <MenuItem value="test">domaine4</MenuItem>
                  <MenuItem value="test">domaine5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} md={4} item>
              <FormControl fullWidth>
                <InputLabel id="select-domaine-label">Diplômes</InputLabel>
                <Select
                  labelId="select-domaine-label"
                  id="select-domaine"
                  input={<OutlinedInput label="Domaines" />}
                >
                  <MenuItem value="test">CAP</MenuItem>
                  <MenuItem value="test">DTS</MenuItem>
                  <MenuItem value="test">BTS</MenuItem>
                  <MenuItem value="test">Licence</MenuItem>
                  <MenuItem value="test">Master</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              sx={{ display: { xs: 'block', md: 'none' } }}
              item
            >
              hello
            </Grid>
          </Grid>
          <Grid sx={{ display: { xs: 'none', md: 'block' } }} item>
            hello
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {schoolDatas.map((elts, index) =>( 
            <Grid key={index} item xs={12} sm={6} md={4}>
              <CardSchool
                schoolLogo= {elts?.schoolLogo}
                accronyme= {elts?.accronyme}
                schoolName= {elts?.schoolName}
                schoolLocalisation= {elts?.schoolLocalisation}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default SchoolFindPage;
