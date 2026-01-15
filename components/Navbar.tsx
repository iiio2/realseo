import { AppBar, Box, Toolbar, IconButton, Avatar } from '@mui/material';
import Image from 'next/image';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <LightbulbIcon />
          </IconButton>

          <IconButton
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <NotificationsIcon />
          </IconButton>

          <IconButton
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <SettingsIcon />
          </IconButton>

          <Avatar
            alt="David K. Croxton"
            src="/avatar.jpg"
            sx={{
              width: 40,
              height: 40,
              ml: 1,
              cursor: 'pointer',
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
