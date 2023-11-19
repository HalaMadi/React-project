import styled from 'styled-components';
import { Grid, TextField, Typography, TextareaAutosize } from '@mui/material';

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
    width: 100%;
    padding: 8px;
  }
`;

export const FullWidthTextField = styled(TextField)`
  && {
    width: 100%;
    background-color: #f9f9f9;
    border-radius: 50px;
  }
`;

export const StyledTextarea = styled(TextareaAutosize)`
  && {
    width: calc(100% - 16px); /* Adjusting for padding */
    padding: 8px;
    resize: vertical;
  }
`;
