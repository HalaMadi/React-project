import { Grid } from '@mui/material';
import React from 'react';
import {
  Testimonials__Box,
  Testimonials__Title,
  Testimonials__Typography,
  Testimonials__Brife
} from './style';

const Testimonials: React.FC = () => {
  return (
    <>
      <Testimonials__Box>
        <Testimonials__Title variant="h3">Testimonials</Testimonials__Title>
        <Grid container>
          <Grid item xs={12} md={6} lg={8}>
            <Testimonials__Brife>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              fugiat quo ducimus, dicta nulla nobis labore beatae at! In velit
              ullam ipsa quae veritatis voluptatibus! Cum excepturi ipsa
              commodi, aspernatur voluptas quam, sequi ducimus suscipit quos
              libero repellat dolorum exercitationem nulla, distinctio enim
              cupiditate sed culpa deserunt? Quod, odio accusamus, sequi esse
              incidunt cumque natus voluptate aliquid molestias, officia
              corporis.
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
              <Testimonials__Typography>Chirs Ellingoton</Testimonials__Typography>
              <Testimonials__Typography>Product Lead.Gatha</Testimonials__Typography>
            </div>
          </Grid>
        </Grid>
      </Testimonials__Box>
    </>
  );
};

export default Testimonials;
