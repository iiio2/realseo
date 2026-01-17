import { Box } from '@mui/material';

const Footer = () => {
  return (
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
        marginLeft: 'calc(235px + 24px)',
        marginRight: '48px',
        marginTop: '24px',
      }}
    >
      <p>Copyright @2023 Real.seo digital</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <p>Terms and Conditions</p>
        <p>Privacy Poolicy</p>
      </div>
    </Box>
  );
};

export default Footer;