import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledBoxTitle = styled(Box)`
  && {
    margin: 50px 0px;
      &[dir='rtl']{
      font-family: 'Amiri', serif;
    }
    @media (max-width: 375px) {
      font-size: 10px;
    }
  }
`;
export const CollaborateTitle = styled(Typography)`
  && {
      &[dir='rtl']{
      font-family: 'Amiri', serif;
    }
    @media (max-width: 375px) {
      font-size: 30px;
    }
  }
`;
export const Collaborate__GridTypography = styled(Typography)`
  && {
    padding: 15px 0px;
      &[dir='rtl']{
      font-family: 'Amiri', serif;
    }
  }
`;
export const GridIcon = styled(Box)`
  && {
    background-color: black;
    color: #fff;
    border-radius: 40px;
    max-width: 50px;
    min-height: 50px;
    text-align:center;
    padding: 10px;
  }
`;
