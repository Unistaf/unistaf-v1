import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FrontPageHeader from 'src/components/staticPageComponents/FrontPageHeader';
import FrontPageStepByStep from 'src/components/staticPageComponents/FrontPageStepByStep';
import FrontPagesDomaines from 'src/components/staticPageComponents/FrontPagesDomaines';
import FrontPageActualities from 'src/components/staticPageComponents/FrontPageActualities';
import NavBar from '../../components/staticPageComponents/NavBar';
import Section from 'src/components/staticPageComponents/reussable/Section';
import { colors } from 'src/utils/colors';
import Subtitle from 'src/components/staticPageComponents/reussable/Subtitle';
import {
  actualityDatas,
  domaineDatas,
  testimonialDatas
} from 'src/test_datas/datas';
import Testimonial from 'src/components/staticPageComponents/Testimonial';
import CardActuality from 'src/components/staticPageComponents/reussable/CardActuality';
import UnistafRoundedButton from 'src/components/reusable/UnistafRoundedButton';
import Pagination from 'src/components/reusable/Pagination';
import { DomaineBox } from 'src/components/staticPageComponents/DomaineBox';
import Footer from 'src/components/staticPageComponents/Footer';

const StaticHomePage = () => {
  console.log(testimonialDatas);

  return (
    <div>
      <NavBar />
      <Box component="main">
        <FrontPageHeader />
        <FrontPageStepByStep />
        <Section colors={colors.grayWhite}>
          <Subtitle>Tous les domaines de formation</Subtitle>
          <Grid container spacing={3} sx={{ px: 5 }}>
            <Pagination
              datas={domaineDatas}
              itemComponent={DomaineBox}
              itemsPerPage={9}
            />
          </Grid>
        </Section>
        {/* <Section colors={colors.primary}>
          <Subtitle>Actualités</Subtitle>
          <Grid sx={{ p: 5, position: 'relative' }}>
            <Grid container spacing={2}>
              {actualityDatas.map(
                (
                  {
                    cover,
                    userProfil,
                    userName,
                    actuality_date,
                    actuality_id,
                    actuality_title,
                    resume
                  },
                  index
                ) => (
                  <Grid key={index} item xs={12} md={4}>
                    <CardActuality
                      cover={cover}
                      userProfil={userProfil}
                      userName={userName}
                      actuality_date={actuality_date}
                      resume={resume}
                      actuality_id={actuality_id}
                      actuality_title={actuality_title}
                    />
                  </Grid>
                )
              )}
            </Grid>
            <Grid
              sx={{
                marginTop: '210px',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <UnistafRoundedButton isOutlined={true}>
                Voir toutes les actualitées
              </UnistafRoundedButton>
            </Grid>
          </Grid>
        </Section> */}
        <Section colors={colors.blueLight}>
          <Subtitle>Temoignages</Subtitle>
          <Grid container spacing={3} sx={{ px: 5 }}>
            {testimonialDatas.map(
              (
                {
                  testimonial,
                  testimonialFonction,
                  testimonialFullName,
                  testimonialProfile,
                  testimonialRole
                },
                index
              ) => {
                return (
                  <Grid item xs={12} md={6} key={index}>
                    <Testimonial
                      testimonial={testimonial}
                      testimonialFonction={testimonialFonction}
                      testimonialFullName={testimonialFullName}
                      testimonialProfile={testimonialProfile}
                      testimonialRole={testimonialRole}
                    />
                  </Grid>
                );
              }
            )}
          </Grid>
        </Section>
      </Box>
      <Footer />
    </div>
  );
};

export default StaticHomePage;
