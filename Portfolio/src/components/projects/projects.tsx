import React from "react";
import { Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StyledButton, StyledImg, StyledTypography } from "./style";
const Projects: React.FC = () => {
  return (
    <>
      <Typography variant="h3">Projects</Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} md={6}>
          <StyledTypography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nulla quod expedita? Voluptas, cumque aperiam?Lorem ipsum dolor sit
            amet Lorem ipsum dolor sit amet.
          </StyledTypography>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          container
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <StyledButton>
            More <ArrowForwardIcon />
          </StyledButton>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledImg
            component="img"
            sx={{ bgcolor: "#000" }}
            alt="Logo"
            src="src\public\pic1.PNG"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledImg
            component="img"
            sx={{ bgcolor: "#000" }}
            alt="Logo"
            src="src\public\pic2.PNG"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontWeight: "600", mt: "10px" }}>Crtly</Typography>
          <Typography>Mobile App</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontWeight: "600", mt: "10px" }}>Tansto</Typography>
          <Typography>Web Design</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledImg
            component="img"
            sx={{ bgcolor: "#000" }}
            alt="Logo"
            src="src\public\pic3.PNG"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledImg
            component="img"
            sx={{ bgcolor: "#000" }}
            alt="Logo"
            src="src\public\pic4.PNG"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontWeight: "600", mt: "10px" }}>Crtly</Typography>
          <Typography>Mobile App</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontWeight: "600", mt: "10px" }}>Tansto</Typography>
          <Typography>Web Design</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
