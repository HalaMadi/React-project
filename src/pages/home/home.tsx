import React from 'react';
import Header from './components/header';
import Projects from './components/projects';
import { BoxDesign, StyledContainer, StyledHomeContainer } from './style';
import Expertise from './components/expertise';
import Testimonials from './components/Testimonials';
import { useTheme } from '@mui/material';
const Home: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <StyledHomeContainer>
        <Header />
        <StyledContainer>
          <Projects />
        </StyledContainer>
        <Expertise />
      </StyledHomeContainer>
      <BoxDesign themeMode={theme.palette.mode}
        sx={{ textAlign: 'center', mt: 5 }}>
        design for digital exper
      </BoxDesign>
      <StyledHomeContainer>
        <Testimonials />
      </StyledHomeContainer>
    </>
  );
};

export default Home;
