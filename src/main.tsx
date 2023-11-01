import { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { AppRoutes } from './routes/AppRoutes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
);
