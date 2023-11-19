import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import { StyledContainer } from "./style";
import { StyledImg } from "../home/components/projects/style";
import { TestimonialsBox } from "../home/style";
import Testimonials from "../home/components/Testimonials";

const projects: React.FC = () => {
  return (
    <StyledContainer>
      <Grid container spacing={3}>
        <Grid xs={6} sm={6} md={6}>
          <Typography variant="h3">Projects</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          container
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus praesentium eaque voluptate ducimus totam sapiente.
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Link
            href="your_link_here"
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg
              component="img"
              sx={{ bgcolor: "#000" }}
              alt="Logo"
              src="src\public\pic1.PNG"
            />
          </Link>
          <Typography sx={{ fontWeight: "600", mt: "10px" }}>Crtly</Typography>
          <Typography>Mobile App</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Link
            href="your_link_here"
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg
              component="img"
              sx={{ bgcolor: "#000" }}
              alt="Logo"
              src="src\public\pic2.PNG"
            />
          </Link>
          <Typography sx={{ fontWeight: "600", mt: "10px" }}>Tansto</Typography>
          <Typography>Web Design</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Link
            href="your_link_here"
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg
              component="img"
              sx={{ bgcolor: "#000" }}
              alt="Logo"
              src="src\public\pic3.PNG"
            />
          </Link>
          <Typography sx={{ fontWeight: "600", mt: "10px" }}>
            Another Project
          </Typography>
          <Typography>Another Type</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Link
            href="your_link_here"
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg
              component="img"
              sx={{ bgcolor: "#000" }}
              alt="Logo"
              src="src\public\pic4.PNG"
            />
          </Link>
          <Typography sx={{ fontWeight: "600", mt: "10px" }}>
            More Project
          </Typography>
          <Typography>More Type</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Link
            href="your_link_here"
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg
              component="img"
              sx={{ bgcolor: "#000" }}
              alt="Logo"
              src="src\public\pic4.PNG"
            />
          </Link>
          <Typography sx={{ fontWeight: "600", mt: "10px" }}>
            More Project
          </Typography>
          <Typography>More Type</Typography>
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
      <Testimonials />
    </StyledContainer>
  );
};

export default projects;
