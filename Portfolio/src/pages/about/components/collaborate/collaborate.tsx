import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { AccountCircle, Business, Chat } from "@mui/icons-material"; // Import icons

const Collaborate: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2">Why collaborate with me?</Typography>
      <Grid container spacing={3}>
        {/* First Grid */}
        <Grid item xs={12} sm={4}>
          <AccountCircle fontSize="large" />
          <Typography variant="h6">Title 1</Typography>
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            laborum nam saepe dolore nostrum vitae delectus temporibus tempore
            explicabo nisi?
          </Typography>
        </Grid>

        {/* Second Grid */}
        <Grid item xs={12} sm={4}>
          <Business fontSize="large" />
          <Typography variant="h6">Title 2</Typography>
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            laborum nam saepe dolore nostrum vitae delectus temporibus tempore
            explicabo nisi?
          </Typography>
        </Grid>

        {/* Third Grid */}
        <Grid item xs={12} sm={4}>
          <Chat fontSize="large" />
          <Typography variant="h6">Title 3</Typography>
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            laborum nam saepe dolore nostrum vitae delectus temporibus tempore
            explicabo nisi
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Collaborate;
