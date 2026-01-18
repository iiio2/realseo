import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar, Sidebar, Footer } from "@/components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const theme = createTheme({
  palette: {
    primary: {
      main: '#86937F',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  // Close drawer on route change
  useEffect(() => {
    const handleRouteChange = () => setMobileOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar handleDrawerToggle={handleDrawerToggle} />
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Box sx={{ display: 'flex', flex: 1 }}>
            <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                marginLeft: { xs: 0, sm: 0, md: '235px' },
                p: 0,
                minHeight: 'calc(100vh - 60px)',
                overflow: 'hidden',
                maxWidth: { xs: '100vw', md: 'calc(100vw - 235px)' },
              }}
            >
              <Component {...pageProps} />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
