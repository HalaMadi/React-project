import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import {
  LineBreak,
  StyledBrief_T,
  StyledTitle,
  StyledTypography,
} from "./style.tsx";
import ScrollDownButton from "../scrollDown/ScrollDownButton.tsx";

const Header: React.FC = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <StyledTitle  variant="h1" component="h2">
            Websites&
            <LineBreak /> Branding
          </StyledTitle>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          container
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <ScrollDownButton />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: "8px" }}>
        <Grid item xs={4} sm={6} md={6} lg={6}>
          <StyledTypography>Let's Talk</StyledTypography>
          <Typography>hello@joey.co</Typography>
        </Grid>
        <Grid item xs={8} sm={6} md={6} lg={6}>
          <StyledBrief_T>
            Hello, I'm Joey, an online product designer focusing on brand
            identity, advertising, and no code instruments.
          </StyledBrief_T>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
