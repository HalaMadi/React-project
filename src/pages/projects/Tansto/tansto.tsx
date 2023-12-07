import React from 'react';
import { LineBreak } from '../../home/components/header/style';
import { StyledContainer, StyledTypography } from '../style';
import pic from '../../../public/pic2-2.png';
import pic1 from '../../../public/pic1.png';
import pic2 from '../../../public/pic2.png';
import pic5 from '../../../public/pic5-5.png';
import pic4 from '../../../public/pic4.png';
import {
  BoxImg,
  Challenge,
  StyledParagraph,
  StyledParagraph2,
  NextGrid,
  GridTypography,
  NextGrid__Img,
  Projects
} from './style';
import {  Grid, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const tansto: React.FC = () => {
  return (
    <StyledContainer>
      <StyledTypography variant="h3">
        Tasto impact -- <LineBreak />a unified visual brand for a well being
        retreat
      </StyledTypography>
      <BoxImg component="img" src={pic} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={6}>
          <Challenge variant="h6">Challenge</Challenge>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, id
            tempore! Modi animi laboriosam deserunt dolore dolorum, porro
            quaerat debitis illo, quisquam officiis ducimus eveniet fuga, velit
            reprehenderit saepe ipsam.
          </StyledParagraph>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <BoxImg component="img" src={pic1} />
          <StyledTypography>Tansto</StyledTypography>
          <Typography>Web Design</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <BoxImg component="img" src={pic2} />
          <StyledTypography>Tansto</StyledTypography>
          <Typography>Web Design</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Challenge>A brand that fits wih the company culture</Challenge>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, id
            tempore! Modi animi laboriosam deserunt dolore dolorum, porro
            quaerat debitis illo, quisquam officiis ducimus eveniet fuga, velit
            reprehenderit saepe ipsam.
          </Typography>
          <Typography sx={{ fontSize: '15px' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, id
            tempore! Modi animi laboriosam deserunt dolore dolorum, porro
            quaerat debitis illo, quisquam officiis ducimus eveniet fuga, velit
            reprehenderit saepe ipsam.
          </Typography>
        </Grid>
        <BoxImg component="img" src={pic5} />
        <BoxImg component="img" src={pic} />
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={6}>
          <StyledTypography variant="h5">
            Crafting a cohesive and consistent brand esperience
          </StyledTypography>
        </Grid>
        <Grid item xs={12} md={12} lg={12} container>
          <StyledParagraph2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            molestias error magnam expedita aspernatur voluptate quis, nam amet
            ea cupiditate.
          </StyledParagraph2>
        </Grid>
        <Grid item xs={12} md={12} lg={12} container>
          <StyledParagraph2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            pariatur laboriosam error quia laborum, sunt nesciunt dolores, ipsam
            exercitationem vitae alias est? Quis nisi veniam minima. Itaque sit
            mollitia laboriosam!
          </StyledParagraph2>
        </Grid>
        <Grid item xs={12} md={12} lg={12} container>
          <StyledParagraph2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vel
            aut perspiciatis veritatis magni adipisci unde dolorem illo veniam
            sunt?
          </StyledParagraph2>
        </Grid>
        <Grid container>
          <Projects variant="h3" marginTop={10}>
            Next Projects
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

export default tansto;
