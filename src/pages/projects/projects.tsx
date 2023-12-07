import React from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import { StyledContainer, StyledTypography, StyledLink, StyledButton, StyledBox } from './style';
import { StyledImg } from '../home/components/projects/style';
import Testimonials from '../home/components/Testimonials/Testimonials';
import { Title } from '../home/components/expertise/style';

const projects: React.FC = () => {
  const theme = useTheme();
  return (
    <StyledContainer>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={6}>
          <Title variant="h3">Projects</Title>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          container
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus praesentium eaque voluptate ducimus totam sapiente.
        </Grid>
        {/* Grid-1 */}
        <Grid item xs={12} sm={6} md={6}>
          <StyledLink to="/projects/tansto">
            <StyledImg component="img" src="src\public\pic1.PNG" />
          </StyledLink>
          <StyledTypography>Crtly</StyledTypography>
          <Typography>Mobile App</Typography>
        </Grid>
        {/* Grid-2 */}
        <Grid item xs={12} sm={6} md={6}>
          <StyledLink to="/projects/website">
            <StyledImg component="img" src="src\public\pic2.PNG" />
          </StyledLink>
          <StyledTypography>Tansto</StyledTypography>
          <Typography>Web Design</Typography>
        </Grid>
        {/* Grid-3 */}
        <Grid item xs={12} sm={6} md={6}>
          <StyledLink to="/tansto">
            <StyledImg component="img" src="src\public\pic3.PNG" />
          </StyledLink>
          <StyledTypography>Another Project</StyledTypography>
          <Typography>Another Type</Typography>
        </Grid>
        {/* Grid-4 */}
        <Grid item xs={12} sm={6} md={6}>
          <StyledLink to="/tansto">
            <StyledImg component="img" src="src\public\pic4.PNG" />
          </StyledLink>
          <StyledTypography>More Project</StyledTypography>
          <Typography>More Type</Typography>
        </Grid>
        {/* Grid-5 */}
        <Grid item xs={12} sm={6} md={6}>
          <StyledLink to="/tansto">
            <StyledImg component="img" src="src\public\pic5.PNG" />
          </StyledLink>
          <StyledTypography>More Project</StyledTypography>
          <Typography>More Type</Typography>
        </Grid>
        {/* Grid-6 */}
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg component="img" src="src\public\pic6.PNG" />
          <StyledTypography>More Project</StyledTypography>
          <Typography>More Type</Typography>
        </Grid>
      </Grid>
      <StyledBox>
        <StyledButton themeMode={theme.palette.mode}
        >Load More</StyledButton>
      </StyledBox>
      <Testimonials />
    </StyledContainer>
  );
};

export default projects;

