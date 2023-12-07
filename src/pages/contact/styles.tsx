import styled from 'styled-components';
import {
  Grid,
  TextField,
  Typography,
  Button,
  TextareaAutosize
} from '@mui/material';
export const ContactGrid = styled(Grid)`
  && {
    margin: 20px 0px;
  }
`;
export const StyledTypography = styled(Typography)`
  && {
    max-width: 70%;
    text-align: center;
    margin: auto;
    font-weight: 600;
    padding: 20px;
  }
`;
export const ContactBox = styled(Grid)`
  && {
    padding: 8px;
    text-align: center;
  }
`;
export const FullWidthTextField = styled(TextField)<{ themeMode: string }>`
  && {
    width: 40%;
    padding: 8px;
    border-radius: 50px;
    background-color: ${({ themeMode }) =>
      themeMode === 'dark' ? '#333' : '#eeeaea'};
    text-align: center;
    color: ${({ themeMode }) => (themeMode === 'dark' ? '#fff' : 'inherit')};
  }
`;
export const SubmitButton = styled(Button)<{ themeMode: string }>`
  && {
    width: 40%;
    border-radius: 30px;
    padding: 10px;
    font-weight: 400;
    font-size: 16px;
    color: ${({ themeMode }) => (themeMode === 'dark' ? '#030303' : '#ffff')};
    background-color: ${({ themeMode }) =>
      themeMode === 'dark' ? '#ffffff' : '#000000'};
  }
`;
export const StyledTextarea = styled(TextareaAutosize)<{ themeMode: string }>`
  && {
    width: 40%;
    padding: 8px;
    border-radius: 50px;
    background-color: ${({ themeMode }) =>
      themeMode === 'dark' ? '#333' : '#eeeaea'};
    resize: vertical;
    font-size: 16px;
    border: none;
    color: ${({ themeMode }) => (themeMode === 'dark' ? '#fff' : 'inherit')};
  }
`;
