import React from "react";
import Header from "./components/header";
import Projects from "./components/projects";
import {
  BoxDesign,
  StyledContainer,
  StyledHomeContainer,
} from "./style";
import { Typography } from "@mui/material";
import Expertise from "./components/expertise";
import Testimonials from "./components/Testimonials";
const home: React.FC = () => {
  return (
    <>
      <StyledHomeContainer >
        <Header />
        <StyledContainer>
          <Projects />
        </StyledContainer>
        <Typography variant="h3">Expertise</Typography>
        <Expertise />
      </StyledHomeContainer>
      <BoxDesign>design for digital exper</BoxDesign>
    <Testimonials/>
    </>
  );
};

export default home;
