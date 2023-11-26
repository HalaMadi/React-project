import { Box, Typography, Link } from "@mui/material";
import styled from "styled-components";

export const CenteredBox = styled(Box)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
  }
`;

export const StyledFooter__Title = styled(Typography)`
  && {
    align-items: center;
    font-weight: 800;
    font-size: 150px;
    @media (max-width: 768px) {
      font-size: 100px;
    }
    @media (max-width: 375px) {
      font-size: 50px;
    }
  }
`;
export const StyledFooter__Button = styled(Typography)`
  && {
    background-color: #000;
    color: #fff;
    border-radius: 50px;
    padding: 20px 40px;
    margin: 20px;
    @media (max-width: 375px) {
      padding: 10px 20px;

      font-size: 14px;
    }
  }
`;
export const StyledLink = styled(Link)`
  && {
    text-decoration: none;
    color: #000;
  }
`;
