import { AppBar, Box, Toolbar, IconButton, Avatar, Menu, MenuItem, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#86937F',
        height: '73px',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          height: '73px',
          minHeight: '73px !important',
          px: '15px',
          pt: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/logo.png"
            alt="REALSEO Logo"
            width={205}
            height={53}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Box>

        {/* Right side icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pt: '10px' }}>
          <IconButton
            sx={{
              width: 40,
              height: 40,
              padding: 0,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Image
              src="/icon-1.png"
              alt="Settings"
              width={32}
              height={32}
              style={{ objectFit: 'contain' }}
            />
          </IconButton>

          <IconButton
            sx={{
              width: 40,
              height: 40,
              padding: 0,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Image
              src="/icon-2.png"
              alt="Notifications"
              width={32}
              height={32}
              style={{ objectFit: 'contain' }}
            />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
            <Avatar
              alt="David K. Croxton"
              src="/avatar.jpg"
              sx={{
                width: 40,
                height: 40,
                cursor: 'pointer',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  border: '2px solid rgba(255, 255, 255, 0.6)',
                },
              }}
              onClick={handleAvatarClick}
            >
              DC
            </Avatar>
            <Typography
              sx={{
                color: 'white',
                fontSize: '14px',
                fontWeight: 500,
                display: { xs: 'none', sm: 'block' },
              }}
            >
              David K. Croxton
            </Typography>
          </Box>
        </Box>
      </Toolbar>

      {/* Avatar Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            minWidth: 200,
            '& .MuiMenuItem-root': {
              px: 2,
              py: 1.5,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My Account</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
