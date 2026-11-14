import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import { useRouter } from 'next/router';
import Image, { type StaticImageData } from 'next/image';
import dashboardIcon from '@/assets/images/dashboard-icon.png';
import accountManagerIcon from '@/assets/images/account-manager-icon.png';
import salesTeamIcon from '@/assets/images/sales-team-icon.png';
import clientsIcon from '@/assets/images/clients-icon.png';
import settingsIcon from '@/assets/images/settings-icon.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface MenuItem {
  label: string;
  icon: StaticImageData;
  path: string;
}

const menuItems: MenuItem[] = [
  { label: 'Dashboard', icon: dashboardIcon, path: '/dashboard' },
  { label: 'Account Managers', icon: accountManagerIcon, path: '/account-managers' },
  { label: 'Tasks', icon: accountManagerIcon, path: '/tasks' },
  { label: 'Sales Team', icon: salesTeamIcon, path: '/sales-team' },
  { label: 'Vendors', icon: accountManagerIcon, path: '/vendors' },
  { label: 'Clients', icon: clientsIcon, path: '/' },
  { label: 'Settings', icon: settingsIcon, path: '/settings' },
];

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const Sidebar = ({ mobileOpen, handleDrawerToggle }: SidebarProps) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const drawerContent = (
    <Box
      sx={{
        pt: 2,
        pb: 3,
        overflowY: 'auto',
        height: '100%',
      }}
    >
      {/* Navigation Items */}
      <List sx={{ px: 2, flex: 1 }}>
        {menuItems.map((item) => {
          const isActive =
            router.pathname === item.path ||
            (item.path === '/' && router.pathname === '/new');

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
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: '14px',
                        fontWeight: isActive ? 600 : 400,
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 235,
            boxSizing: 'border-box',
            top: '60px',
            height: 'calc(100vh - 60px)',
            backgroundColor: '#fff',
            borderRight: '1px solid #E0E0E0',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    );
  }

  return (
    <Box
      sx={{
        width: 235,
        flexShrink: 0,
        height: 'calc(100vh - 60px)',
        position: 'fixed',
        top: '60px',
        left: 0,
        backgroundColor: '#fff',
        borderRight: '1px solid #E0E0E0',
        overflowY: 'auto',
      }}
    >
      {drawerContent}
    </Box>
  );
};

export default Sidebar;