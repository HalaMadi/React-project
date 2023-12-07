import { Grid } from '@mui/material';
import React from 'react';
import {
  TestimonialsBox,
  StyledTitle,
  StyledTypography,
  StyledBrife
} from './style';

const Testimonials: React.FC = () => {
  return (
    <>
      <TestimonialsBox>
        <StyledTitle variant="h3">Testimonials</StyledTitle>
        <Grid container>
          <Grid item xs={12} md={6} lg={8}>
            <StyledBrife>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              fugiat quo ducimus, dicta nulla nobis labore beatae at! In velit
              ullam ipsa quae veritatis voluptatibus! Cum excepturi ipsa
              commodi, aspernatur voluptas quam, sequi ducimus suscipit quos
              libero repellat dolorum exercitationem nulla, distinctio enim
              cupiditate sed culpa deserunt? Quod, odio accusamus, sequi esse
              incidunt cumque natus voluptate aliquid molestias, officia
              corporis.
            </StyledBrife>
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
              <StyledTypography>Chirs Ellingoton</StyledTypography>
              <StyledTypography>Product Lead.Gatha</StyledTypography>
            </div>
          </Grid>
        </Grid>
      </TestimonialsBox>
    </>
  );
};

export default Testimonials;
