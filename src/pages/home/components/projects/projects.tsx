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
import pic1 from '../../../../public/pic1.png';
import pic2 from '../../../../public/pic2.png';
import pic3 from '../../../../public/pic3.png';
import pic4 from '../../../../public/pic4.png';


const Projects: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleMoreButtonClick = () => {
    navigate('/projects');
  };
  return (
    <>
      <Project__Title variant="h3">Projects</Project__Title>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Project__SubTitle>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            voluptatem mollitia illum. Facere dolor quas incidunt, eligendi
            temporibus,
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
          <Project__Button onClick={handleMoreButtonClick} themeMode={theme.palette.mode}>
            More <ArrowForwardIcon />
          </Project__Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg component="img" src={pic1} />
          <Project__Typography>Crtly</Project__Typography>
          <Typography>Mobile App</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg component="img" src={pic2} />
          <Project__Typography>Tansto</Project__Typography>
          <Typography>Web Design</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg component="img" src={pic3} />
          <Project__Typography>Another Project</Project__Typography>
          <Typography>Another Type</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg component="img" src={pic4} />
          <Project__Typography>More Project</Project__Typography>
          <Typography>More Type</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
