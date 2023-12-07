import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const DrawerContainer = styled.div`
  width: 250px;
  padding: 20px;
`;

const DrawerComp: React.FC = () => {
  return (
    <DrawerContainer>
      <List>
        <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <Divider />
        <ListItemButton component={Link} to="/projects">
          <ListItemIcon>
            <FileCopyIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItemButton>
        <Divider />
        <ListItemButton component={Link} to="/about">
          <ListItemIcon>
            <PersonPinIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
        <Divider />
        <ListItemButton component={Link} to="/contact">
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItemButton>
      </List>
    </DrawerContainer>
  );
};

export default DrawerComp;
