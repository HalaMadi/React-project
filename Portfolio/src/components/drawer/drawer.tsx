import { Drawer } from '@mui/material';
import { useState } from 'react';
const drawerComp: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
