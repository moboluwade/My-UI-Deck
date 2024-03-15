import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotchHeader from './views/notch-header/NotchHeader.tsx'
import Views from './views/Views.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'ui',
    element: <Views />,
    children: [
      {
        path: '/ui/notch',
        element: <NotchHeader />
      }
    ]
  },
  {
    path: '/ui/notch',
    element: <NotchHeader />
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
