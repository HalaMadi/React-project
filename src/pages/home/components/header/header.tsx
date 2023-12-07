import React from 'react';
import { Grid, Typography } from '@mui/material';
import {
  LineBreak,
  StyledBrief_T,
  StyledHomeTitle,
  StyledTypography,
} from './style.tsx';
import ScrollDownButton from '../scrollDown/ScrollDownButton.tsx';

const Header: React.FC = () => {
  return (
    < >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <StyledHomeTitle variant="h1" component="h2">
            Websites&
            <LineBreak /> Branding
          </StyledHomeTitle>
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
          <StyledTypography>Let's Talk</StyledTypography>
          <Typography variant="body1">hello@joey.co</Typography>
        </Grid>
        <Grid item xs={6}md={6} >
          <StyledBrief_T>
            Hello, I'm Joey, an online product designer focusing on brand
            identity, advertising, and no code instruments. Lorem ipsum dolor
            sit.
          </StyledBrief_T>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
