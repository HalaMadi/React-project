import { Grid } from '@mui/material';
import React from 'react';
import {
  Testimonials__Box,
  Testimonials__Title,
  Testimonials__Typography,
  Testimonials__Brife
} from './style';
import { useTranslation } from 'react-i18next';

const Testimonials: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRtl = currentLanguage === 'ar'; return (
    <>
      <Testimonials__Box>
        <Testimonials__Title dir={isRtl ? 'rtl' : 'ltr'} variant="h3">{t("Testimonials__Title")}</Testimonials__Title>
        <Grid container>
          <Grid item xs={12} md={6} lg={8}>
            <Testimonials__Brife>
              {t('Testimonials__Brife')}
            </Testimonials__Brife>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            container
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <div>
              <Testimonials__Typography>{t("Chirs_Ellingoton")} </Testimonials__Typography>
              <Testimonials__Typography>{t("Product_Lead.Gatha")}</Testimonials__Typography>
            </div>
          </Grid>
        </Grid>
      </Testimonials__Box>
    </>
  );
};

export default Testimonials;
