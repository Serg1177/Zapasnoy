import * as React from 'react';

import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AppRouter } from '~/routes';
import { store } from '~/store';
import { lightTheme } from '~/ui/styles';

export const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <AppRouter />
    </ThemeProvider>
  </Provider>
);
