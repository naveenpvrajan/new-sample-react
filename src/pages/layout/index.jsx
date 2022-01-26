import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Header from '../../components/layout/header';
import Content from '../../components/layout/content';
import Footer from '../../components/layout/footer';
import Sidebar from '../../components/layout/sidebar';
import { LayoutProvider } from '../../components/context/layout';
import ModalRoot from '../../components/modalRoot';
import useNotifier from '../../components/notification';

export default function Layout() {
  useNotifier();

  return (
    <LayoutProvider>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <CssBaseline />
        <Header />
        <Sidebar />
        <ModalRoot />
        <Container component="main" sx={{ mt: 10, mb: 2, mx: 0 }} maxWidth={'xxl'}>
          <Content />
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            mt: 'auto',
            backgroundColor: theme =>
              theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
          }}
        >
          <Container sx={{ mx: 0 }} maxWidth={'xxl'}>
            <Footer />
          </Container>
        </Box>
      </Box>
    </LayoutProvider>
  );
}
