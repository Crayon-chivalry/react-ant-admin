import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import router from './router';

import 'normalize.css'

import './utils/remAdaptor'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={ router } future={{ v7_startTransition: true }} /> */}
    <RouterProvider router={ router } />
  </React.StrictMode>
);
