import * as React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { ROUTES_PATHS } from '../model';
import { RootPage } from '../pages/RootPage';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route path={ROUTES_PATHS.root} element={<RootPage />} />
      <Route path={ROUTES_PATHS.forbidden} element={<>{'Forbidden'}</>} />
      <Route path={ROUTES_PATHS.notFound} element={<>{'Not Found'}</>} />
    </Routes>
  </Router>
);
