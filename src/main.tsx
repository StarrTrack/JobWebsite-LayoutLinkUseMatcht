import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import '@mantine/core/styles.css';
import App from './App.tsx';
import './index.css';
import { store } from './store/store';

const theme = createTheme({
  colors: {
    blue: [
      '#DEECFF',
      '#C9E0FF',
      '#B3D4FF',
      '#9DC8FF',
      '#5E96FC',
      '#4A7FDB',
      '#3B6AC2',
      '#2D54A9',
      '#1F3F90',
      '#112B77',
    ],
  },
  primaryColor: 'blue',
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  </StrictMode>
);