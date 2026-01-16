import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar, Sidebar } from "@/components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#86937F',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ display: 'flex', flex: 1 }}>
          <Sidebar />
          <Box
            component="main"
            sx={{
              flex: 1,
              marginLeft: '235px',
              backgroundColor: '#F5F5F5',
              p: 0,
              minHeight: 'calc(100vh - 60px)',
            }}
          >
            <Component {...pageProps} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
