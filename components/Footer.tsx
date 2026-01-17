import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        marginLeft: '235px',
        paddingTop: '24px',
        paddingLeft: '24px',
        paddingRight: '48px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: '1.8rem',
          color: '#000',
          fontSize: '16px',
          fontWeight: 400,
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p>Copyright @2023 Real.seo digital</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <p>Terms and Conditions</p>
          <p>Privacy Poolicy</p>
        </div>
      </Box>
    </Box>
  );
};

export default Footer;