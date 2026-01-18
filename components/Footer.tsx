import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        marginLeft: { xs: 0, sm: 0, md: '235px' },
        paddingTop: { xs: '12px', sm: '18px', md: '24px' },
        paddingLeft: { xs: '16px', sm: '24px' },
        paddingRight: { xs: '16px', sm: '24px', md: '48px' },
        backgroundColor: '#f9f9f9',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
          color: '#000',
          fontSize: { xs: '13px', md: '16px' },
          fontWeight: 400,
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Typography sx={{ fontSize: { xs: '13px', md: '16px' } }}>
          Copyright @2023 Real.seo digital
        </Typography>
        <Box sx={{
          display: 'flex',
          gap: { xs: '0.5rem', sm: '1rem' },
          flexDirection: { xs: 'column', sm: 'row' },
        }}>
          <Typography sx={{ fontSize: { xs: '13px', md: '16px' } }}>
            Terms and Conditions
          </Typography>
          <Typography sx={{ fontSize: { xs: '13px', md: '16px' } }}>
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;