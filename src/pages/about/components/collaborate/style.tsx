import { Box, Typography, Grid } from "@mui/material";
import styled from "styled-components";

export const StyledBoxTitle = styled(Box)`
  && {
    margin: 50px 0px;
    @media (max-width: 375px) {
      font-size: 10px;
    }
  }
`;
export const CollaborateGrid = styled(Grid)`
  && {

  }
`;

export const Title = styled(Typography)`
  && {
    @media (max-width: 375px) {
      font-size: 30px;
    }
  }
`;
export const GridTypography = styled(Typography)`
  && {
    padding: 15px 0px;
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
