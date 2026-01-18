import { AppBar, Box, Toolbar, Avatar, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
          
            <Image
              src="/ject.png"
              alt="Bug Report"
              width={33}
              height={34}
              style={{ objectFit: 'contain' }}
            />
      
            <Image
              src="/icon-1.png"
              alt="Notifications"
              width={33}
              height={34}
              style={{ objectFit: 'contain' }}
            />
       
            <Image
              src="/icon-2.png"
              alt="Settings"
              width={33}
              height={34}
              style={{ objectFit: 'contain' }}
            />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              ml: 1,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.9,
              },
            }}
            onClick={handleAvatarClick}
          >
            <Avatar
              alt="David K. Croxton"
              src="/man.jpg"
              sx={{
                width: 32,
                height: 33,
                borderRadius:'5px'
              }}
              variant='square'
            >
              DC
            </Avatar>
            <Typography
              sx={{
                color: 'white',
                fontSize: '13px',
                fontWeight: 500,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              David K. Croxton
              <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
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
