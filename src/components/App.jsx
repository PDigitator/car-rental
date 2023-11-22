import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from './Layout';
import PageLayout from './PageLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<PageLayout />}>
          <Route index element={<CatalogPage />} />
        </Route>
        <Route path="favorites" element={<PageLayout />}>
          <Route index element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
