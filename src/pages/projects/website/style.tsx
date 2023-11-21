import { Accordion, Box, Grid, Typography } from "@mui/material";
import styled from "styled-components";

export const AccordionTitle = styled(Typography)`
&&{
    font-weight:600;
    font-size: 25px;
}
`;export const StyledAccordion = styled(Accordion)`
  && {
    background-color: #f9f9f9f9;
    padding: 15px;
  }
`;
export const StyledGrid = styled(Grid)`
    &&{
        width: 100px;
        height: 100px;
        background-color: #f9f9f9;
        margin: 50px 0px;
        padding:20px 20px
    }
    `;
export const StyledLogo =styled(Box)`
    &&{
        font-weight:600;
    }
    `;
export const ToolsGrid=styled(Grid)`
&&{
    font-size: 30px;
    margin-top: 100px;
}
`;