import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { StyledButton, StyledAppBar } from "./style";

const menu: React.FC = () => {
  return (
    <StyledAppBar>
      <AppBar className="menu">
        <Toolbar>
          <StyledButton>
            <Button color="inherit" component={Link} to="/home">
              Home
            </Button>
          </StyledButton>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </StyledAppBar>
  );
};

export default menu;
