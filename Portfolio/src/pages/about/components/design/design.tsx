import { Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react'

const design: React.FC = () => {
  return (
    <Container>
      <Typography variant='h4'>Design Process</Typography>
      <Grid container spacing={3}>
        {/* Left column */}
        <Grid item xs={12} sm={6}>
          <Grid container spacing={3}>
            {/* First Grid */}
            <Grid item xs={12}>
              <Typography variant="h6">1</Typography>
              <Divider />
              <Typography variant="h5">Title 1</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>

            {/* Third Grid */}
            <Grid item xs={12}>
              <Typography variant="h6">3</Typography>
              <Divider />
              <Typography variant="h5">Title 3</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Right column */}
        <Grid item xs={12} sm={6}>
          <Grid container spacing={3}>
            {/* Second Grid */}
            <Grid item xs={12}>
              <Typography variant="h6">2</Typography>
              <Divider />
              <Typography variant="h5">Title 2</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>

            {/* Fourth Grid */}
            <Grid item xs={12}>
              <Typography variant="h6">4</Typography>
              <Divider />
              <Typography variant="h5">Title 4</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default design