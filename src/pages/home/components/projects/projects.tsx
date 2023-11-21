import React from "react";
import { Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StyledButton, StyledImg, StyledTypography } from "./style";
import { useNavigate } from "react-router-dom";

const Projects: React.FC = () => {
  const navigate = useNavigate();
  
    
  const handleMoreButtonClick = () => {
    // Navigate to the '/projects' route when the More button is clicked
    navigate("/projects");
  };
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
        <StyledButton onClick={handleMoreButtonClick}>
          More <ArrowForwardIcon />
        </StyledButton>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg component="img" src="src\public\pic1.PNG" />
          <StyledTypography>Crtly</StyledTypography>
          <Typography>Mobile App</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg component="img" src="src\public\pic2.PNG" />
          <StyledTypography>Tansto</StyledTypography>
          <Typography>Web Design</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg component="img" src="src\public\pic3.PNG" />
          <StyledTypography>Another Project</StyledTypography>
          <Typography>Another Type</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledImg component="img" src="src\public\pic4.PNG" />
          <StyledTypography>More Project</StyledTypography>
          <Typography>More Type</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;