import styled from "styled-components";
import { Tabs, AppBar, Tab } from "@mui/material";
import { Link } from "react-router-dom";

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
export const StyledTabs = styled(Tabs)`
  && {
    & button {
      &:focus {
        background-color: #fff;
      }
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    border-radius: 40px;
    background-color: #000;
    .MuiTabs-indicator {
      display: none;
    }
    padding: 3px;
  }
`;

export const StyledTab = styled(Tab)`
  && {
    border-radius: 40px;
    margin: 2px;
    transition: background-color 0.3s ease, color 0.3s ease;
    &.Mui-selected {
      background-color: #fff;
    }
  }
`;
export const StyledLink = styled(Link)`
  && {
    text-decoration: none;
    color: #fff;
  }
`;
export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
