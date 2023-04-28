import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from './theme';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} /> */}
    </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
