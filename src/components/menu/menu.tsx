import React, { SyntheticEvent, useState } from 'react';
import { Toolbar, useTheme, useMediaQuery, Drawer, Grid } from '@mui/material';
import {
  StyledTabs,
  StyledTab,
  StyledLink,
  CenteredContainer,
  StyledMenuIcon,
  ProjectIndicator 
} from './style';
import DrawerComp from '../drawer';
import Logo from '../logo';

const Menu: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  // State for handling mobile drawer open/close
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <CenteredContainer>
      {isMatch ? (
        <>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Logo />
            </Grid>
            <Grid item>
              <StyledMenuIcon onClick={toggleDrawer(true)} />
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <DrawerComp />
              </Drawer>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Toolbar>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Logo />
              </Grid>

              {/* StyledTabs */}
              <Grid item>
                <StyledTabs
                  value={value}
                  onChange={handleChange}
                  centered
                  themeMode={theme.palette.mode}
                >
                  <StyledTab label={<StyledLink to="/">Home</StyledLink>} />
                  <StyledTab
                    label={
                      <>
                        <StyledLink to="/projects">
                          Projects
                          <ProjectIndicator>36</ProjectIndicator>
                        </StyledLink>
                      </>
                    }
                  />
                  <StyledTab
                    label={<StyledLink to="/about">About</StyledLink>}
                  />
                  <StyledTab
                    label={<StyledLink to="/contact">Contact</StyledLink>}
                  />
                </StyledTabs>
              </Grid>
            </Grid>
          </Toolbar>
        </>
      )}
    </CenteredContainer>
  );
};

export default Menu;
