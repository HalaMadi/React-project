
import { Container, Divider, Grid, Typography } from "@mui/material";
import styled from "styled-components";

export const Design__Title = styled(Typography)`
  && {
    font-weight: bold;
    padding: 10px 0px;
        &[dir='rtl']{
      font-family: 'Amiri', serif;
    }
  }
`;
export const Design__Typography = styled(Typography)`
    &&{
      font-weight: bold;
      padding: 10px 0px;
      font-size: 25px;
          &[dir='rtl']{
      font-family: 'Amiri', serif;
    }
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
`; export const Design__RightGrid = styled(Grid)`
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
