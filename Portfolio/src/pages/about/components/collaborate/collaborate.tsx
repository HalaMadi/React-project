import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Business, Chat } from "@mui/icons-material";
import { GridIcon, GridTypography, StyledBoxTitle } from "./style";
import GroupIcon from "@mui/icons-material/Group";
const Collaborate: React.FC = () => {
  return (
    <Container sx={{ mb: "100px" }}>
      <StyledBoxTitle>
        <Typography variant="h2">Why collaborate with me?</Typography>
      </StyledBoxTitle>
      <Grid container spacing={25}>
        <Grid item xs={12} sm={4} sx={{ mt: "20px" }}>
          <GridIcon>
            <GroupIcon fontSize="large" />
          </GridIcon>
          <GridTypography variant="h6">Client-Centric</GridTypography>
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            laborum nam saepe dolore nostrum vitae delectus temporibus tempore
            explicabo nisi?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <GridIcon>
            <Business fontSize="large" />
          </GridIcon>
          <GridTypography variant="h6">Tailored Solutions</GridTypography>
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            laborum nam saepe dolore nostrum vitae delectus temporibus tempore
            explicabo nisi?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ mt: "20px" }}>
          <GridIcon>
            <Chat fontSize="large" />
          </GridIcon>
          <GridTypography variant="h6">Creative Innovation</GridTypography>
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
