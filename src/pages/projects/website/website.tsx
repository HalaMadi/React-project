import React from 'react';
import { LineBreak } from '../../home/components/header/style';
import { BoxImg } from '../Tansto/style';
import { StyledContainer, StyledTypography } from '../style';
import pic from '../../../public/pic2-2.png';
import { Grid, Typography } from '@mui/material';
import { TestimonialsBox } from '../../home/style';

const website: React.FC = () => {
  return (
    <StyledContainer>
      <StyledTypography variant="h3">
        Tasto impact -- <LineBreak />a unified visual brand for a well being
        retreat
      </StyledTypography>
      <Typography sx={{ fontSize: '20px' }} marginTop={5}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, id
        tempore! Modi animi laboriosam deserunt dolore dolorum, porro quaerat
        debitis illo, quisquam officiis ducimus eveniet fuga, velit
        reprehenderit saepe ipsam.
      </Typography>
      <BoxImg component="img" src={pic} />
      <Typography sx={{ fontSize: '20px' }} marginTop={5}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, id
        tempore! Modi animi laboriosam deserunt dolore dolorum, porro quaerat
        debitis illo, quisquam officiis ducimus eveniet fuga, velit
        reprehenderit saepe ipsam.
      </Typography>
      <Typography sx={{ fontSize: '20px' }} marginTop={5}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, id
        tempore! Modi animi laboriosam deserunt dolore dolorum, porro quaerat
        debitis illo, quisquam officiis ducimus eveniet fuga, velit
        reprehenderit saepe ipsam.
      </Typography>
      <Typography sx={{ fontSize: '20px' }} marginTop={5}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, id
        tempore! Modi animi laboriosam deserunt dolore dolorum, porro quaerat
        debitis illo, quisquam officiis ducimus eveniet fuga, velit
        reprehenderit saepe ipsam.
      </Typography>
      <Grid container>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          magnam.
        </Typography>
        <TestimonialsBox>
          <Grid container>
            <Grid item xs={8} md={6}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit fugiat quo ducimus, dicta nulla nobis labore beatae at!
                In velit ullam ipsa quae veritatis voluptatibus! Cum excepturi
                ipsa commodi, aspernatur voluptas quam, sequi ducimus suscipit
                quos libero repellat dolorum exercitationem nulla, distinctio
                enim cupiditate sed culpa deserunt? Quod, odio accusamus, sequi
                esse incidunt cumque natus voluptate aliquid molestias, officia
                corporis.
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              md={6}
              container
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <div>
                <StyledTypography>Chirs Ellingoton</StyledTypography>
                <Typography>Product Lead.Gatha</Typography>
              </div>
            </Grid>
          </Grid>
        </TestimonialsBox>
      </Grid>
    </StyledContainer>
  );
};

export default website;
