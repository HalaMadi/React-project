import { Container, Grid, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import React from "react";
import {
  CenteredBox,
  StyledFooter__Button,
  StyledFooter__Title,
  StyledLink,
} from "./style";

const footer: React.FC = () => {
  return (
    <>
      <CenteredBox>
        <StyledFooter__Title>Let's talke</StyledFooter__Title>
        <StyledFooter__Button>
          hello@joey.co <ArrowOutwardIcon />
        </StyledFooter__Button>
      </CenteredBox>
      <Container>
        <Grid container justifyContent={"space-between"}>
          <Grid item xs={6} md={6}>
            <Typography variant="body2">
              {new Date().getFullYear()}. © Made by Djectstudio
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            container
            justifyContent="flex-end"
 gap={3}
          >
            <StyledLink href="#">Dribble</StyledLink>
            <StyledLink href="#">Instagram</StyledLink>
            <StyledLink href="#">LinkedIn</StyledLink>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default footer;
