import React from "react";
import { Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StyledButton, StyledImg } from "./style";

const Projects: React.FC = () => {
  return (
    <>
      <Typography variant="h3">Projects</Typography>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        container
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <StyledButton>
          More <ArrowForwardIcon />
        </StyledButton>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg
            component="img"
            sx={{ bgcolor: "#000" }}
            alt="Logo"
            src="src\public\pic1.PNG"
          />
          <Typography sx={{ fontWeight: "600", mt: "10px" }}>Crtly</Typography>
          <Typography>Mobile App</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg
            component="img"
            sx={{ bgcolor: "#000" }}
            alt="Logo"
            src="src\public\pic2.PNG"
          />
          <Typography sx={{ fontWeight: "600", mt: "10px" }}>Tansto</Typography>
          <Typography>Web Design</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg
            component="img"
            sx={{ bgcolor: "#000" }}
            alt="Logo"
            src="src\public\pic3.PNG"
          />
          <Typography sx={{ fontWeight: "600", mt: "10px" }}>
            Another Project
          </Typography>
          <Typography>Another Type</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg
            component="img"
            sx={{ bgcolor: "#000" }}
            alt="Logo"
            src="src\public\pic4.PNG"
          />
          <Typography sx={{ fontWeight: "600", mt: "10px" }}>
            More Project
          </Typography>
          <Typography>More Type</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
