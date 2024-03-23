import {
  AppBar,
  IconButton,
  MenuItem,
  Popover,
  Toolbar,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu, Bell } from '@/assets/svg/Icon';
import { logOut } from '@/features/user/userSlice';
import logoIUH from './logo.png';

function Header({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangePassword = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logOut());
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      // color="success"
      sx={{
        height: '64px',
        flexDirection: 'row',
        backgroundImage: 'linear-gradient(to right,#C4D4D9, #317CED,#0052CC)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
        <Toolbar sx={{ width: '15em', justifyContent: 'space-between' }}>
          <Menu width={24} height={24} />
          <img
            src={logoIUH}
            alt="IUH"
            style={{
              width: '158px',
              height: '30px',
              gap: '32px',
              objectFit: 'contain',
            }}
          />
        </Toolbar>

        <Toolbar
          sx={{
            justifyContent: 'space-between',
            width: '300px',
            marginRight: '3em',
          }}
        >
          <Bell width={24} height={24} color="white" />

          <Toolbar>
            <Typography variant="body2">{user}</Typography>
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
            <Popover
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <MenuItem onClick={handleChangePassword}>
                Change Password
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Popover>
          </Toolbar>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Header;
