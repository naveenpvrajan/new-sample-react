import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuOpenIcon from '@mui/icons-material/MenuOutlined';

import { logOut } from '../../store/actions/auth';
import { LOGIN_PATH, USERS_PATH } from '../../constants/routes';
import { Divider, ListItemIcon } from '@mui/material';
import { LayoutContext } from '../context/layout';
import { showModal } from '../../store/actions/modal';
import { USER_FORM } from '../../store/actionTypes/modal';

const menuItems = [
  { label: 'Profile', value: 'profile', icon: <AccountCircleIcon />, path: USERS_PATH, isDivider: true },
  { label: 'Logout', value: 'logout', icon: <LogoutIcon />, path: LOGIN_PATH }
];

const Header = () => {
  const dispatch = useDispatch();
  const layout = React.useContext(LayoutContext);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onMenuClick = item => () => {
    if (item.value === 'logout') {
      dispatch(logOut());
    } else {
      dispatch(
        showModal({
          modalType: USER_FORM,
          modalProps: {
            form: 'edit_profile_form',
            title: 'Edit Profile'
            // initialValues: userData
          }
        })
      );
    }
    handleCloseUserMenu();
  };

  function rcount() {
    const j_data = [
      {
        id: 2782,
        name: 'testing',
        email: 'testing1198@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2784,
        name: 'testing',
        email: 'testing536@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2785,
        name: 'testing',
        email: 'testing7507@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2790,
        name: 'testing',
        email: 'testing6606@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2783,
        name: 'testing',
        email: 'testing5491@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2787,
        name: 'testing',
        email: 'testing1499@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2791,
        name: 'testing',
        email: 'testing878@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2792,
        name: 'testing',
        email: 'testing3423@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2693,
        name: 'testing',
        email: 'testing4799@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2697,
        name: 'testing',
        email: 'testing8337@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2703,
        name: 'testing',
        email: 'testing1240@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2799,
        name: 'testing',
        email: 'testing6819@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2690,
        name: 'Natasha Romanov',
        email: 'nat31@marvel.com',
        gender: 'female',
        status: 'active'
      },
      {
        id: 2691,
        name: 'testing',
        email: 'testing6038@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2789,
        name: 'testing',
        email: 'testing5048@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2696,
        name: 'testing',
        email: 'testing6104@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2698,
        name: 'Natasha Romanov',
        email: 'nat299@marvel.com',
        gender: 'female',
        status: 'active'
      },
      {
        id: 2700,
        name: 'testing',
        email: 'testing2961@ss.is',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2704,
        name: 'Rahul Khan',
        email: 'rahul@gmail.com',
        gender: 'male',
        status: 'active'
      },
      {
        id: 2800,
        name: 'testing',
        email: 'testing7391@ss.is',
        gender: 'male',
        status: 'active'
      }
    ];

    return Object.keys(j_data).length;
  }

  const [toggle, setChecked] = React.useState(false);

  const toggler = () => {
    toggle ? setChecked(false) : setChecked(true);
  };

  const renderActionMenu = () => (
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {menuItems.map(({ label, icon, isDivider = false, ...rest }) => [
        <MenuItem onClick={onMenuClick(rest)}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <Typography textAlign="center">{label}</Typography>
        </MenuItem>,
        isDivider ? <Divider /> : null
      ])}
    </Menu>
  );
  return (
    <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <div style={{ flexGrow: 1, cursor: 'pointer' }} onClick={layout.toggleSidebar}>
            {/* <IconButton color="default"> */}
            <MenuOpenIcon />
            {/* </IconButton> */}
          </div>

          {toggle ? (
            <Typography className="heading" variant="h6" noWrap component="div" sx={{ flexGrow: 1, mr: -18 }}>
              User management
            </Typography>
          ) : (
            ''
          )}

          <Switch onClick={toggler} color="default" />
          <Tooltip title="Total Users">
            <AvatarGroup total={rcount()} sx={{ p: 1 }}></AvatarGroup>
          </Tooltip>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Alex Kumar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            {renderActionMenu()}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
