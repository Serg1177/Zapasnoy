import * as React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { ROUTES_PATHS } from '../model';
import { RootPage } from '../pages/RootPage';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route path={ROUTES_PATHS.Root} element={<RootPage />} />
      <Route path={ROUTES_PATHS.Forbidden} element={<>{'Forbidden'}</>} />
      <Route path={ROUTES_PATHS.NotFound} element={<>{'Not Found'}</>} />
    </Routes>
  </Router>
);
