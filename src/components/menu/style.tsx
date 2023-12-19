import styled from 'styled-components';
import { Tabs, AppBar, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export const StyledLink = styled(Link)`
  && {
    text-decoration: none;
    color: #fff;
    font-size: 17px;
    position: relative;
    display: inline-block;
    padding-left: 10px;
    &.Mui-selected,
    &.Mui-selected:hover {
      color: #000;
    }
    
  }
`;
export const ProjectIndicator = styled.span`
  background-color: #686868;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  right: calc(100% + -8px);
`;
export const StyledTab = styled(Tab)`
  && {
    border-radius: 40px;
    margin: 2px;
    
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    &.Mui-selected {
      background-color: #fff;
      color: #000;
    }
    &[dir='rtl']{
      font-family: 'Amiri', serif;
    }
  }
`;
export const CenteredContainer = styled.div`
  && {
    margin-left:10px;
    margin-right:10px;
  }
`;
export const StyledMenuIcon = styled(MenuIcon)`
  && {
    background-color: #000;
    border-radius: 30px;
    color: #ffff;
    padding: 5px;
  }
`;
export const StyledAppBar = styled(AppBar)`
  && {
    display: block;
    width: auto;
    margin: 0;
    background-color: transparent;
    box-shadow: none;
    color: inherit;
    border: none;
    padding: 20px;
    align-items: center;
    border: none;
  }
`;
export const StyledTabs = styled(Tabs)<{ themeMode: string }>`
  && {
    & button {
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
    }
    border-radius: 40px;
    background-color: ${({ themeMode }) =>
      themeMode === 'dark' ? '#212020' : '#000'};
    .MuiTabs-indicator {
      display: none;
    }
    padding: 3px;
  }
`;
