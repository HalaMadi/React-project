import React from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import { StyledContainer, StyledTypography, StyledLink, StyledButton, StyledBox } from './style';
import { StyledImg } from '../home/components/projects/style';
import Testimonials from '../home/components/Testimonials/Testimonials';
import { Title } from '../home/components/expertise/style';
import pic1 from '../../assets/pic1.png';
import pic2 from '../../assets/pic2.png';
import pic3 from '../../assets/pic3.png';
import pic4 from '../../assets/pic4.png';
import pic5 from '../../assets/pic5.png';
import pic6 from '../../assets/pic6.png';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRtl = currentLanguage === 'ar';
    return (
    <StyledContainer>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={6}>
          <Title dir={isRtl ? 'rtl' : 'ltr'} variant="h3">{t("Project__Title")}</Title>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          container
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Typography>{t("Projects_Typography")} </Typography>
        </Grid>
        {/* Grid-1 */}
        <Grid item xs={12} sm={6} md={6}>
          <StyledLink to="/projects/tansto">
            <StyledImg component="img" src={pic1} />
          </StyledLink>
          <StyledTypography>Crtly</StyledTypography>
          <Typography>{t("Mobile_App")}</Typography>
        </Grid>
        {/* Grid-2 */}
        <Grid item xs={12} sm={6} md={6}>
          <StyledLink to="/projects/website">
            <StyledImg component="img" src={pic2} />
          </StyledLink>
          <StyledTypography>Tansto</StyledTypography>
          <Typography>{t("Web_Design")}</Typography>
        </Grid>
        {/* Grid-3 */}
        <Grid item xs={12} sm={6} md={6}>
          <StyledLink to="/tansto">
            <StyledImg component="img" src={pic3} />
          </StyledLink>
          <StyledTypography>Senta</StyledTypography>
          <Typography>{t("Another_Project")}</Typography>
        </Grid>
        {/* Grid-4 */}
        <Grid item xs={12} sm={6} md={6}>
          <StyledLink to="/tansto">
            <StyledImg component="img" src={pic4} />
          </StyledLink>
          <StyledTypography>Crint</StyledTypography>
          <Typography>{t("Mobile_App")}</Typography>
        </Grid>
        {/* Grid-5 */}
        <Grid item xs={12} sm={6} md={6}>
          <StyledLink to="/tansto">
            <StyledImg component="img" src={pic5} />
          </StyledLink>
          <StyledTypography>Spanty</StyledTypography>
          <Typography>{t("Branding")}</Typography>
        </Grid>
        {/* Grid-6 */}
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg component="img" src={pic6} />
          <StyledTypography>Spanty</StyledTypography>
          <Typography>{t("Website_Title1")}</Typography>
        </Grid>
      </Grid>
      <StyledBox>
        <StyledButton themeMode={theme.palette.mode}
        >{t("Load_More")}</StyledButton>
      </StyledBox>
      <Testimonials />
    </StyledContainer>
  );
};

export default Projects;

