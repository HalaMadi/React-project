import styled from 'styled-components';
import { Grid, TextField, Typography,Button } from '@mui/material';

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
  }
`;

export const FullWidthTextField = styled(TextField)`
  && {
    background-color: #f9f9f9;
    border-radius: 50px;
  }
`;


export const SubmitButton = styled(Button)`
  && {
    color: white;
    background-color: #000;
  }
`;