
import { Container, Divider, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledTitle = styled(Typography)`
  && {
    font-weight: bold;
    padding: 10px 0px;
  }
`;
export const StyledTypography=styled(Typography)`
    &&{
        font-size: 25px;
        font-weight: bold;
        padding: 10px 0px;
    }
`;
export const DesignContainer=styled(Container)`
    &&{
        margin-bottom: 200px;
    }
`;
export const StyledDivider=styled(Divider)`
  &&{
    max-width:50%;
  }  
`;