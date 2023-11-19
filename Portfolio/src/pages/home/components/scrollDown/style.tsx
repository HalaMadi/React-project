import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  && {
    background: #f3eeee9e;
    font-size: 16px;
    color: #000;
    border-radius: 30px;
    padding: 20px;
    font-weight: 800;
    margin-top: 300px;

    @media (max-width: 768px) {
      font-size: 14px;
      margin-top: 0px;
    }
    @media (max-width: 375px) {
    }
  }
`;
