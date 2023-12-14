import { Grid, Typography } from "@mui/material";
import React from "react";
import { LineBreak } from "../../../home/components/header/style";
import {
  DesignContainer,
  Design__Title,
  Design__Typography,
  StyledDivider,
  Design__RightGrid,
  ProcessTypography
} from "./style";
import { useTranslation } from "react-i18next";

const Design: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRtl = currentLanguage === 'ar';
    return (
    <DesignContainer>
        <Design__Title dir={isRtl ? 'rtl' : 'ltr'}  variant="h3">{t("Design_Process")}</Design__Title>
      <Grid container spacing={3} gap={5}>
        <Grid item xs={12}>
            <Design__Typography dir={isRtl ? 'rtl' : 'ltr'}>
            {t("01-")}
            <LineBreak />
            {t("Discovery")}
          </Design__Typography>
          <ProcessTypography variant="body1" >
            {t("ProcessTypography1")}
          </ProcessTypography>
        </Grid>
        <Design__RightGrid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Design__RightGrid
            container
            spacing={3}
            sx={{ width: "50%" }}
          >
            <Grid item xs={12}>
              <StyledDivider />
                <Design__Typography dir={isRtl ? 'rtl' : 'ltr'}>
                {t("02-")}
                <LineBreak />
                {t("Strategy")}
              </Design__Typography>
              <Typography variant="body1">
                {t("ProcessTypography2")}
              </Typography>
            </Grid>
          </Design__RightGrid>
        </Design__RightGrid>
        <Grid item xs={12}>
          <StyledDivider />
            <Design__Typography dir={isRtl ? 'rtl' : 'ltr'}>
            {t("03-")}
            <LineBreak />
            {t("Design")}
          </Design__Typography>
          <ProcessTypography variant="body1">
            {t("ProcessTypography3")}
          </ProcessTypography>
        </Grid>
        <Design__RightGrid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Design__RightGrid
            container
            spacing={3}
            sx={{ width: "50%" }}
          >
            <Grid item xs={12}>
              <StyledDivider />
                <Design__Typography dir={isRtl ? 'rtl' : 'ltr'}>
                {t("04-")}
                <LineBreak />
                {t("Implementation")}
              </Design__Typography>
              <Typography variant="body1">
                {t("ProcessTypography3")}
              </Typography>
            </Grid>
          </Design__RightGrid>
        </Design__RightGrid>
      </Grid>
    </DesignContainer>
  );
};

export default Design;
