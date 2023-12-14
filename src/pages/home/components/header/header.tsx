import React from 'react';
import { Grid, Typography } from '@mui/material';
import {
  LineBreak,
  StyledBrief_T,
  Home__Title,
  Home__Typography,
} from './style.tsx';
import ScrollDownButton from '../scrollDown/ScrollDownButton.tsx';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const {t}=useTranslation();
  return (
    < >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Home__Title component="h2">
            {t('Website_Title1')}
            <LineBreak />{t('Website_Title')}
          </Home__Title>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          container
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <ScrollDownButton />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Home__Typography>{t("Let's_Talk")}</Home__Typography>
          <Typography variant="body1">hello@joey.co</Typography>
        </Grid>
        <Grid item xs={6}md={6} >
          <StyledBrief_T>
            {t('Brief')}
          </StyledBrief_T>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
