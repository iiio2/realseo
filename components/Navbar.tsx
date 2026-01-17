import { AppBar, Box, Toolbar, IconButton, Avatar, Menu, MenuItem, Typography, Chip } from '@mui/material';
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
      position="sticky"
      sx={{
        backgroundColor: '#86937F',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          px: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo on the left */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, paddingTop: '12px', paddingBottom:'7px' }}>
          <Image
            src="/new-logo.png"
            alt="REALSEO Logo"
            width={205}
            height={53}
            priority
            style={{ objectFit: 'contain', borderRadius: '4px', }}
          />
          <Image
            src="/three-icon.png"
            alt='Three icon'
            width={34}
            height={20}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Box>

        {/* Right side icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <IconButton
            sx={{
              width: 33,
              height: 34,
              padding: 0,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Image
              src="/ject.png"
              alt="Settings"
              width={24}
              height={24}
              style={{ objectFit: 'contain' }}
            />
          </IconButton>
          <IconButton
            sx={{
              width: 33,
              height: 34,
              padding: 0,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Image
              src="/icon-1.png"
              alt="Settings"
              width={24}
              height={24}
              style={{ objectFit: 'contain' }}
            />
          </IconButton>

          <IconButton
            sx={{
              width: 33,
              height: 34,
              padding: 0,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Image
              src="/icon-2.png"
              alt="Notifications"
              width={24}
              height={24}
              style={{ objectFit: 'contain' }}
            />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
            <Avatar
              alt="David K. Croxton"
              src="/avatar.jpg"
              sx={{
                width: 36,
                height: 36,
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.9,
                },
              }}
              onClick={handleAvatarClick}
            >
              DC
            </Avatar>
            <Typography
              sx={{
                color: 'white',
                fontSize: '13px',
                fontWeight: 500,
                display: { xs: 'none', md: 'block' },
              }}
            >
              David K. Croxton
            </Typography>
          </Box>

          <Chip
            label="33 x 34"
            sx={{
              ml: 2,
              backgroundColor: '#5BA6D6',
              color: 'white',
              fontSize: '12px',
              fontWeight: 600,
              height: '28px',
            }}
          />
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
