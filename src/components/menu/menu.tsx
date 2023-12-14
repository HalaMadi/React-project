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
import { useTranslation } from 'react-i18next';

const Menu: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
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
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRtl = currentLanguage === 'ar';
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
                  <StyledTab
                    dir={isRtl ? 'rtl' : 'ltr'}
                    label={<StyledLink to="/">
                      {t("Home")}
                    </StyledLink>} />
                  <StyledTab
                    dir={isRtl ? 'rtl' : 'ltr'}
                    label={
                      <>
                        <StyledLink to="/projects">
                          {t("Project__Title")}
                          <ProjectIndicator>{t("ProjectIndicator")}</ProjectIndicator>
                        </StyledLink>
                      </>
                    }
                  />
                  <StyledTab
                    dir={isRtl ? 'rtl' : 'ltr'}
                    label={<StyledLink to="/about">{t("About")}</StyledLink>}
                  />
                  <StyledTab
                    dir={isRtl ? 'rtl' : 'ltr'}
                    label={<StyledLink to="/contact">{t("Contact")}</StyledLink>}
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
