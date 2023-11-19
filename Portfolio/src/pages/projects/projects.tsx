import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import { StyledContainer, StyledTypography } from "./style";
import { StyledImg } from "../home/components/projects/style";
import Testimonials from "../home/components/Testimonials";

const projects: React.FC = () => {
  return (
    <StyledContainer>
      <Grid container spacing={3}>
        <Grid xs={6} sm={6} md={6}>
          <Typography variant="h3">Projects</Typography>
        </Grid>
        <Grid
          item
          xs={6}
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
          <Link href="your_link_here" underline="none" target="_blank">
            <StyledImg component="img" src="src\public\pic1.PNG" />
          </Link>
          <StyledTypography>Crtly</StyledTypography>
          <Typography>Mobile App</Typography>
        </Grid>
        {/* Grid-2 */}
        <Grid item xs={12} sm={6} md={6}>
          <Link href="your_link_here" underline="none" target="_blank">
            <StyledImg component="img" src="src\public\pic2.PNG" />
          </Link>
          <StyledTypography>Tansto</StyledTypography>
          <Typography>Web Design</Typography>
        </Grid>
        {/* Grid-3 */}
        <Grid item xs={12} sm={6} md={6}>
          <Link href="your_link_here" underline="none" target="_blank">
            <StyledImg component="img" src="src\public\pic3.PNG" />
          </Link>
          <StyledTypography>Another Project</StyledTypography>
          <Typography>Another Type</Typography>
        </Grid>
        {/* Grid-4 */}
        <Grid item xs={12} sm={6} md={6}>
          <Link href="your_link_here" underline="none" target="_blank">
            <StyledImg component="img" src="src\public\pic4.PNG" />
          </Link>
          <StyledTypography>More Project</StyledTypography>
          <Typography>More Type</Typography>
        </Grid>
        {/* Grid-5 */}
        <Grid item xs={12} sm={6} md={6}>
          <Link href="your_link_here" underline="none" target="_blank">
            <StyledImg component="img" src="src\public\pic5.PNG" />
          </Link>
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
      <Testimonials />
    </StyledContainer>
  );
};

export default projects;

// add alt for the img
