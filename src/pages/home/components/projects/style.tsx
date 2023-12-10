import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const Project__Title = styled(Typography)`
  && {
    font-weight: 800;
    @media screen and(max-width: 375px) {
      font-size: 25px;
    }
  }
`; export const Project__SubTitle = styled(Typography)`
  && {
    margin: 15px 0px;
    font-size: 18px;
  @media screen and(max-width: 768px) {
    font-size: 12px;
  }}
`;
export const Project__Button = styled(Button) <{ themeMode: string }>`
  && {
      background-color: ${({ themeMode }) =>
    themeMode === 'dark' ? '#181818' : '#f3eeeebd'};
    font-size: 15px;
    font-weight: 600;
    color: ${({ themeMode }) =>
    themeMode === 'dark' ? '#c5c4c4' : '#000'};
    border-radius: 30px;
    gap: 5px;
    @media screen and(max-width: 375px) {
      font-size: 12px;
      margin-top: 0;
    }
  }
`;
export const Project__Typography = styled(Typography)`
  && {
    font-weight: 800;
    padding-top: 20px;
  }
`;
export const StyledImg = styled(Box)`
  && {
    margin-top: 20px;
    border-radius: 30px;
    width: 100%;
    @media screen and(max-width: 375px) {
    }
  }
`;
