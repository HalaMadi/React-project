import React from "react";
import { StyledBox, StyledTypography } from "./style";
import { Grid, Typography } from "@mui/material";

const expertise: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={6} sm={6} md={6} lg={6} >
        <StyledBox>
          <Typography variant="h5" gutterBottom>
            Branding
          </Typography>
          <StyledTypography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            impedit error, adipisci voluptate tempore distinctio incidunt veniam
            perferendis iste odit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut, fugiat!
          </StyledTypography>
        </StyledBox>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <StyledBox>
          <Typography variant="h5" gutterBottom>
            UI Design
          </Typography>
          <StyledTypography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            impedit error, adipisci voluptate tempore distinctio incidunt veniam
            perferendis iste odit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut, fugiat!
          </StyledTypography>
        </StyledBox>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} >
        <StyledBox>
          <Typography variant="h5" gutterBottom>
            UX Design
          </Typography>
          <StyledTypography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            impedit error, adipisci voluptate tempore distinctio incidunt veniam
            perferendis iste odit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut, fugiat!
          </StyledTypography>
        </StyledBox>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <StyledBox>
          <Typography variant="h5" gutterBottom>
            Development
          </Typography>
          <StyledTypography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            impedit error, adipisci voluptate tempore distinctio incidunt veniam
            perferendis iste odit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut, fugiat!
          </StyledTypography>
        </StyledBox>
      </Grid>
    </Grid>
  );
};

export default expertise;
