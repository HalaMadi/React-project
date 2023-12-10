import React from "react";
import { Expertise__StyledBox, Expertise__SubTitle, Expertise__Title } from './style';
import {  Grid, Typography } from "@mui/material";

const Expertise: React.FC = () => {
  return (
    < >
      <Expertise__Title variant="h3">Expertise</Expertise__Title>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Expertise__StyledBox>
            <Expertise__SubTitle gutterBottom>Branding</Expertise__SubTitle>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              impedit error, adipisci voluptate tempore distinctio incidunt
              veniam perferendis iste o adipisicing elit. Ut, fugiat! dit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ut, fugiat!
            </Typography>
          </Expertise__StyledBox>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Expertise__StyledBox>
            <Expertise__SubTitle gutterBottom>UI Design</Expertise__SubTitle>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              impedit error, adipisci voluptate tempore distinctio incidunt
              veniam perferendis iste odit. Lorem ipsum dolor si adipisicing
              elit. Ut, fugiat! t amet consectetur adipisicing elit. Ut, fugiat!
            </Typography>
          </Expertise__StyledBox>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Expertise__StyledBox>
            <Expertise__SubTitle gutterBottom>Ux Design</Expertise__SubTitle>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              impedit error, adipisci voluptate tempore distinctio incidunt
              veniam perferendis iste odit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ut, fugiat! adipisicing elit. Ut,
              fugiat!
            </Typography>
          </Expertise__StyledBox>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Expertise__StyledBox>
            <Expertise__SubTitle gutterBottom>Development</Expertise__SubTitle>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              impedit error, adipisci voluptate tempore distinctio incidunt
              veniam perferendis iste odit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ut, fugiat! adipisicing elit. Ut,
              fugiat!
            </Typography>
          </Expertise__StyledBox>
        </Grid>
      </Grid>
    </>
  );
};

export default Expertise;
