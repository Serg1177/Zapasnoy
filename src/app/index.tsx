import * as React from 'react';

import { Provider } from 'react-redux';

import { AppRouter } from '~/routes/routers';
import { store } from '~/store';

export const App: React.FC = () => (
  <Provider store={store} >
      <AppRouter />
  </Provider>
);
