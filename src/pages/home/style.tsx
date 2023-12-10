import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  && {
    margin: 100px 0px;
  }
`;
export const StyledHomeContainer = styled(Container)`
  && {
    @media (max-width: 375px) {
      max-width: 100%;
    }
  }
`;
export const StyledSubTitle = styled(Typography)`
  && {
    margin: 30px 0px;
  }
`;
export const StyledBox = styled(Box)`
  && {
    padding: 20px 0px;
    margin: 20px 0px;
  }
`;
export const BoxDesign = styled(Box) <{ themeMode: string }>`
  && {
    background-color: ${({ themeMode }) =>
    themeMode === 'dark' ? '#181818' : '#000'};    color: #fff;
    margin-top: 50px;
    font-size: 110px;
    @media (max-width: 768px) {
      font-size: 70px;
    }
    @media (max-width: 375px) {
      font-size: 35px;
    }
  }
`;
export const TestimonialsBox = styled(Box)`
  && {
    /* margin: 40px 0px; */
  }
`;
export const StyledTitle = styled(Typography)`
  && {
    font-weight: 600;
    margin: 25px 0px;
  }
`;
export const StyledTypography = styled(Typography)`
  && {
    font-weight: 800;
  }
`;
