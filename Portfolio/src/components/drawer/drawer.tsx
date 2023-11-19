import {
  Box,
  Drawer,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const drawerComp: React.FC = () => {
    const [openDrawer, setopenDrawer] = useState(false);
  return (
    <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
      {/* <List>
        <ListItemButton>
          <ListItemIcon>
            <ListItemText>Login</ListItemText>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </List>
      <IconButton onClick={() => setopenDrawer(!openDrawer)}>
        <Box sx={{ bgcolor: "red" }}>
          <MenuIcon />
        </Box> */}
      {/* </IconButton> */}
    </Drawer>
  );
};

export default drawerComp;
