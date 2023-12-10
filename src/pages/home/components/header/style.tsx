import { Container, Typography } from "@mui/material";
import styled from "styled-components";

export const Home__headerContainer = styled(Container)`
  && {
    @media screen and(max-width: 375px) {
      width: 375px;
    }
  }
`;
export const Home__Title = styled(Typography)`
  && {
    font-weight: 800;
    font-size: 200px;
    margin-top: 40px;
    @media screen and(max-width: 768px) {
      font-size: 100px;
      text-align: center;
    }
    @media screen and(max-width: 375px) {
      font-size: 65px;
      font-weight: 600;
      text-align: center;
    }
  }
`;
export const LineBreak = styled.br`
`;
export const Home__Typography = styled(Typography)`
  && {
    font-size: 30px;
    font-weight: 800;
    font-family: 'Nunito Sans', sans-serif;
    @media screen and(max-width: 768px) {
      font-size: 20px;
    }
    @media screen and(max-width: 375px) {
      font-size: 18px;
    }
  }
`;

export const StyledBrief_T = styled(Typography)`
  && {
    line-height: 20px;
    font-size: 17px;
    @media screen and(max-width: 768px) {
      font-size: 14px;
    }
    @media screen and(max-width: 375px) {
      font-size: 12px;
      margin-left: 30px;
    }
  }
`;
