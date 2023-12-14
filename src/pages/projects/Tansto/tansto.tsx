import React from 'react';
import { LineBreak } from '../../home/components/header/style';
import { StyledContainer, StyledTypography, StyledCrafting } from '../style';
import pic from '../../../assets/pic2-2.png';
import pic1 from '../../../assets/pic1.png';
import pic2 from '../../../assets/pic2.png';
import pic5 from '../../../assets/pic5-5.png';
import pic4 from '../../../assets/pic4.png';
import {
  BoxImg,
  Challenge,
  StyledParagraph,
  StyledParagraph2,
  NextGrid,
  GridTypography,
  NextGrid__Img,
  Projects,
  Tansto__Breadcrumbs
} from './style';
import { Grid, Stack, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useTranslation } from 'react-i18next';


const Tansto: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <Stack>
        <Tansto__Breadcrumbs separator="›" aria-label="breadcrumb">
          mui
        </Tansto__Breadcrumbs>
        <Tansto__Breadcrumbs separator="-" aria-label="breadcrumb">
          mui
        </Tansto__Breadcrumbs>
        <Tansto__Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          mui
        </Tansto__Breadcrumbs>
      </Stack>
      <StyledTypography variant="h3">
        Tasto_impact--<LineBreak /> {t("Tasto_impact")}
      </StyledTypography>
      <BoxImg component="img" src={pic} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={6}>
          <Challenge variant="h6">{t("Challenges")}</Challenge>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          lg={6}
          container
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <StyledParagraph>
            {t("StyledParagraph")}
          </StyledParagraph>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <BoxImg component="img" src={pic1} />
          <StyledTypography>Tansto</StyledTypography>
          <Typography>{t("Web_Design")}</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <BoxImg component="img" src={pic2} />
          <StyledTypography>Tansto</StyledTypography>
          <Typography>{t("Web_Design")}</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Challenge>{t("Challenge")}</Challenge>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          container
          justifyContent="flex-end"
          alignItems="flex-end"
          gap={3}
        >
          <Typography sx={{ fontSize: '15px' }}>
            {t("Tansto_Typography1")}
          </Typography>
          <Typography sx={{ fontSize: '15px' }}>
            {t("Tansto_Typography2")}
          </Typography>
        </Grid>
        <BoxImg component="img" src={pic5} />
        <BoxImg component="img" src={pic} />
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={6}>
          <StyledCrafting variant="h5">
            {t("StyledCrafting")}
          </StyledCrafting>
        </Grid>
        <Grid item xs={12} md={12} lg={12} container>
          <StyledParagraph2>
            {t("Tansto_Typography1")}
          </StyledParagraph2>
        </Grid>
        <Grid item xs={12} md={12} lg={12} container>
          <StyledParagraph2>
            {t("Tansto_Typography2")}
          </StyledParagraph2>
        </Grid>
        <Grid item xs={12} md={12} lg={12} container>
          <StyledParagraph2>
            {t("StyledParagraph2")}
          </StyledParagraph2>
        </Grid>
        <Grid container>
          <Projects variant="h3" marginTop={10}>
            {t("Next_Projects")}
          </Projects>
          <Grid item display="flex" gap={6}>
            <NextGrid item xs={12} display="flex">
              <NextGrid__Img component="img" src={pic4} />
            </NextGrid>
            <Grid item xs={12} display="flex">
              <GridTypography>
                Crint <LineBreak /> branding <ArrowOutwardIcon />
              </GridTypography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Tansto;
