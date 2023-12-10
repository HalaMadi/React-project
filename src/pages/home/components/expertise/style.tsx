import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const Title = styled(Typography)`
  && {
    font-weight: bold;
    @media screen and(max-width: 375px) {
      font-size: 25px;
    }
  }
`;
export const SubTitle = styled(Typography)`
  && {
    font-size: 30px;
    font-weight: bolder;
    @media screen and(max-width: 600px) {
      font-size: 20px;
    }
    @media screen and(max-width: 375px) {
      font-size: 16px;
    }
  }
`;
export const Expertise__StyledBox = styled(Box)`
  && {
    padding: 20px 0px;
    margin: 20px 15px;
    width: 100%;
    @media screen and(min-width: 600px) {
      max-width: 50%;
    }
    @media screen and(max-width: 600px) {
      margin: 10px 5px;
    }
    @media screen and(max-width: 375px) {
      font-size: 12px;
      margin: 5px 0;
    }
  }
`;
