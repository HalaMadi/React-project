import { Box, Button, Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledContainer = styled(Container)`
  && {
    padding: 60px;
    margin-top: 40px;
    align-items: center;
      &[dir='rtl']{
      font-family: 'Amiri', serif;
    }
    @media (max-width: 375px) {
      margin: 0;
      padding: 30px;
    }
  }
`;
export const StyledCrafting = styled(Typography)`
  && {
    font-weight: 600;
    margin-top: 50px;
    font-size:35px;
    text-decoration: none;
    @media (max-width: 375px) {
      font-size: 20px;
    }
  }
`; export const StyledTypography = styled(Typography)`
  && {
    font-weight: 600;
    margin-top: 0px;
    text-decoration: none;
    @media (max-width: 375px) {
      font-size: 20px;
    }
  }
`;
export const StyledLink = styled(Link)`
  && {
    color: #000;
    text-decoration: none;
  }
`;
export const StyledButton = styled(Button) <{ themeMode: string }>`
  && {
    border-radius: 30px;
    color:${({ themeMode }) =>
    themeMode === 'dark' ? '#ffffffcd' : '#000'};
    font-size: 18px;
    padding: 10px 30px;
    font-weight: 600;
    background-color: ${({ themeMode }) =>
    themeMode === 'dark' ? '#bbb6b6a2' : '#e8e6e6'};
  }
  `; export const StyledBox = styled(Box)`
  && {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  }
`;
