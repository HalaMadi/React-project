import React from "react";
import "./style.tsx";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  LineBreak,
  StyledBrief_T,
  StyledTitle,
  StyledTypography,
} from "./style.tsx";
import ScrollDownButton from "../scrollDown/ScrollDownButton.tsx";

const header: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={5}>
          <StyledTitle variant="h1" component="h2">
            Websites&
            <LineBreak /> Branding
          </StyledTitle>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="flex-end">
          <ScrollDownButton />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{mt:'8px'}}>
        <Grid item xs={6} md={7}>
          <StyledTypography>Let's Talk</StyledTypography>
          <Typography>hello@joey.co</Typography>
        </Grid>
        <Grid item xs={6} md={4} >
          <StyledBrief_T >
            Hello,I'm Joey, an online product designer focusing on brand
            identity,advertising,and no code instruments.
          </StyledBrief_T>
        </Grid>
      </Grid>
    </Container>
  );
};

export default header;
