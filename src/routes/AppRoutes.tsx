import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomeView } from '../views/pages/HomeView';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      {/* Redireciona qualquer rota inexistente de volta para a Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
