import { Box, Typography } from "@mui/material";
import styled from "styled-components";


export const Title = styled(Typography)`
  && {
    font-weight: bold;
    @media (max-width: 375px) {
      font-size: 25px;
    }
  }
`;
export const SubTitle = styled(Typography)`
  && {
    font-size: 30px;
    font-weight: bolder;
    @media (max-width: 375px) {
      font-size: 20px;
    }
  }
`;
export const StyledBox = styled(Box)`
  && {
    padding: 20px 0px;
    margin: 20px 15px;
    max-width: 50%;
    @media (max-width: 375px) {
      max-width: 100%;
      font-size: 10px;
      margin:0;
    }
  }
`;
