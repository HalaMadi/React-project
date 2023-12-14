import React from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Project__Title,
  Project__Button,
  StyledImg,
  Project__Typography,
  Project__SubTitle
} from './style';
import { useNavigate } from 'react-router-dom';
import pic1 from '../../../../assets/pic1.png';
import pic2 from '../../../../assets/pic2.png';
import pic3 from '../../../../assets/pic3.png';
import pic4 from '../../../../assets/pic4.png';
import { useTranslation } from 'react-i18next';


const Projects: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleMoreButtonClick = () => {
    navigate('/projects');
  };
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRtl = currentLanguage === 'ar';
  return (
    <>
      <Project__Title
        variant="h3"
        dir={isRtl ? 'rtl' : 'ltr'}>
        {t('Project__Title')}
      </Project__Title>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Project__SubTitle
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {t('Project__SubTitle')}
          </Project__SubTitle>
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
          <Project__Button
            dir={isRtl ? 'rtl' : 'ltr'}
            onClick={handleMoreButtonClick}
            themeMode={theme.palette.mode}>
            {t('Project__Button')} <ArrowForwardIcon />
          </Project__Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg component="img" src={pic1} />
          <Project__Typography>Crtly</Project__Typography>
          <Typography >{t('Mobile_App')}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg component="img" src={pic2} />
          <Project__Typography>Tansto</Project__Typography>
          <Typography>{t('Web_Design')}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg component="img" src={pic3} />
          <Project__Typography>senta</Project__Typography>
          <Typography>{t('Another_Project')}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg component="img" src={pic4} />
          <Project__Typography>Crint</Project__Typography>
          <Typography>{t('Mobile_App')}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
