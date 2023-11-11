import React from "react";
import Header from "../../components/header";
import Projects from "../../components/projects";
import { StyledContainer, StyledSubTitle } from "./style";
import { Box, Container, Grid, Typography } from "@mui/material";

const home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <StyledContainer>
          <Projects />
        </StyledContainer>
        <Typography variant="h3">Expertise</Typography>
        <Grid container justifyContent="space-between">
          <Grid item xs={6} md={6}>
            <Box sx={{ width: "350px" }}>
              <StyledSubTitle variant="h5">Branding</StyledSubTitle>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                non fugit facilis incidunt a quas nihil facere? Consequatur,
                autem aperiam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Doloribus harum quod repellendus veritatis ab
                voluptas!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box sx={{ width: "350px" }}>
              <StyledSubTitle variant="h5">Branding</StyledSubTitle>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                non fugit facilis incidunt a quas nihil facere? Consequatur,
                autem aperiam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Doloribus harum quod repellendus veritatis ab
                voluptas!
              </Typography>
            </Box>
          </Grid>{" "}
          <Grid item xs={6} md={6}>
            <Box sx={{ width: "350px" }}>
              <StyledSubTitle variant="h5">Branding</StyledSubTitle>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                non fugit facilis incidunt a quas nihil facere? Consequatur,
                autem aperiam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Doloribus harum quod repellendus veritatis ab
                voluptas! Lorem ipsum dolor sit.
              </Typography>
            </Box>
          </Grid>{" "}
          <Grid item xs={6} md={6}>
            <Box sx={{ width: "350px" }}>
              <StyledSubTitle variant="h5">Branding</StyledSubTitle>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                non fugit facilis incidunt a quas nihil facere? Consequatur,
                autem aperiam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Doloribus harum quod repellendus veritatis ab
                voluptas! Lorem ipsum dolor sit amet.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ bgcolor: "#000", color:'#fff',fontSize:'120px',mt:'70px' }}>design for digital exper</Box>
    </>
  );
};

export default home;
