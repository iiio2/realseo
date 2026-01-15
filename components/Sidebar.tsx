import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const menuItems: MenuItem[] = [
  { label: 'Dashboard', icon: <DashboardOutlinedIcon />, path: '/' },
  { label: 'Account Managers', icon: <PeopleOutlineIcon />, path: '/account-managers' },
  { label: 'Tasks', icon: <AssignmentOutlinedIcon />, path: '/tasks' },
  { label: 'Sales Team', icon: <GroupsOutlinedIcon />, path: '/sales-team' },
  { label: 'Vendors', icon: <BusinessOutlinedIcon />, path: '/vendors' },
  { label: 'Clients', icon: <PersonOutlineIcon />, path: '/clients' },
  { label: 'Settings', icon: <SettingsOutlinedIcon />, path: '/settings' },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: 235,
        height: 'calc(100vh - 60px)',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: 0,
        top: '60px',
        pt: 2,
        pb: 3,
        overflowY: 'auto',
        borderRight: '1px solid #E0E0E0',
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
                    color: isActive ? 'white' : '#666666',
                    minWidth: 36,
                  }}
                >
                  {item.icon}
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