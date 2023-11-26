import React, { SyntheticEvent, useState } from "react";
import { Toolbar, useTheme, useMediaQuery, Box, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  StyledTabs,
  StyledTab,
  StyledLink,
  CenteredContainer,
  StyledAppBar,
} from "./style";
import DrawerComp from "../drawer";

const Menu: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  // State for handling mobile drawer open/close
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <CenteredContainer>
      <StyledAppBar position="static" style={{ height: "64px" }}>
        {isMatch ? (
          <>
            <Toolbar>
              <Box>
                <MenuIcon onClick={toggleDrawer(true)} />
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  <DrawerComp />
                </Drawer>
              </Box>
            </Toolbar>
          </>
        ) : (
          <>
            {/* Display full menu with tabs when the screen size is larger */}
            <Toolbar>
              {/* <StyledLogo component="img" alt="Logo" src={Logo} /> */}
              <StyledTabs value={value} onChange={handleChange} centered>
                <StyledTab label={<StyledLink to="/">Home</StyledLink>} />
                <StyledTab
                  label={<StyledLink to="/projects">Projects</StyledLink>}
                />
                <StyledTab label={<StyledLink to="/about">About</StyledLink>} />
                <StyledTab
                  label={<StyledLink to="/contact">Contact</StyledLink>}
                />
              </StyledTabs>
            </Toolbar>
          </>
        )}
      </StyledAppBar>
    </CenteredContainer>
  );
};

export default Menu;
