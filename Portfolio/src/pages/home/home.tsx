import React from "react";
import Header from "../../components/header";
import Projects from "../../components/projects";
import {
  BoxDesign,
  StyledContainer,
  StyledHomeContainer,
  StyledTitle,
  StyledTypography,
  TestimonialsBox,
} from "./style";
import { Container, Grid, Typography } from "@mui/material";
import Expertise from "../../components/expertise";
const home: React.FC = () => {
  return (
    <>
      <StyledHomeContainer maxWidth="xl">
        <Header />
        <StyledContainer>
          <Projects />
        </StyledContainer>
        <Typography variant="h3">Expertise</Typography>
        <Expertise />
      </StyledHomeContainer>
      <BoxDesign>design for digital exper</BoxDesign>
      <Container>
        <TestimonialsBox>
          <StyledTitle variant="h5">Testimonials</StyledTitle>
          <Grid container>
            <Grid item xs={8} md={6}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit fugiat quo ducimus, dicta nulla nobis labore beatae at!
                In velit ullam ipsa quae veritatis voluptatibus! Cum excepturi
                ipsa commodi, aspernatur voluptas quam, sequi ducimus suscipit
                quos libero repellat dolorum exercitationem nulla, distinctio
                enim cupiditate sed culpa deserunt? Quod, odio accusamus, sequi
                esse incidunt cumque natus voluptate aliquid molestias, officia
                corporis.
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              md={6}
              container
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <div>
                <StyledTypography>Chirs Ellingoton</StyledTypography>
                <Typography>Product Lead.Gatha</Typography>
              </div>
            </Grid>
          </Grid>
        </TestimonialsBox>
      </Container>
    </>
  );
};

export default home;
