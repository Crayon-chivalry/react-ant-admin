import { createBrowserRouter } from "react-router-dom";

import MainLayout from '@/pages/MainLayout'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
import User from '@/pages/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: '/user',
        element: <User />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router