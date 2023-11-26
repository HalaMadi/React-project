import { Container, Typography } from "@mui/material";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledContainer = styled(Container)`
  && {
    padding: 60px;
    margin-top: 40px;
    align-items: center;
    @media (max-width: 375px) {
      margin: 0;
      padding: 30px;
    }
  }
`;
export const StyledTypography = styled(Typography)`
  && {
    font-weight: 600;
    margin-top: 0px;
    text-decoration: none;
    @media (max-width: 375px) {
 font-size: 20px;
    }
  }
`;
export const StyledLink = styled(Link)`
&&{
  color: #000;
  text-decoration: none;
}
`;