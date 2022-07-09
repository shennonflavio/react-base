import React from 'react';
import { BrowserRouter, Route, Routes as PageRoutes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
// import { Container } from './styles';

function Routes() {
  return (
    <BrowserRouter>
      <PageRoutes>
        <Route path="/" element={<HomePage />} />
      </PageRoutes>
    </BrowserRouter>
  );
}

export default Routes;
