import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface MenuItem {
  label: string;
  icon: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { label: 'Dashboard', icon: '/dashboard-icon.png', path: '/dashboard' },
  { label: 'Account Managers', icon: '/account-manager-icon.png', path: '/account-managers' },
  { label: 'Tasks', icon: '/account-manager-icon.png', path: '/tasks' },
  { label: 'Sales Team', icon: '/sales-team-icon.png', path: '/sales-team' },
  { label: 'Vendors', icon: '/account-manager-icon.png', path: '/vendors' },
  { label: 'Clients', icon: '/clients-icon.png', path: '/' },
  { label: 'Settings', icon: '/settings-icon.png', path: '/settings' },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: 235,
        height: 'calc(100vh - 60px)',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: 0,
        top: '60px',
        pt: 2,
        pb: 3,
        overflowY: 'auto',
      }}
    >
      {/* Navigation Items */}
      <List sx={{ px: 2, flex: 1 }}>
        {menuItems.map((item) => {
          const isActive = router.pathname === item.path;

          return (
            <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => router.push(item.path)}
                sx={{
                  borderRadius: '6px',
                  backgroundColor: isActive ? '#86937F' : 'transparent',
                  color: isActive ? 'white' : '#666666',
                  '&:hover': {
                    backgroundColor: isActive ? '#86937F' : 'rgba(134, 147, 127, 0.1)',
                  },
                  py: 1.2,
                  px: 1.5,
                  transition: 'all 0.2s ease',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                    style={{
                      objectFit: 'contain',
                      filter: isActive ? 'brightness(0) invert(1)' : 'none',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '14px',
                    fontWeight: isActive ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;