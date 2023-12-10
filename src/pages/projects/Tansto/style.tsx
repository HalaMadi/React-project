import { Typography, Box, Grid, Breadcrumbs } from '@mui/material';
import styled from 'styled-components';

export const Tansto__Typography = styled(Typography)`
  && {
    font-weight: 400 !important;
    font-size: 65px;
  }
`; 
export const Tansto__Breadcrumbs = styled(Breadcrumbs)`
  && {
    color: #080808;
    font-size: 35px;
  }
`;

export const StyledParagraph = styled(Typography)`
  && {
    line-height: 25px;
    font-size: 16px;
    @media screen and(max-width: 375px) {
      font-size: 14px;
      
    }
  }
`;
export const StyledParagraph2 = styled(Typography)`
  && {
    font-size: 14px;
  }
`;
export const BoxImg = styled(Box)`
  && {
    margin: 20px 0px;
    width: 100%;
  }
`;export const NextGrid__Img = styled(Box)`
  && {
    margin: auto 100px;
    max-width: 100%;
    @media screen and( max-width:375px) {
    width:200px;
    }
  }
`;
export const Challenge = styled(Typography)`
  && {
    font-size: 25px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 800;
    max-width: 70%;
    margin-top: 30px;
    @media screen and(max-width: 375px) {
      font-size: 20px;
      max-width:100%;
    }
  }
`;
export const NextGrid = styled(Grid)`
  && {
    margin: 30px 40px;
    @media screen and(max-width: 375px) {
      display: block;
    }
  }
`;
export const GridTypography = styled(Typography)`
  && {
    margin: auto 20px;
    font-weight: 800;
    @media screen and(max-width: 375px) {
      display: block;
    }
  }
`;export const Projects = styled(Typography)`
  && {
    font-weight: 800;
  }
`;
