
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
        font-size: 25px;
        font-weight: bold;
        padding: 10px 0px;
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
width: 100%;
justify-content: flex-start;
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
