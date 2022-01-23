import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';

import { DASHBOARD_PATH, SETTINGS_PATH, USERS_PATH, ADMINUSERS_PATH } from '../../constants/routes';
import { LayoutContext } from '../context/layout';

const anchor = 'left';
const drawerWidth = 250;

const menuItems = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: DASHBOARD_PATH },
  { label: 'Users', icon: <GroupIcon />, path: USERS_PATH },
  { label: 'Admin Users', icon: <GroupIcon />, path: ADMINUSERS_PATH, isDivider: true },
  { label: 'Settings', icon: <SettingsIcon />, path: SETTINGS_PATH }
];

export default function Sidebar() {
  const navigate = useNavigate();
  const layout = React.useContext(LayoutContext);

  const toggleDrawer = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    layout.toggleSidebar();
  };

  const onMenuClick = path => () => navigate(path);

  const list = () => (
    <Box sx={{ width: drawerWidth, mt: 8 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        {menuItems.map(({ path, label, icon, isDivider = false }) => (
          <React.Fragment key={path}>
            <ListItem button onClick={onMenuClick(path)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
            {isDivider ? <Divider /> : null}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
  return (
    <Drawer
      anchor={anchor}
      open={layout.isSidebarOpen}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
      }}
      onClose={toggleDrawer}
    >
      {list(anchor)}
    </Drawer>
  );
}
