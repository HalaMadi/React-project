import {Box, Typography, Button } from "@mui/material";
import styled from "styled-components";

export const StyledTitle = styled(Typography)`
  && {
    font-size: 150px;
    font-weight: 800;
    line-height: 1;
gap:0px;
    @media (max-width: 768px) {
      font-size: 80px;
    }
  }
`;
export const PersonImg=styled(Box)`
  &&{
    max-width: 100%;
  }
`;
export const StyleTypography = styled(Typography)`
  && {
    margin-bottom: 50px;
    
  }
`;
export const StyledButton = styled(Button)`
  && {
    margin-left: auto;
    margin-right: auto;
    background-color: #f9f9f9;
    font-size: 20px;
    font-weight: 400;
    color: #000;
    border-radius: 30px;
    padding: 10px 50px;
    
  }
`;
