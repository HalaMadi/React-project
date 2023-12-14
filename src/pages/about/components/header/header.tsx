import { Container, Grid } from '@mui/material';
import React from 'react';
import Person from '../../../../public/person.png';
import { About__HeaderTitle, About__Typography, About__StyledButton, About__PersonImg } from './style';
import { LineBreak } from '../../../home/components/header/style';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Grid container alignItems="center" justifyContent="center" >
        <Grid item xs={6} md={6} lg={6}>
          <About__HeaderTitle>
            <span style={{ verticalAlign: 'middle' }}>
              {t("Hey,")}
              <LineBreak />
              {t("I'm_Joey")}
            </span>
          </About__HeaderTitle>
        </Grid>
        <Grid item xs={6} md={6} lg={6} container >
          <About__PersonImg component="img" alt="Logo" src={Person} />
          <About__StyledButton>
            hello@joey.co <ArrowOutwardIcon sx={{ fontSize: '10px' }} />
          </About__StyledButton>
        </Grid>
        <Grid item xs={12} lg={12}>
          <About__Typography variant="body1">
            {t("About__Typography1")}
          </About__Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
          <About__Typography variant="body1">
            {t("About__Typography2")}
          </About__Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
          <About__Typography variant="body1">
            {t("About__Typography3")}
          </About__Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
