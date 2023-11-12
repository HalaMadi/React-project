import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  && {
    background: #f3eeee9e;
    font-size: 15px;
    font-weight: 600;
    color: #000;
    border-radius: 30px;
    gap: 10px;
    padding: 20px;
  }
`;
export const StyledTypography = styled(Typography)`
  && {
    font-weight: 800;
    padding-top: 20px;
  }
`;
export const StyledImg = styled(Box)`
  && {
    margin-top: 20px;
    border-radius: 30px;
  }
`;
