import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Business, Chat } from "@mui/icons-material";
import { GridIcon, Collaborate__GridTypography, StyledBoxTitle, CollaborateTitle } from "./style";
import GroupIcon from "@mui/icons-material/Group";
import { useTranslation } from "react-i18next";
const Collaborate: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRtl = currentLanguage === 'ar';
  return (
    <Container sx={{ mb: "100px" }}>
      <StyledBoxTitle>
        <CollaborateTitle dir={isRtl ? 'rtl' : 'ltr'} variant="h2">{t("CollaborateTitle")}</CollaborateTitle>
      </StyledBoxTitle>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4} sx={{ mt: "20px" }}>
          <GridIcon>
            <GroupIcon fontSize="large" />
          </GridIcon>
          <Collaborate__GridTypography dir={isRtl ? 'rtl' : 'ltr'} variant="h6">{t("Client-Centric")}</Collaborate__GridTypography>
          <Typography>
            {t("Collaborate__GridTypography1")}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <GridIcon>
            <Business fontSize="large" />
          </GridIcon>
          <Collaborate__GridTypography dir={isRtl ? 'rtl' : 'ltr'} variant="h6">{t("Tailored_Solutions")}</Collaborate__GridTypography>
          <Typography >
            {t("Collaborate__GridTypography2")}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ mt: "20px" }}>
          <GridIcon>
            <Chat fontSize="large" />
          </GridIcon>
          <Collaborate__GridTypography dir={isRtl ? 'rtl' : 'ltr'} variant="h6">{t("Creative_Innovation")}</Collaborate__GridTypography>
          <Typography>
            {t("Collaborate__GridTypography3")}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Collaborate;
