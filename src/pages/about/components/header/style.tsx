import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components";

export const About__HeaderTitle = styled(Typography)`
  && {
    font-size: 150px;
    font-weight: 800;
    line-height: 1;
    @media (max-width: 768px) {
      font-size: 80px;
    } @media (max-width:375px) {
      font-size: 40px;
    }
  }
`;
export const About__PersonImg = styled(Box)`
  &&{
    max-width: 100%;
  }
`;
export const About__Typography = styled(Typography)`
  && {
    padding: 10px;
    max-width: 50%;
    @media (max-width:375px) {
      font-size: 10px;
      max-width: 100%;
    }
  }
`;
export const About__StyledButton = styled(Button)`
  && {
    background-color: #d4d0d0a0;
    font-size: 20px;
    font-weight: 400;
    color: #000;
    border-radius: 30px;
    padding: 10px 50px;
    margin-left: 60px;
    @media (max-width: 375px) {
      font-size: 10px;
      padding: 5px 10px;
      margin-left: 20px;
      background-color: #000;
      color:#fff
    }
  }
`;
