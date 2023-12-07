import { Button } from '@mui/material';
import styled from 'styled-components';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export const StyledButton = styled(Button)`
  && {
    background: #dedddd68;
    color: #000;
    font-size: 20px;
    border-radius: 30px;
    padding: 20px;
    font-weight: bold;
    margin: 25px 90px;
    font-family: 'Varela Round', sans-serif;
    @media (max-width: 768px) {
      font-size: 14px;
      padding: 15px 10px;
    }
    @media (max-width: 375px) {
      font-size: 10px;
      padding: 10px 4px;
      margin-right: 0;
      margin-top: 0;
    }
  }
`;
export const ArrowIcon = styled(ArrowDownwardIcon)`
  && {
    @media (max-width: 375px) {
      font-size: 12px;
    }
  }
`;