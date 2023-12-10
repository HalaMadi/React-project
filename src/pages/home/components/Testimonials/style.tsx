import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const Testimonials__Box = styled(Box)`
  && {
    margin: 100px 0px;
  }
`;
export const Testimonials__Title = styled(Typography)`
  && {
    font-weight: 600;
    margin: 25px 0px;
    @media screen and(max-width: 375px) {
      font-size: 30px;
    }
  }
`;
export const Testimonials__Brife = styled(Typography)`
  && {
    font-weight: 400;
    font-size: 25px;
    @media screen and(max-width: 768px) {
      font-size: 15px;
    }
    @media screen and(max-width: 375px) {
      font-size: 10px;
    }
  }
`;
export const Testimonials__Typography = styled(Typography)`
  && {
    font-weight: 600;
    font-size: 25px;
    @media screen and(max-width: 768px) {
      font-size: 15px;
    }
    @media screen and(max-width: 375px) {
      font-size: 8px;
    }
  }
`;
