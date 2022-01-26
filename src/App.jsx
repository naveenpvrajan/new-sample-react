import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import 'react-block-ui/style.css';
import { SnackbarProvider } from 'notistack';

import { theme } from './constants';
import { INDEX_PATH, LOGIN_PATH, SIGNUP_PATH } from './constants/routes';
import NotFound from './pages/notFound';
import PrivateRoute from './routeGuard/PrivateRoute';
import PublicRoute from './routeGuard/PublicRoute';
import store from './store';
import ErrorBoundary from './components/errorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <BrowserRouter>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path={LOGIN_PATH} element={<PublicRoute component={lazy(() => import('./pages/login'))} />} />
                  <Route
                    path={SIGNUP_PATH}
                    element={<PublicRoute component={lazy(() => import('./pages/signup'))} />}
                  />
                  <Route
                    path={INDEX_PATH}
                    element={<PrivateRoute component={lazy(() => import('./pages/layout'))} />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
