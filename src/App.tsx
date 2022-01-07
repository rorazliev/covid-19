import { Container, ThemeProvider } from '@mui/material';
import React, { lazy, ReactElement, useEffect } from 'react';
import { Provider } from 'react-redux';
import {
  Navigate, HashRouter as Router, Route, Routes,
} from 'react-router-dom';
import { theme } from './assets/themes';
import Footer from './components/Footer';
import Header from './components/Header';
import { withSuspense } from './hoc/withSuspense';
import HomePage from './pages/HomePage';
import store from './redux/store';

//
const StatePage = lazy(() => import('./pages/StatePage'));
const SuspendedPage = withSuspense(StatePage);

/**
 * Ingore an unhandled rejection
 * @param {PromiseRejectionEvent} event
 * @returns {void}
 */
const ignoreRejections = (event: PromiseRejectionEvent): void => {
  event.preventDefault();
};

const App: React.FC = (): ReactElement => {
  // Prevent the app from crashing due to unhandled rejections
  useEffect(() => {
    window.addEventListener('unhandledrejection', ignoreRejections);
    return () => {
      window.removeEventListener('unhandledrejection', ignoreRejections);
    };
  }, []);

  // Render
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Container maxWidth="md" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:name" element={<SuspendedPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

const AppContainer: React.FC = (): ReactElement => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppContainer;
