import { Box, Grid } from '@mui/material';
import React from 'react';
import Footer from 'src/components/staticPageComponents/Footer';
import NavBar from 'src/components/staticPageComponents/NavBar';
import CardCourses from 'src/components/staticPageComponents/reussable/CardCourses';

function CoursesFindPage() {
  return (
    <div>
      <NavBar />
      <Box component="main">
        <Grid container spacing={0.2}>
          <Grid item xs={12} sm={6} md={4}>
            <CardCourses />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardCourses />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardCourses />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardCourses />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardCourses />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}

export default CoursesFindPage;
