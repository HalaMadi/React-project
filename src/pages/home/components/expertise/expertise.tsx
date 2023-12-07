import React from "react";
import { StyledBox, SubTitle, Title } from './style';
import {  Grid, Typography } from "@mui/material";

const expertise: React.FC = () => {
  return (
    < >
      <Title variant="h3">Expertise</Title>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <StyledBox>
            <SubTitle gutterBottom>Branding</SubTitle>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              impedit error, adipisci voluptate tempore distinctio incidunt
              veniam perferendis iste o adipisicing elit. Ut, fugiat! dit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ut, fugiat!
            </Typography>
          </StyledBox>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <StyledBox>
            <SubTitle gutterBottom>UI Design</SubTitle>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              impedit error, adipisci voluptate tempore distinctio incidunt
              veniam perferendis iste odit. Lorem ipsum dolor si adipisicing
              elit. Ut, fugiat! t amet consectetur adipisicing elit. Ut, fugiat!
            </Typography>
          </StyledBox>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <StyledBox>
            <SubTitle gutterBottom>Ux Design</SubTitle>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              impedit error, adipisci voluptate tempore distinctio incidunt
              veniam perferendis iste odit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ut, fugiat! adipisicing elit. Ut,
              fugiat!
            </Typography>
          </StyledBox>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <StyledBox>
            <SubTitle gutterBottom>Development</SubTitle>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              impedit error, adipisci voluptate tempore distinctio incidunt
              veniam perferendis iste odit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ut, fugiat! adipisicing elit. Ut,
              fugiat!
            </Typography>
          </StyledBox>
        </Grid>
      </Grid>
    </>
  );
};

export default expertise;
