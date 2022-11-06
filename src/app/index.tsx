/* eslint-disable prettier/prettier */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import 'antd/dist/antd.css';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
}
