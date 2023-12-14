import React from "react";
import { Expertise__StyledBox, SubTitle, Title } from './style';
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Expertise: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRtl = currentLanguage === 'ar'; 
  return (
    < >
      <Title dir={isRtl ? 'rtl' : 'ltr'} variant="h3">{t('Expertise')}</Title>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Expertise__StyledBox>
            <SubTitle dir={isRtl ? 'rtl' : 'ltr'} gutterBottom>{t("Branding")}</SubTitle>
            <Typography>
              {t("Expertise_Branding")}
            </Typography>
          </Expertise__StyledBox>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Expertise__StyledBox>
            <SubTitle dir={isRtl ? 'rtl' : 'ltr'} gutterBottom>{t("UIDesign")}</SubTitle>
            <Typography>
              {t("Expertise_UIDesign")}
            </Typography>
          </Expertise__StyledBox>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Expertise__StyledBox>
            <SubTitle dir={isRtl ? 'rtl' : 'ltr'} gutterBottom>{t("UxDesign")}</SubTitle>
            <Typography>
              {t("Expertise_UXDesign")}
            </Typography>
          </Expertise__StyledBox>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Expertise__StyledBox>
            <SubTitle dir={isRtl ? 'rtl' : 'ltr'} gutterBottom>{t("Development")}</SubTitle>
            <Typography>
              {t("Expertise_Development")}
            </Typography>
          </Expertise__StyledBox>
        </Grid>
      </Grid>
    </>
  );
};

export default Expertise;
