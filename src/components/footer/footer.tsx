// Footer.jsx
import { Container, Grid, Typography, useTheme } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import React from 'react';
import {
  CenteredBox,
  StyledFooter__Button,
  StyledFooter__Title,
  StyledLink
} from './style';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const theme = useTheme();
const {t}=useTranslation();
  return (
    <>
      <CenteredBox>
        <StyledFooter__Title>{t("Let's_Talk")}</StyledFooter__Title>
        <StyledFooter__Button themeMode={theme.palette.mode}>
          hello@joey.co <ArrowOutwardIcon />
        </StyledFooter__Button>
      </CenteredBox>
      <Container>
        <Grid container justifyContent={'space-between'}>
          <Grid item xs={6} md={6}>
            <Typography variant="body2">
              {new Date().getFullYear()}. © Made by Djectstudio
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} container justifyContent="flex-end" gap={3}>
            <StyledLink href="#">Dribble</StyledLink>
            <StyledLink href="#">Instagram</StyledLink>
            <StyledLink href="#">LinkedIn</StyledLink>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
