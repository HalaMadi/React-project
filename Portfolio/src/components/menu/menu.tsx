import React, { SyntheticEvent, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import {
  StyledTabs,
  StyledTab,
  StyledLink,
  CenteredContainer,
  StyledAppBar,
} from "./style";
import { Box } from "@mui/material";
import Logo from "../../public/Logo.svg";
const menu: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CenteredContainer>
      <StyledAppBar position="static">
        <Box component="img" sx={{ bgcolor: "#000" }} alt="Logo" src={Logo} />
        <Toolbar>
          <StyledTabs value={value} onChange={handleChange} centered>
            <StyledTab label={<StyledLink to="/">Home</StyledLink>} />
            <StyledTab
              label={<StyledLink to="/projects">Projects</StyledLink>}
            />
            <StyledTab label={<StyledLink to="/about">About</StyledLink>} />
            <StyledTab label={<StyledLink to="/contact">Contact</StyledLink>} />
          </StyledTabs>
        </Toolbar>
      </StyledAppBar>
    </CenteredContainer>
  );
};

export default menu;
