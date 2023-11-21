import { Container, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  && {
    @media (max-width: 375px) {
      width: 375px;
    }
  }
`;

export const StyledTitle = styled(Typography)`
  && {
    font-weight: 800;
    font-size: 200px;

    @media (max-width: 768px) {
      font-size: 110px;
    }
    @media (max-width: 375px) {
      font-size: 60px;
      font-weight: 600;
      text-align: center;
    }
  }
`;

export const LineBreak = styled.br`

`;
export const StyledTypography = styled(Typography)`
  && {
    font-size: 25px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 24px;
    }
    @media (max-width: 375px) {
      font-size: 18px;
    }
  }
`;

export const StyledBrief_T = styled(Typography)`
  && {
    font-size: 17px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
