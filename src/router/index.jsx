import { createBrowserRouter } from "react-router-dom";

import MainLayout from '@/pages/MainLayout'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router