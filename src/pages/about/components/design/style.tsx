
import { Container, Divider, Grid, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledTitle = styled(Typography)`
  && {
    font-weight: bold;
    padding: 10px 0px;
  }
`;
export const StyledTypography = styled(Typography)`
    &&{
      font-weight: bold;
      padding: 10px 0px;
      font-size: 25px;
    }
`;
export const DesignContainer = styled(Container)`
    &&{
    margin-bottom: 200px;
    }
`;
export const StyledDivider = styled(Divider)`
  &&{
    max-width:50%;
  }  
`; export const RhigtGrid = styled(Grid)`
  &&{
    @media (max-width: 375px) {
      justify-content: flex-start;
      width: 100%;
    }
  }  
`; export const ProcessTypography = styled(Typography)`
  &&{
    max-width: 50%;
    @media (max-width: 375px) {
    max-width: 100%;
    }
  }  
`;
