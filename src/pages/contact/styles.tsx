import styled from 'styled-components';
import {
  Grid,
  TextField,
  Typography,
  Button,
  TextareaAutosize,
  Container,
  Table,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
export const ContactGrid = styled(Grid)`
  && {
    margin: 20px 0px;
  }
`;
export const Contact__Typography = styled(Typography)`
  && {
    max-width: 70%;
    text-align: center;
    margin: auto;
    font-weight: 600;
    padding-top: 10px;
    &[dir='rtl']{
      font-family: 'Amiri', serif;
    }
  }
`; export const Error = styled(Typography)`
  && {
    font-weight: 600;
    max-width: 70%;
    margin-left: 20px;
    &[dir='rtl']{
      font-family: 'Amiri', serif;
    }
  }
`;

export const ContactBox = styled(Grid)`
  && {
    padding: 4px;
    text-align: center;
  }
`;
export const Contact__TextField = styled(TextField) <{ themeMode: string }>`
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
export const Contact__SubmitButton = styled(Button) <{ themeMode: string }>`
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
export const Contact__Textarea = styled(TextareaAutosize) <{ themeMode: string }>`
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
export const StyledContainer = styled(Container)`
    margin: 50px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

export const StyledTable = styled(Table)`
    width: 100%;
    border-collapse: collapse;
    `;

export const StyledTableHead = styled(TableHead)`
    background-color: #f0f0f0;
`;

export const StyledTableRow = styled(TableRow)`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const StyledTableCell = styled(TableCell)`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
`;
