import { AppBar, Box, Toolbar, Avatar, Menu, MenuItem, Typography, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';
import { useState } from 'react';

interface NavbarProps {
  handleDrawerToggle: () => void;
}

const Navbar = ({ handleDrawerToggle }: NavbarProps) => {
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
          px: { xs: 1.5, sm: 2, md: 3 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo on the left */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, sm: 2, md: 4 },
          paddingTop: '12px',
          paddingBottom:'7px'
        }}>
          <Box sx={{
            position: 'relative',
            width: { xs: 140, sm: 170, md: 205 },
            height: { xs: 36, sm: 44, md: 53 }
          }}>
            <Image
              src="/new-logo.png"
              alt="REALSEO Logo"
              fill
              priority
              style={{ objectFit: 'contain', borderRadius: '4px' }}
            />
          </Box>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: 'flex', md: 'none' },
              padding: 0.5,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
            aria-label="toggle sidebar"
          >
            <Image
              src="/three-icon.png"
              alt='Toggle sidebar'
              width={34}
              height={20}
              priority
              style={{ objectFit: 'contain' }}
            />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Image
              src="/three-icon.png"
              alt='Three icon'
              width={34}
              height={20}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Box>

        {/* Right side icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {/* Hide bug/notification/settings icons on mobile */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1.5 }}>
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
          </Box>

          {/* Avatar - always visible */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              ml: { xs: 0, sm: 1 },
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
