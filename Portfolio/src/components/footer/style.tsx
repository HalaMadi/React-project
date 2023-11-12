import { Box, Typography, Link } from "@mui/material";
import styled from "styled-components";

export const CenteredBox = styled(Box)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }
`;

export const StyledFooter__Title = styled(Typography)`
  && {
    align-items: center;
    font-weight: 800;
    font-size: 150px;
  }
`;
export const StyledFooter__Button = styled(Typography)`
  && {
    background-color: #000;
    color: #fff;
    border-radius: 50px;
    padding: 20px 40px;
    margin: 10px;
  }
`;
export const StyledLink = styled(Link)`
  && {
    text-decoration: none;
    color: #000;
  }
`;
