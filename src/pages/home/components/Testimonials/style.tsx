import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const TestimonialsBox = styled(Box)`
  && {
    margin: 100px 0px;
  }
`;
export const StyledTitle = styled(Typography)`
  && {
    font-weight: 600;
    margin: 25px 0px;
    @media (max-width: 375px) {
      font-size: 30px;
    }
  }
`;
export const StyledBrife = styled(Typography)`
  && {
    font-weight: 400;
    font-size: 25px;
    @media (max-width: 768px) {
      font-size: 15px;
    }
    @media (max-width: 375px) {
      font-size: 10px;
    }
  }
`;
export const StyledTypography = styled(Typography)`
  && {
    font-weight: 600;
    font-size: 25px;
    @media (max-width: 768px) {
      font-size: 15px;
    }
    @media (max-width: 375px) {
      font-size: 8px;
    }
  }
`;
