import React from 'react';
import Header from './components/header';
import Projects from './components/projects';
import { BoxDesign, StyledContainer, StyledHomeContainer } from './style';
import Expertise from './components/expertise';
import Testimonials from './components/Testimonials';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
const Home: React.FC = () => {
  const theme = useTheme();
  const {t}=useTranslation();
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
        {t("digital_expertise")}
      </BoxDesign>
      <StyledHomeContainer>
        <Testimonials />
      </StyledHomeContainer>
    </>
  );
};

export default Home;
